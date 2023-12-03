import { Country } from "../../pages/reactHookForm/types";

export enum Gender {
  male = 'Male',
  female = 'Female',
}

export interface PersonForm {
  id: string;
  name: string;
  age: number;
  email: string;
  password: string;
  confirm_password: string;
  conditionsAccepted: boolean;
  gender: Gender;
  uriImage: FileList;
  country: Country;
}

export interface Person {
  id: string;
  name: string;
  age: number;
  email: string;
  password: string;
  confirm_password: string;
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
