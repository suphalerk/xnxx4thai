import { GetServerSideProps } from 'next';
import Home from '../../components/Home'
import Product from '../../src/products/Products'

export const getServerSideProps: GetServerSideProps = async (context) => await Product(context)

export default Home
