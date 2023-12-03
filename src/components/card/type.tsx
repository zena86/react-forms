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
  gender: string;
  image: string;
  country: string;
  isActive: boolean;
}

export interface PersonProps {
  person: Person;
}

export interface PersonFormProps {
  person: PersonForm;
}
