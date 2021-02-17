import { Container } from '@material-ui/core'
import Layout from '../Layout'
import { Content, Keyword } from '../../interfaces/product'
import Search from '../Search'
import Searchfilter from '../Searchfilter'
import Popularsearch from '../Popularsearch'
import Announcemobile from '../Announcemobile'
import Info from '../Info'
import Activity from '../Activity'
import React from 'react'
import News from '../News'
import Description from '../Description'
import Footer from '../Footer'


const Home = (props: any) => {
    const { data } = props.data
    const contents: Content[] = data.contents.datas
    const keywords: Keyword[] = data.keywords.datas

    const items = []

    for (const [index, value] of contents.entries()) {
        value.content_title

        items.push(<li key={index}>{value.content_title}</li>)
    }

    return (
        <Layout title="Home | KaideeWa.com">
            <Container maxWidth="md" className="container">
                <Search/>
                <Searchfilter keywords={keywords}/>
                <Popularsearch/>
                {/* <ul style={{marginLeft:'8%'}}><a href="#">{items}</a></ul> */}
                <Announcemobile/>
                <Info/>
                <Activity/>
                <News/>
                <Description/>
                
            </Container>
            <Footer/>
        </Layout>

    )
}

export default Home
