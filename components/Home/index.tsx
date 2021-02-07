import Layout from '../Layout'
// import Link from 'next/link'
import { Content } from '../../interfaces/product'

const Home = (props: any) => {
    const { data } = props.data
    const contents: Content[] = data.contents.datas

    const items = []

    for (const [index, value] of contents.entries()) {
        value.content_title

        items.push(<li key={index}>{value.content_title}</li>)
    }

    return (
        <Layout title="Home | Next.js + TypeScript Example">
            <h1>Hello Next.js 👋</h1>
            <p>
                Example data
            </p>
            <ul>{items}</ul>
        </Layout>
    )
}

export default Home
