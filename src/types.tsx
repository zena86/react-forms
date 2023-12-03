import { UseFormReturn } from 'react-hook-form';
import { schema } from './pages/reactHookForm/schema';
import * as yup from 'yup';

type PersonFormProps = yup.InferType<typeof schema>;
export interface CountrySelectorProps {
  form: UseFormReturn<PersonFormProps>;
}
