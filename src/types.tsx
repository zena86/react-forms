import { UseFormRegisterReturn, UseFormReturn } from 'react-hook-form';
import { schema } from './pages/reactHookForm/schema';
import * as yup from 'yup';

type PersonFormProps = yup.InferType<typeof schema>;

// export enum PersonProperties {
//   id = 'id',
//   name = 'name',
//   age = 'age',
//   email = 'email',
//   password = 'password',
//   confirmPassword ='confirmPassword',
//   conditionsAccepted = 'conditionsAccepted',
//   gender = 'gender',
//   uriImage = 'uriImage',
//   country = 'country',
// }

export interface ControlledProps {
  form: UseFormReturn<PersonFormProps>;
}

export interface UncontrolledPasswordProps {
  passwordRef: React.MutableRefObject<null>;
  confirmPasswordRef: React.MutableRefObject<null>;
  passwordError: string;
  confirmPasswordError: string;
}

export interface ControlledFieldProps {
  // form: UseFormReturn<PersonFormProps>;
  type: string;
  id: string;
  text: string;
  error?: string;
  registerField: UseFormRegisterReturn<string>;
}
