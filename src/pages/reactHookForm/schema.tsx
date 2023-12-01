import * as yup from 'yup';
import { Gender } from '../../components/card/type';
import { Country } from './types';

export const schema = yup.object().shape({
  name: yup
    .string()
    .required('Name is required')
    .matches(/^[A-Z]/, 'first uppercased letter'),
  age: yup
    .number()
    .typeError('Age is required')
    .required('Age is required')
    .positive('No negative values'),
  email: yup
    .string()
    .required('Email is required')
    .matches(
      // eslint-disable-next-line no-useless-escape
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Email is not valid'
    ),
  password: yup
    .string()
    .required('Password is required')
    .matches(/[a-z]+/, 'One lowercase character')
    .matches(/[A-Z]+/, 'One uppercase character')
    .matches(/[@$!%*#?&]+/, 'One special character')
    .matches(/\d+/, 'One number'),
  confirmPassword: yup
    .string()
    .required('Confirm password is required')
    .label('confirm password')
    .oneOf([yup.ref('password')], 'Passwords must match'),
  gender: yup
    .string()
    .required('Must provide a gender')
    .oneOf(Object.values(Gender)),
  conditionsAccepted: yup
    .bool()
    .typeError('Accept Terms and ConditionsAge is required')
    .oneOf([true], 'Accept Terms and Conditions'),
  uriImage: yup
    .mixed()
    .nullable()
    .test('required', 'Please select a file', (value) => {
      return value && value.length;
    }),
  // .test('fileSize', 'The file is too large', (value) => {
  //   if (!value.length) return true;
  //   return value && value.length > 0 && value[0].size <= 2000000;
  // })
  // .test(
  //   'type',
  //   'Only the following formats are accepted: .jpeg, .png',
  //   (value) => {
  //     if (!value.length) return true;
  //     return (
  //       value &&
  //       (value[0].type === 'image/jpeg' || value[0].type === 'image/png')
  //     );
  //   }
  // ),
  country: yup
    .string()
    .required('Must provide a country')
    .oneOf(Object.values(Country)),
});
