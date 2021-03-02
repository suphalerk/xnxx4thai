import axios, { AxiosRequestConfig } from 'axios'
import redis from 'redis'

const contentDudeyAPI = 'https://dudey.co/api/content/all'
const contentByIdDudeyAPI = 'https://dudey.co/api/content/id'
const keywordDudeyAPI = 'https://dudey.co/api/content/keywords'

interface DataRequest {
    page?: any
    pageSize?: any
    search?: any
    id?: any
}

const expire = process.env.CACHE_EXPIRE ? parseInt(process.env.CACHE_EXPIRE) : 60
const configRequest: AxiosRequestConfig = { headers: { 'token': process.env.TOKEN } }

const getKeywords = async () => {
    const key = `kaideewa_${process.env.SITEKEY}_keywords`

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
                const res = await axios.post(keywordDudeyAPI, {}, configRequest)
                resv(res.data)
            } else {
                if (data) {
                    resv(JSON.parse(data ?? ""))
                } else {
                    const res = await axios.post(keywordDudeyAPI, {}, configRequest)
                    redisClient.setex(key, expire, JSON.stringify(res.data))

                    resv(res.data)
                }
            }
        })
    })
}

const getContents = async ({ page, pageSize, search = null }: { page: number, pageSize: number, search?: string | null }) => {
    let dataRequest: DataRequest = { "page": page, "pageSize": pageSize }
    let key = `kaideewa_${process.env.SITEKEY}_p${page}_ps${pageSize}`

    if (search !== null) {
        const encodeSearch = encodeURI(search)
        key = `${key}_s${encodeSearch}`

        dataRequest.search = search
    }

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

const getContet = async ({ id }: { id: string }) => {
    let dataRequest: DataRequest = { "id": parseInt(id) }
    let key = `kaideewa_${process.env.SITEKEY}_content_id_${id}`

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
                const res = await axios.post(contentByIdDudeyAPI, dataRequest, configRequest)
                resv(res.data)
            } else {
                if (data) {
                    resv(JSON.parse(data ?? ""))
                } else {
                    const res = await axios.post(contentByIdDudeyAPI, dataRequest, configRequest)
                    redisClient.setex(key, expire, JSON.stringify(res.data))

                    resv(res.data)
                }
            }
        })
    })
}

export {
    getContents,
    getKeywords,
    getContet
}
