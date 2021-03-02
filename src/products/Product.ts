import { GetServerSidePropsContext } from "next"
import { ParsedUrlQuery } from "querystring"
import { getContet } from "../../utils/dudey"

const Product = async (context: GetServerSidePropsContext<ParsedUrlQuery>) => {
    const contentID = context.query.id
    const content = await getContet({ id: contentID.toString() })

    const data: any = { data: { content } }

    return { props: { data } }
}

export default Product
