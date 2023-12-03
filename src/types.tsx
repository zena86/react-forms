import { UseFormRegisterReturn, UseFormReturn } from 'react-hook-form';
import { schema } from './pages/reactHookForm/schema';
import * as yup from 'yup';

type PersonFormProps = yup.InferType<typeof schema>;

export interface ControlledProps {
  form: UseFormReturn<PersonFormProps>;
}

export interface UncontrolledPasswordProps {
  passwordRef: React.MutableRefObject<null>;
  confirmPasswordRef: React.MutableRefObject<null>;
  passwordError: string;
  confirmPasswordError: string;
}

export interface UncontrolledFieldProps {
  fieldRef: React.MutableRefObject<null>;
  id: string;
  type: string;
  text: string;
  error: string;
}

export interface UncontrolledAutocompleteProps {
  countryRef: React.MutableRefObject<null>;
  countryError: string;
}

export interface UncontrolledGenderProps {
  genderRef: React.MutableRefObject<null>;
}

export interface UncontrolledUploadProps {
  uriImageRef: React.MutableRefObject<null>;
  uriImageErrorMsg: string;
  imageName: string;
}

export interface ControlledFieldProps {
  type: string;
  id: string;
  text: string;
  error?: string;
  registerField: UseFormRegisterReturn<string>;
}
