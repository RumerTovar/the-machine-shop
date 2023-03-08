import { GetServerSidePropsContext } from 'next';
import Layout from 'src/components/layout/layout';
import { supabase } from '../../lib/supabaseClient';

export default function ProductDetail({ products }: any) {
 return <Layout>{<div>{products.product_description}</div>}</Layout>;
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
