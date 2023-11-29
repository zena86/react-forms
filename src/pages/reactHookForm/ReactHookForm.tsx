import Header from '../../components/header';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import styles from './style.module.scss';
import { useState } from 'react';
import upload from './../../../public/upload.svg';

enum Gender {
  male = 'Male',
  female = 'Female',
}
enum Country {
  'Afghanistan',
  '\u00c5land Islands',
  'Albania',
  'Algeria',
  'American Samoa',
  'Andorra',
  'Angola',
  'Anguilla',
  'Antarctica',
  'Antigua & Barbuda',
  'Argentina',
  'Armenia',
  'Aruba',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bermuda',
  'Bhutan',
  'Bolivia',
  'Bosnia & Herzegovina',
  'Botswana',
  'Bouvet Island',
  'Brazil',
  'British Indian Ocean Territory',
  'British Virgin Islands',
  'Brunei',
  'Bulgaria',
  'Burkina Faso',
  'Burundi',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Cape Verde',
  'Caribbean Netherlands',
  'Cayman Islands',
  'Central African Republic',
  'Chad',
  'Chile',
  'China',
  'Christmas Island',
  'Cocos (Keeling) Islands',
  'Colombia',
  'Comoros',
  'Congo - Brazzaville',
  'Congo - Kinshasa',
  'Cook Islands',
  'Costa Rica',
  'C\u00f4te d\u2019Ivoire',
  'Croatia',
  'Cuba',
  'Cura\u00e7ao',
  'Cyprus',
  'Czechia',
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'Equatorial Guinea',
  'Eritrea',
  'Estonia',
  'Eswatini',
  'Ethiopia',
  'Falkland Islands',
  'Faroe Islands',
  'Fiji',
  'Finland',
  'France',
  'French Guiana',
  'French Polynesia',
  'French Southern Territories',
  'Gabon',
  'Gambia',
  'Georgia',
  'Germany',
  'Ghana',
  'Gibraltar',
  'Greece',
  'Greenland',
  'Grenada',
  'Guadeloupe',
  'Guam',
  'Guatemala',
  'Guernsey',
  'Guinea',
  'Guinea-Bissau',
  'Guyana',
  'Haiti',
  'Heard & McDonald Islands',
  'Honduras',
  'Hong Kong SAR China',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran',
  'Iraq',
  'Ireland',
  'Isle of Man',
  'Israel',
  'Italy',
  'Jamaica',
  'Japan',
  'Jersey',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kiribati',
  'Kuwait',
  'Kyrgyzstan',
  'Laos',
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Macao SAR China',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Marshall Islands',
  'Martinique',
  'Mauritania',
  'Mauritius',
  'Mayotte',
  'Mexico',
  'Micronesia',
  'Moldova',
  'Monaco',
  'Mongolia',
  'Montenegro',
  'Montserrat',
  'Morocco',
  'Mozambique',
  'Myanmar (Burma)',
  'Namibia',
  'Nauru',
  'Nepal',
  'Netherlands',
  'New Caledonia',
  'New Zealand',
  'Nicaragua',
  'Niger',
  'Nigeria',
  'Niue',
  'Norfolk Island',
  'North Korea',
  'North Macedonia',
  'Northern Mariana Islands',
  'Norway',
  'Oman',
  'Pakistan',
  'Palau',
  'Palestinian Territories',
  'Panama',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'Philippines',
  'Pitcairn Islands',
  'Poland',
  'Portugal',
  'Puerto Rico',
  'Qatar',
  'R\u00e9union',
  'Romania',
  'Russia',
  'Rwanda',
  'Samoa',
  'San Marino',
  'S\u00e3o Tom\u00e9 & Pr\u00edncipe',
  'Saudi Arabia',
  'Senegal',
  'Serbia',
  'Seychelles',
  'Sierra Leone',
  'Singapore',
  'Sint Maarten',
  'Slovakia',
  'Slovenia',
  'Solomon Islands',
  'Somalia',
  'South Africa',
  'South Georgia & South Sandwich Islands',
  'South Korea',
  'South Sudan',
  'Spain',
  'Sri Lanka',
  'St. Barth\u00e9lemy',
  'St. Helena',
  'St. Kitts & Nevis',
  'St. Lucia',
  'St. Martin',
  'St. Pierre & Miquelon',
  'St. Vincent & Grenadines',
  'Sudan',
  'Suriname',
  'Svalbard & Jan Mayen',
  'Sweden',
  'Switzerland',
  'Syria',
  'Taiwan',
  'Tajikistan',
  'Tanzania',
  'Thailand',
  'Timor-Leste',
  'Togo',
  'Tokelau',
  'Tonga',
  'Trinidad & Tobago',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'Turks & Caicos Islands',
  'Tuvalu',
  'U.S. Outlying Islands',
  'U.S. Virgin Islands',
  'Uganda',
  'Ukraine',
  'United Arab Emirates',
  'United Kingdom',
  'United States',
  'Uruguay',
  'Uzbekistan',
  'Vanuatu',
  'Vatican City',
  'Venezuela',
  'Vietnam',
  'Wallis & Futuna',
  'Western Sahara',
  'Yemen',
  'Zambia',
}
const country = [
  'Afghanistan',
  '\u00c5land Islands',
  'Albania',
  'Algeria',
  'American Samoa',
  'Andorra',
  'Angola',
  'Anguilla',
  'Antarctica',
  'Antigua & Barbuda',
  'Argentina',
  'Armenia',
  'Aruba',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bermuda',
  'Bhutan',
  'Bolivia',
  'Bosnia & Herzegovina',
  'Botswana',
  'Bouvet Island',
  'Brazil',
  'British Indian Ocean Territory',
  'British Virgin Islands',
  'Brunei',
  'Bulgaria',
  'Burkina Faso',
  'Burundi',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Cape Verde',
  'Caribbean Netherlands',
  'Cayman Islands',
  'Central African Republic',
  'Chad',
  'Chile',
  'China',
  'Christmas Island',
  'Cocos (Keeling) Islands',
  'Colombia',
  'Comoros',
  'Congo - Brazzaville',
  'Congo - Kinshasa',
  'Cook Islands',
  'Costa Rica',
  'C\u00f4te d\u2019Ivoire',
  'Croatia',
  'Cuba',
  'Cura\u00e7ao',
  'Cyprus',
  'Czechia',
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'Equatorial Guinea',
  'Eritrea',
  'Estonia',
  'Eswatini',
  'Ethiopia',
  'Falkland Islands',
  'Faroe Islands',
  'Fiji',
  'Finland',
  'France',
  'French Guiana',
  'French Polynesia',
  'French Southern Territories',
  'Gabon',
  'Gambia',
  'Georgia',
  'Germany',
  'Ghana',
  'Gibraltar',
  'Greece',
  'Greenland',
  'Grenada',
  'Guadeloupe',
  'Guam',
  'Guatemala',
  'Guernsey',
  'Guinea',
  'Guinea-Bissau',
  'Guyana',
  'Haiti',
  'Heard & McDonald Islands',
  'Honduras',
  'Hong Kong SAR China',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran',
  'Iraq',
  'Ireland',
  'Isle of Man',
  'Israel',
  'Italy',
  'Jamaica',
  'Japan',
  'Jersey',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kiribati',
  'Kuwait',
  'Kyrgyzstan',
  'Laos',
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Macao SAR China',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Marshall Islands',
  'Martinique',
  'Mauritania',
  'Mauritius',
  'Mayotte',
  'Mexico',
  'Micronesia',
  'Moldova',
  'Monaco',
  'Mongolia',
  'Montenegro',
  'Montserrat',
  'Morocco',
  'Mozambique',
  'Myanmar (Burma)',
  'Namibia',
  'Nauru',
  'Nepal',
  'Netherlands',
  'New Caledonia',
  'New Zealand',
  'Nicaragua',
  'Niger',
  'Nigeria',
  'Niue',
  'Norfolk Island',
  'North Korea',
  'North Macedonia',
  'Northern Mariana Islands',
  'Norway',
  'Oman',
  'Pakistan',
  'Palau',
  'Palestinian Territories',
  'Panama',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'Philippines',
  'Pitcairn Islands',
  'Poland',
  'Portugal',
  'Puerto Rico',
  'Qatar',
  'R\u00e9union',
  'Romania',
  'Russia',
  'Rwanda',
  'Samoa',
  'San Marino',
  'S\u00e3o Tom\u00e9 & Pr\u00edncipe',
  'Saudi Arabia',
  'Senegal',
  'Serbia',
  'Seychelles',
  'Sierra Leone',
  'Singapore',
  'Sint Maarten',
  'Slovakia',
  'Slovenia',
  'Solomon Islands',
  'Somalia',
  'South Africa',
  'South Georgia & South Sandwich Islands',
  'South Korea',
  'South Sudan',
  'Spain',
  'Sri Lanka',
  'St. Barth\u00e9lemy',
  'St. Helena',
  'St. Kitts & Nevis',
  'St. Lucia',
  'St. Martin',
  'St. Pierre & Miquelon',
  'St. Vincent & Grenadines',
  'Sudan',
  'Suriname',
  'Svalbard & Jan Mayen',
  'Sweden',
  'Switzerland',
  'Syria',
  'Taiwan',
  'Tajikistan',
  'Tanzania',
  'Thailand',
  'Timor-Leste',
  'Togo',
  'Tokelau',
  'Tonga',
  'Trinidad & Tobago',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'Turks & Caicos Islands',
  'Tuvalu',
  'U.S. Outlying Islands',
  'U.S. Virgin Islands',
  'Uganda',
  'Ukraine',
  'United Arab Emirates',
  'United Kingdom',
  'United States',
  'Uruguay',
  'Uzbekistan',
  'Vanuatu',
  'Vatican City',
  'Venezuela',
  'Vietnam',
  'Wallis & Futuna',
  'Western Sahara',
  'Yemen',
  'Zambia',
];

