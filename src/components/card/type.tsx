export enum Gender {
  male = 'Male',
  female = 'Female',
}

export interface Person {
  name: string;
  age: number;
  email: string;
  password: string;
  confirm_password: string;
  terms: boolean;
  gender: Gender;
  uriImage: FileList;
  country: string;
}

export interface PersonProps {
  person: Person;
}
