import { provinces } from '../../data/provinces';
import { cities } from '../../data/cities';
import { useForm, FormProvider, useFormContext } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import styles from './CheckoutForm.module.css';
import CheckoutFormInputText from './CheckoutFormInputText';
import CheckoutFormSelect from './CheckoutFormSelect';
import CheckoutFormCheckbox from './CheckoutFormCheckbox';
import CheckoutFormInputContainer from './CheckoutFormInputContainer';
import CheckoutFormButtonContainer from './CheckoutFormButtonContainer';
import CheckoutSubmitButton from './CheckoutSubmitButton';
import CheckoutReturnLink from './CheckoutReturnLink';
import CheckoutFormSubtitle from './CheckoutFormSubtitle';

type FormValues = {
 email: string;
 address: string;
 firstName: string;
 lastName: string;
 addressDetail: string;
 province: string;
 city: string;
 phone: number;
};

export default function CheckoutForm() {
 const form = useForm<FormValues>({
  defaultValues: {
   email: '',
   address: '',
   firstName: '',
   lastName: '',
   addressDetail: '',
   province: 'Buenos Aires',
   city: 'Buenos Aires',
   phone: 0,
  },
 });

 const methods = form;

 return (
  <>
   <FormProvider {...methods}>
    <form className={styles.form}>
     <CheckoutFormInputText id='email' content='Email' />
     <CheckoutFormCheckbox content='Quiero recibir por email noticias y ofertas' />
     <CheckoutFormSubtitle />
     <CheckoutFormInputText id='address' content='Dirección' />
     <CheckoutFormInputContainer>
      <CheckoutFormInputText id='firstName' content='Nombre' />
      <CheckoutFormInputText id='lastName' content='Apellido' />
     </CheckoutFormInputContainer>
     <CheckoutFormInputText
      id='addressDetail'
      content='Apartamento, suite, etc. (opcional)'
     />
     <CheckoutFormInputContainer>
      <CheckoutFormSelect label='Provincia' data={provinces} />
      <CheckoutFormSelect label='Ciudad' data={provinces} />
     </CheckoutFormInputContainer>
     <CheckoutFormInputText id='phone' content='Telefono' />
     <CheckoutFormButtonContainer>
      <CheckoutSubmitButton />
      <CheckoutReturnLink />
     </CheckoutFormButtonContainer>
    </form>
   </FormProvider>
   <DevTool control={methods.control} />
  </>
 );
}
