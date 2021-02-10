import { Container } from '@material-ui/core'
import Layout from '../Layout'
import { Content } from '../../interfaces/product'
import Search from '../Search'
import Searchfilter from '../Searchfilter'

const Home = (props: any) => {
    const { data } = props.data
    const contents: Content[] = data.contents.datas

    const items = []

    for (const [index, value] of contents.entries()) {
        value.content_title

        items.push(<li key={index}>{value.content_title}</li>)
    }

    return (
        <Layout title="Home | KaideeWa.com">
            <Container maxWidth="md" className="container">
            
                <Search/>
                <Searchfilter/>
            </Container>
        </Layout>
        
    )
}

export default Home
