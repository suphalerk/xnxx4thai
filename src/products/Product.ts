import { GetServerSidePropsContext } from "next"
import { ParsedUrlQuery } from "querystring"
import { getContet } from "../../utils/dudey"
import { getContents } from "../../utils/dudey"


const Product = async (context: GetServerSidePropsContext<ParsedUrlQuery>) => {
    const contentID = context.query.id
    const content = await getContet({ id: contentID.toString() })
    const page: number = +context.query.page || 1
    const contents = await getContents({ page, pageSize: 12 })

    const data: any = { data: { content,contents } }

    return { props: { data } }
}

export default Product