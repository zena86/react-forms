import Header from '../../components/header';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import styles from './style.module.scss';
import { useAppDispatch } from '../../redux/hooks';
import { formDataUpdated } from '../../redux/features/formSlice';
import { useNavigate } from 'react-router-dom';
import { schema } from './schema';
import { Gender } from '../../components/card/type';
import { v4 as uuidv4 } from 'uuid';
import { convertToBase64 } from '../../utils/convertToBase64';
import ControlledAutocoplete from '../../components/reactHookForm/controlledAutocomplete.tsx/ControlledAutocoplete';
import ControlledPassword from '../../components/reactHookForm/controlledPassword';
import ControlledConditionsAccepted from '../../components/reactHookForm/controlledConditionsAccepted';
import ControlledField from '../../components/reactHookForm/controlledField.tsx/ControlledField';

//const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png'];

type PersonFormProps = yup.InferType<typeof schema>;

const ReactHookForm = () => {
  const form = useForm<PersonFormProps>({
    mode: 'all',
    resolver: yupResolver(schema),
  });

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
    watch,
  } = form;

  console.log('errors', errors);
  console.log('isValid', isValid);

  // const countries = useAppSelector((state) => state.form.countries);
  // const [displayCountry, setDisplayCountry] = useState(false);

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
    );
    navigate('/');
    reset();
  };

  return (
    <>
      <Header />
      <div className="container">
        <form
          id="reactHookForm"
          onSubmit={handleSubmit(onFormSubmit)}
          className={styles['contact-form']}
        >
          <ControlledField
            registerField={register('name')}
            type="text"
            id="name"
            text="Name"
            error={errors?.name?.message}
          />
          <ControlledField
            registerField={register('age')}
            type="number"
            id="age"
            text="Age"
            error={errors.age?.message}
          />
          <ControlledField
            registerField={register('email')}
            type="email"
            id="email"
            text="Email"
            error={errors?.email?.message}
          />
          {/* <div className={styles.field}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" {...register('name')} />
            <div className={styles.wrapper}>
              <p className={styles.error}>{errors?.name?.message}</p>
            </div>
          </div> */}

          {/* <div className={styles.field}>
            <label htmlFor="age">Age</label>
            <input type="number" id="age" {...register('age')} />
            <div className={styles.wrapper}>
              <p className={styles.error}>{errors.age?.message}</p>
            </div>
          </div> */}

          {/* <div className={styles.field}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" {...register('email')} />
            <div className={styles.wrapper}>
              <p className={styles.error}>{errors.email?.message}</p>
            </div>
          </div> */}

          {/* <div className={styles.field}>
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
          </div> */}

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

          <ControlledPassword form={form} />
          <ControlledAutocoplete form={form} />

          {/* <div className={styles.field}>
            <label htmlFor="country">Country</label>
            <input
              type="text"
              id="country"
              {...register('country')}
              onClick={() => setDisplayCountry(!displayCountry)}
              onChange={(e) => {
                const userCountry = e.target.value.toString();
                if (
                  Object.values(Country)
                    .map((c) => c.toString())
                    .includes(userCountry)
                ) {
                  setDisplayCountry(false);
                } else {
                  setDisplayCountry(true);
                }
                setValue('country', userCountry, {
                  shouldValidate: true,
                  shouldDirty: true,
                });
              }}
            />
            {displayCountry && (
              <div className="autocontainer">
                {Object.values(Country)
                  .filter((item) => item.indexOf(getValues('country')) > -1)
                  .map((option) => {
                    return (
                      <div
                        key={option.toString()}
                        onClick={async () => {
                          setDisplayCountry(false);
                          setValue('country', option.toString(), {
                            shouldValidate: true,
                            shouldDirty: true,
                          });
                        }}
                      >
                        {option}
                      </div>
                    );
                  })}
              </div>
            )}
            <div className={styles.wrapper}>
              <p className={styles.error}>{errors.country?.message}</p>
            </div>
          </div> */}

          <div className={styles.field}>
            {errors.uriImage ||
            !watch('uriImage') ||
            watch('uriImage').length === 0 ? (
              <label className={styles['custum-file-upload']} htmlFor="file">
                <div className={styles['icon']}>
                  <img src="upload.svg" width={40} alt="upload" />
                </div>
                <div className={styles['text']}>
                  <span>Click to upload image</span>
                </div>
                <input type="file" id="file" {...register('uriImage')} />
              </label>
            ) : (
              <strong>{watch('uriImage')[0].name}</strong>
            )}
            {errors.uriImage && <p>{errors.uriImage?.message}</p>}
          </div>

          <ControlledConditionsAccepted form={form} />

          {/* <div className={styles.row}>
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
            <p className={styles.error}>{errors.conditionsAccepted?.message}</p>
          </div> */}

          <input type="submit" disabled={!isValid} value="Submit" />
        </form>
      </div>
    </>
  );
};

export default ReactHookForm;
