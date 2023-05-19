import Body from 'src/components/body/Body';
import Layout from 'src/components/layout/Layout';
import Slider from 'src/components/slider/Slider';
import { Product } from 'src/types/types';
import { supabase } from '../lib/supabaseClient';

interface Props {
 products: Array<Product>;
}

export default function Home({ products }: Props) {
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
 const { data } = await supabase.from('products').select();

 return {
  props: {
   products: data,
  },
 };
}
