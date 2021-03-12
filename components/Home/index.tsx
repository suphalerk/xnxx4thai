import { Container } from '@material-ui/core'
import Layout from '../Layout'
import { Content, Keyword } from '../../interfaces/product'
import Searchfilter from '../Searchfilter'
import Popularsearch from '../Popularsearch'
import Announcemobile from '../Announcemobile'
import Info from '../Info'
import Activity from '../Activity'
// import React, { useEffect } from 'react'
import News from '../News'
import Description from '../Description'
import Footer from '../Footer'
import React from 'react'
import Search from '../Search'
// import { useRouter } from 'next/router'



const Home = (props: any) => {

    // const router = useRouter()
    const { data } = props.data
    const contents: Content[] = data.contents.datas
    const keywords: Keyword[] = data.keywords.datas

    const items = []

    // useEffect(() => {
    //     router.push('/Product')
 
    // })

    for (const [index, value] of contents.entries()) {
        value.content_title

        items.push(<li key={index}>{value.content_title}</li>)
    }

    return (
        
        <Layout title="Home | KaideeWa.com">
            <link rel="shortcut icon" href="/favicon.ico" />
            <Search/>
            <Container maxWidth="lg" className="container">
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
