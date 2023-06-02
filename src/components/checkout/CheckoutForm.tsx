import { provinces } from '../../data/provinces';
import { useForm, SubmitHandler } from 'react-hook-form';
import styles from './CheckoutForm.module.css';
import CheckoutFormInputText from './CheckoutFormInputText';
import CheckoutFormSelect from './CheckoutFormSelect';
import CheckoutFormCheckbox from './CheckoutFormCheckbox';
import CheckoutFormInputContainer from './CheckoutFormInputContainer';
import CheckoutFormButtonContainer from './CheckoutFormButtonContainer';
import CheckoutSubmitButton from './CheckoutSubmitButton';
import CheckoutReturnLink from './CheckoutReturnLink';
import CheckoutFormSubtitle from './CheckoutFormSubtitle';

type Inputs = {
 example: string;
 exampleRequired: string;
};

export default function CheckoutForm() {
 const { register, handleSubmit } = useForm<Inputs>();

 const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

 /* .locationContainer

este es el estilo que quieres unificar con .nameContainer */

 return (
  <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
   <CheckoutFormInputText content='Email' />
   <CheckoutFormCheckbox content='Quiero recibir por email noticias y ofertas' />
   <CheckoutFormSubtitle />
   <CheckoutFormInputText content='Dirección' />
   <CheckoutFormInputContainer>
    <CheckoutFormInputText content='Nombre' />
    <CheckoutFormInputText content='Apellido' />
   </CheckoutFormInputContainer>
   <CheckoutFormInputText content='Apartamento, suite, etc. (opcional)' />
   <CheckoutFormInputContainer>
    <CheckoutFormSelect label='Provincia' data={provinces} />
    <CheckoutFormSelect label='Ciudad' data={provinces} />
   </CheckoutFormInputContainer>
   <CheckoutFormInputText content='Telefono' />
   <CheckoutFormButtonContainer>
    <CheckoutSubmitButton />
    <CheckoutReturnLink />
   </CheckoutFormButtonContainer>
  </form>
 );
}