// interface Form {
//   name: string;
//   age: number;
//   email: string;
//   password: string;
//   confirm_password: string;
//   terms: boolean;
//   gender: Gender;
//   uriImage: FileList;
// }

//const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png'];

const schema = yup.object().shape({
  name: yup
    .string()
    .required('Name is required')
    .matches(/^[A-Z]/, 'first uppercased letter'),
  age: yup
    .number()
    .typeError('Age must be a number')
    .required('Age is required')
    .positive('No negative values'),
  email: yup
    .string()
    .matches(
      // eslint-disable-next-line no-useless-escape
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Email is not valid'
    )
    .required('Email is required'),
  password: yup
    .string()
    .required('Password is required')
    .matches(/[a-z]+/, 'One lowercase character')
    .matches(/[A-Z]+/, 'One uppercase character')
    .matches(/[@$!%*#?&]+/, 'One special character')
    .matches(/\d+/, 'One number'),
  confirm_password: yup
    .string()
    .required('Password is required')
    .label('confirm password')
    .oneOf([yup.ref('password')], 'Passwords must match'),
  terms: yup.boolean().oneOf([true], 'Must Accept Terms and Conditions'),
  gender: yup
    .string()
    .required('Must provide a gender')
    .oneOf(Object.values(Gender)),
  uriImage: yup
    .mixed()
    .nullable()
    .test('required', 'Please select a file', (value) => {
      console.log('value', value);
      console.log('value length', value.length);
      return value && value.length;
    })
    .test('fileSize', 'The file is too large', (value) => {
      if (!value.length) return true;
      return value && value.length > 0 && value[0].size <= 2000000;
    })
    .test(
      'type',
      'Only the following formats are accepted: .jpeg, .png',
      (value) => {
        if (!value.length) return true;
        return (
          value &&
          (value[0].type === 'image/jpeg' || value[0].type === 'image/png')
        );
      }
    ),
  country: yup
    .string()
    .required('Must provide a country')
    .oneOf(Object.values(Country)),
});

type FormProps = yup.InferType<typeof schema>;

const ReactHookForm = () => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
    watch,
  } = useForm<FormProps>({ mode: 'all', resolver: yupResolver(schema) });

  const [image, setImage] = useState('');

  const convertToBase64 = (file) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result.toString());
    };
    reader.readAsDataURL(file);
  };

  const onFormSubmit = (data: FormProps) => {
    if (data.uriImage?.length > 0) {
      convertToBase64(data.uriImage[0]);
    }

    alert(JSON.stringify(data));
    console.log(errors);
    reset();
  };

  console.log('isValid', isValid, errors);
  if (!watch) return;

  return (
    <>
      <Header />
      {image ? <img src={image} width={450} /> : null}
      <h1>ReactHookForm</h1>
      <form
        onSubmit={handleSubmit(onFormSubmit)}
        className={styles['contact-form']}
      >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          {...register('name', {
            required: 'Fill field',
            minLength: { value: 5, message: 'More 5' },
          })}
        />
        {errors && errors?.name && <p>{errors?.name?.message || 'Error!'}</p>}

        <label htmlFor="age">Age</label>
        <input type="number" id="age" {...register('age')} />
        <p>{errors.age?.message}</p>

        <label htmlFor="email">Email</label>
        <input type="email" id="email" {...register('email')} />
        <p>{errors.email?.message}</p>

        <label htmlFor="password">Password</label>
        <input type="password" id="password" {...register('password')} />
        <p>{errors.password?.message}</p>

        <label htmlFor="confirm_password">Confirm password</label>
        <input
          type="password"
          id="confirm_password"
          {...register('confirm_password')}
        />
        <p>{errors.confirm_password?.message}</p>

        <label htmlFor="terms">Accept T&C</label>
        <input
          type="checkbox"
          id="terms"
          className={styles['ui-checkbox']}
          {...register('terms')}
        />
        <p>{errors.terms?.message}</p>

        <label htmlFor="gender">Gender</label>
        <div className={styles['custom-select']}>
          <select id="gender" {...register('gender')}>
            {Object.values(Gender).map((gender) => {
              return (
                <option key={gender} value={gender}>
                  {gender}
                </option>
              );
            })}
          </select>
        </div>

        {errors.uriImage ||
        !watch('uriImage') ||
        watch('uriImage').length === 0 ? (
          <label className={styles['custum-file-upload']} htmlFor="file">
            <div className={styles['icon']}>
              <img src="/vite.svg" alt="upload" />
            </div>
            <div className={styles['text']}>
              <span>Click to upload image</span>
            </div>
            <input type="file" id="file" {...register('uriImage')} />
          </label>
        ) : (
          <strong>{watch('uriImage')[0].name}</strong>
        )}
        <p>{errors.uriImage?.message}</p>

        <label htmlFor="country">Country</label>
        <div className={styles['custom-select']}>
          <select id="country" autoComplete={'on'} {...register('country')}>
            {country.map((country) => {
              return (
                <option key={country} value={country}>
                  {country}
                </option>
              );
            })}
          </select>
        </div>

        <input type="submit" disabled={!isValid} value="Submit" />
      </form>
    </>
  );
};

export default ReactHookForm;
