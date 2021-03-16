import { GetServerSidePropsContext } from "next"
import { ParsedUrlQuery } from "querystring"
import { getContents, getKeywords } from "../../utils/dudey"

const Productlist = async (context: GetServerSidePropsContext<ParsedUrlQuery>) => {
    const page: number = +context.query.page || 1
    const contents = await getContents({ page, pageSize: 10 })

    const keywords = await getKeywords()

    const data: any = { data: { contents, keywords } }

    return { props: { data } }
}

export default Productlist
