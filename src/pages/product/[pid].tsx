import { GetServerSidePropsContext } from 'next';
import Layout from 'src/components/layout/Layout';
import ProductDetailComponent from 'src/components/productDetail/ProductDetailComponent';
import { Product } from 'src/types/types';
import { supabase } from '../../lib/supabaseClient';

interface Props {
 products: Product;
}

export default function ProductDetail({ products }: Props) {
 return (
  <Layout>
   <ProductDetailComponent productDetail={products} />
  </Layout>
 );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
 const { pid } = context.query;

 const { data }: any = await supabase
  .from('products')
  .select()
  .eq('id_product', pid);

 return {
  props: {
   products: data[0],
  },
 };
}
