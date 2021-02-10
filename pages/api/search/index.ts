import { NextApiRequest, NextApiResponse } from 'next'
import { getContents } from "../../../utils/dudey"

interface SearchResultData {
    id: number
    content_title: string
    content_url: string
    content_description: string
    remark: string
    price: string
    telephone: string
    email: string
    created_date: string
    content_date?: any
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const search = req.query.s.toString()
        const page = parseInt(req.query.p.toString())
        const pageSize = parseInt(req.query.ps.toString())

        const searchResult:any = (await getContents({ page, pageSize, search }))
        const result: SearchResultData[] = searchResult.datas

        res.status(200).json(result)
    } catch (err) {
        res.status(500).json({ statusCode: 500, message: err.message })
    }
}

export default handler
