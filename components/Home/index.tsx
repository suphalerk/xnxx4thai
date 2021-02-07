import { Container } from '@material-ui/core'
import Layout from '../Layout'
import { Content } from '../../interfaces/product'
import Pagination from '../Pagination'

const Home = (props: any) => {
    const { data } = props.data
    const contents: Content[] = data.contents.datas

    const items = []

    for (const [index, value] of contents.entries()) {
        value.content_title

        items.push(<li key={index}>{value.content_title}</li>)
    }

    const pages = { totalPages: data.contents.totalPages, page: 1 }

    return (
        <Layout title="Home | Next.js + TypeScript Example">
            <Container maxWidth="md" className="container">
                <h1>Hello Next.js 👋</h1>
                <p>
                    Example data
                </p>
                <ul>{items}</ul>
                <div id="pagination"><Pagination pages={pages} /></div>
            </Container>
        </Layout>
    )
}

export default Home
