import { GetServerSideProps } from 'next'
import Home from '../components/Home'
import Products from '../src/products/Products'


export const getServerSideProps: GetServerSideProps = async (context) => await Products(context)

export default Home
