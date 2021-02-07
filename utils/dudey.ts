import axios, { AxiosRequestConfig } from 'axios'
import redis from 'redis'

const contentDudeyAPI = 'https://dudey.co/api/content/all'

const getContents = async ({ page, pageSize }: { page: number, pageSize: number }) => {
    const expire = process.env.CACHE_EXPIRE ? parseInt(process.env.CACHE_EXPIRE) : 60
    const key = `kaidee_${process.env.SITEKEY}_p${page}_ps${pageSize}`
    const dataRequest = { "page": page, "pageSize": pageSize }
    const configRequest: AxiosRequestConfig = { headers: { 'token': 'xxxxxxxx' } }

    const redisClient = redis.createClient({
        retry_strategy: (options) => {
            if (options.error && options.error.code === 'ECONNREFUSED') return new Error('The server refused the connection')
            if (options.total_retry_time > 1000 * 60 * 60) return new Error('Retry time exhausted');
            if (options.attempt > 10) return undefined

            return Math.min(options.attempt * 100, 3000);
        }
    })
    redisClient.on('error', (err) => console.log(err))

    return new Promise((resv, _rej) => {
        redisClient.get(key, async (error, data) => {
            if (error) {
                const res = await axios.post(contentDudeyAPI, dataRequest, configRequest)
                resv(res.data)
            } else {
                if (data) {
                    resv(JSON.parse(data ?? ""))
                } else {
                    const res = await axios.post(contentDudeyAPI, dataRequest, configRequest)
                    redisClient.setex(key, expire, JSON.stringify(res.data))

                    resv(res.data)
                }
            }
        })
    })
}

export {
    getContents
}
