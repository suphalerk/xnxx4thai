import { GetServerSidePropsContext } from "next"
import { ParsedUrlQuery } from "querystring"
import { getContents } from "../../utils/dudey"

const Products = async (context: GetServerSidePropsContext<ParsedUrlQuery>) => {
    const page: number = +context.query.page || 1
    const contents = await getContents({ page, pageSize: 10 })

    const data: any = { data: { contents } }

    return { props: { data } }
}

export default Products
