import Productlist from '../../components/Productlist';
import { GetServerSideProps } from 'next';
import Products from '../../src/products/Products'

export const getServerSideProps: GetServerSideProps = async (context) => await Products(context)

export default Productlist

