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
 phone: string;
};

export default function CheckoutForm() {
 const methods = useForm<FormValues>({
  defaultValues: {
   email: '',
   address: '',
   firstName: '',
   lastName: '',
   addressDetail: '',
   province: 'Seleccionar provincia',
   city: 'Seleccionar ciudad',
   phone: '',
  },
 });

 const watchProvince = methods.watch('province');

 const onSubmit = (data: FormValues) => {
  console.log(data);
 };

 return (
  <>
   <FormProvider {...methods}>
    <form className={styles.form} onSubmit={methods.handleSubmit(onSubmit)}>
     <CheckoutFormInputText
      id='email'
      content='Email'
      isRequired={true}
      message='El email es requerido'
     />
     <CheckoutFormCheckbox content='Quiero recibir por email noticias y ofertas' />
     <CheckoutFormSubtitle />
     <CheckoutFormInputText
      id='address'
      content='Dirección'
      isRequired={true}
      message='La dirección es requerida'
     />
     <CheckoutFormInputContainer>
      <CheckoutFormInputText
       id='firstName'
       content='Nombre'
       isRequired={true}
       message='El nombre es requerido'
      />
      <CheckoutFormInputText
       id='lastName'
       content='Apellido'
       isRequired={true}
       message='El apellido es requerido'
      />
     </CheckoutFormInputContainer>
     <CheckoutFormInputText
      id='addressDetail'
      content='Apartamento, suite, etc. (opcional)'
      isRequired={false}
      message=''
     />
     <CheckoutFormInputContainer>
      <CheckoutFormSelect
       id='province'
       label='Provincia'
       defaultOption='Seleccionar provincia'
       data={provinces}
      />
      <CheckoutFormSelect
       id='city'
       label='Ciudad'
       defaultOption='Seleccionar ciudad'
       data={cities
        .filter((city) => city.admin_name === watchProvince)
        .map((city) => city.city)}
      />
     </CheckoutFormInputContainer>
     <CheckoutFormInputText
      id='phone'
      content='Télefono'
      isRequired={true}
      message='El télefono es requerido'
     />
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
