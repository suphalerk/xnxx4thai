import Product from '../../../components/Product';
import ProductData from '../../../src/products/Product'
import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async (context) => await ProductData(context)

export default Product
