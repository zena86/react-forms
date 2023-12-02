import Header from '../../components/header';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import styles from './style.module.scss';
// import { useState } from 'react';
import { useAppDispatch } from '../../redux/hooks';
import { formDataUpdated } from '../../redux/features/formSlice';
import { useNavigate } from 'react-router-dom';
import { schema } from './schema';
import { Gender } from '../../components/card/type';
import { country } from './constants';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { convertToBase64 } from '../../utils/convertToBase64';
// import upload from './../../../public/upload.svg';

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

// const schema = yup.object().shape({
//   name: yup
//     .string()
//     .required('Name is required')
//     .matches(/^[A-Z]/, 'first uppercased letter'),
//   // age: yup
//   //   .number()
//   //   .typeError('Age must be a number')
//   //   .required('Age is required')
//   //   .positive('No negative values'),
//   // email: yup
//   //   .string()
//   //   .matches(
//   //     // eslint-disable-next-line no-useless-escape
//   //     /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
//   //     'Email is not valid'
//   //   )
//   //   .required('Email is required'),
//   // password: yup
//   //   .string()
//   //   .required('Password is required')
//   //   .matches(/[a-z]+/, 'One lowercase character')
//   //   .matches(/[A-Z]+/, 'One uppercase character')
//   //   .matches(/[@$!%*#?&]+/, 'One special character')
//   //   .matches(/\d+/, 'One number'),
//   // confirm_password: yup
//   //   .string()
//   //   .required('Password is required')
//   //   .label('confirm password')
//   //   .oneOf([yup.ref('password')], 'Passwords must match'),
//   // terms: yup.boolean().oneOf([true], 'Must Accept Terms and Conditions'),
//   // gender: yup
//   //   .string()
//   //   .required('Must provide a gender')
//   //   .oneOf(Object.values(Gender)),
//   // uriImage: yup
//   //   .mixed()
//   //   .nullable()
//   //   .test('required', 'Please select a file', (value) => {
//   //     console.log('value', value);
//   //     console.log('value length', value.length);
//   //     return value && value.length;
//   //   })
//   //   .test('fileSize', 'The file is too large', (value) => {
//   //     if (!value.length) return true;
//   //     return value && value.length > 0 && value[0].size <= 2000000;
//   //   })
//   //   .test(
//   //     'type',
//   //     'Only the following formats are accepted: .jpeg, .png',
//   //     (value) => {
//   //       if (!value.length) return true;
//   //       return (
//   //         value &&
//   //         (value[0].type === 'image/jpeg' || value[0].type === 'image/png')
//   //       );
//   //     }
//   //   ),
//   // country: yup
//   //   .string()
//   //   .required('Must provide a country')
//   //   .oneOf(Object.values(Country)),
// });

type PersonFormProps = yup.InferType<typeof schema>;

const ReactHookForm = () => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
    watch,
  } = useForm<PersonFormProps>({ mode: 'all', resolver: yupResolver(schema) });

  //const [image, setImage] = useState('');

  // const convertToBase64 = async (file) => {
  //   const promise = new Promise(
  //     (resolve: (data: string) => void, reject: () => void) => {
  //       const reader = new FileReader();
  //       reader.onerror = () => {
  //         reject();
  //       };
  //       reader.onabort = () => {
  //         reject();
  //       };
  //       reader.onloadend = () => {
  //         if (reader.result) {
  //           resolve(reader.result.toString());
  //         }
  //       };
  //       reader.readAsDataURL(file);
  //     }
  //   );
  //   return promise;
  // };

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onFormSubmit = async (data: PersonFormProps) => {
    if (!data.uriImage) return;
    const imageData = await convertToBase64(data.uriImage[0]);
    dispatch(
      formDataUpdated({
        formData: {
          id: uuidv4().toString(),
          name: data.name,
          age: data.age,
          email: data.email,
          image: imageData,
          password: data.password,
          confirmPassword: data.confirmPassword,
          conditionsAccepted: data.conditionsAccepted,
          gender: data.gender,
          country: data.country,
          isActive: true,
        },
      })

      // formDataUpdated({
      //   formData: { ...data, isActive: true, id: uuidv4().toString() },
      // })
    );
    // alert(JSON.stringify(data));
    navigate('/');
    reset();
  };
  // if (!watch) return;

  return (
    <>
      <Header />
      <div className="container">
        {/* {image ? <img src={image} width={450} /> : null} */}
        <form
          onSubmit={handleSubmit(onFormSubmit)}
          className={styles['contact-form']}
        >
          <div className={styles.field}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              {...register('name', {
                required: 'Fill field',
                minLength: { value: 5, message: 'More 5' },
              })}
            />
            <div className={styles.wrapper}>
              {errors && errors?.name && (
                <p className={styles.error}>
                  {errors?.name?.message || 'Error!'}
                </p>
              )}
            </div>
          </div>

          <div className={styles.field}>
            <label htmlFor="age">Age</label>
            <input type="number" id="age" {...register('age')} />
            <div className={styles.wrapper}>
              <p className={styles.error}>{errors.age?.message}</p>
            </div>
          </div>

          <div className={styles.field}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" {...register('email')} />
            <div className={styles.wrapper}>
              <p className={styles.error}>{errors.email?.message}</p>
            </div>
          </div>

          <div className={styles.field}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" {...register('password')} />
            <div className={styles.wrapper}>
              <p className={styles.error}>{errors.password?.message}</p>
            </div>
          </div>

          <div className={styles.field}>
            <label htmlFor="confirm_password">Confirm password</label>
            <input
              type="password"
              id="confirm_password"
              {...register('confirmPassword')}
            />
            <div className={styles.wrapper}>
              <p className={styles.error}>{errors.confirmPassword?.message}</p>
            </div>
          </div>

          <div className={styles.field}>
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
            <p className={styles.error}>{errors.gender?.message}</p>
          </div>

          <div className={styles.field}>
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
          </div>

          <div className={styles.field}>
            <div className={styles.row}>
              <input
                type="checkbox"
                id="conditionsAccepted"
                className={styles['ui-checkbox']}
                {...register('conditionsAccepted')}
              />
              <label htmlFor="conditionsAccepted">
                I agree to the terms and conditions
              </label>
            </div>
            <div className={styles.wrapper}>
              <p className={styles.error}>
                {errors.conditionsAccepted?.message}
              </p>
            </div>
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
              {/* <input type="file" id="file" {...register('uriImage')} /> */}
              <input type="file" id="file" {...register('uriImage')} />
            </label>
          ) : (
            <strong>{watch('uriImage')[0].name}</strong>
          )}
          {errors.uriImage && <p>{errors.uriImage?.message}</p>}

          <input type="submit" disabled={!isValid} value="Submit" />
        </form>
      </div>
    </>
  );
};

export default ReactHookForm;
