import Body from 'src/components/body/body';
import Layout from 'src/components/layout/layout';
import Slider from 'src/components/slider/slider';
import { supabase } from '../lib/supabaseClient';

export default function Home({ products }: any) {
 return (
  <>
   <Layout>
    <Slider />
    <Body products={products} />
   </Layout>
  </>
 );
}

export async function getServerSideProps() {
 let { data } = await supabase.from('products').select();

 return {
  props: {
   products: data,
  },
 };
}
