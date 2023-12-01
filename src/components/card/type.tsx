export enum Gender {
  male = 'Male',
  female = 'Female',
}

export interface Person {
  id: string;
  name: string;
  age: number;
  email: string;
  password: string;
  confirm_password: string;
  terms: boolean;
  gender: Gender;
  uriImage: FileList;
  country: string;
  isActive: boolean;
}

export interface PersonProps {
  person: Person;
}
