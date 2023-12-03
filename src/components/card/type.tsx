import { Country } from '../../pages/reactHookForm/types';

export enum Gender {
  male = 'Male',
  female = 'Female',
}

export interface PersonForm {
  name: string;
  age: number;
  email: string;
  password: string;
  confirmPassword: string;
  conditionsAccepted: boolean;
  gender: string;
  uriImage: FileList;
  country: string;
}

export interface Person {
  id: string;
  name: string;
  age: number;
  email: string;
  password: string;
  confirmPassword: string;
  conditionsAccepted: boolean;
  gender: Gender;
  image: string;
  country: Country;
  isActive: boolean;
}

export interface PersonProps {
  person: Person;
}

export interface PersonFormProps {
  person: PersonForm;
}
