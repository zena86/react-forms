import { useEffect, useRef, useState } from 'react';
import Header from '../../components/header';
import styles from './../../style.module.scss';
import React from 'react';
import { schema } from '../reactHookForm/schema';
import { Gender, PersonForm } from '../../components/card/type';
// import { country } from '../reactHookForm/constants';
import { formDataUpdated } from '../../redux/features/formSlice';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { v4 as uuidv4 } from 'uuid';
import { convertToBase64 } from '../../utils/convertToBase64';
import { ValidationError } from 'yup';
import InputError from '../../components/inputError';
import { calcStrength } from '../../utils/calcStrength';

const UncontrolledForm = () => {
  const [strength, setStrength] = useState(0);

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const ageRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const genderRef = useRef(null);
  const countryRef = useRef(null);
  const uriImageRef = useRef(null);
  const conditionsAcceptedRef = useRef(null);

  const [nameErrorMsg, setNameErrorMsg] = useState('');
  const [emailErrorMsg, setEmailErrorMsg] = useState('');
  const [ageErrorMsg, setAgeErrorMsg] = useState('');
  const [passwordErrorMsg, setPasswordErrorMsg] = useState('');
  const [confirmPasswordErrorMsg, setConfirmPasswordErrorMsg] = useState('');
  // const [genderErrorMsg, setGenderErrorMsg] = useState(null);
  const [countryErrorMsg, setCountryErrorMsg] = useState('');
  const [uriImageErrorMsg, setUriImageErrorMsg] = useState('');
  const [conditionsAcceptedErrorMsg, setConditionsAcceptedErrorMsg] =
    useState('');

  //const [uriImage, setUriImage] = useState<FileList | null>(null);
  const [imageName, setImageName] = useState('');
  const [uploadMessage, setUploadMessage] = useState('');

  const [displayCountry, setDisplayCountry] = useState(false);

  const countries = useAppSelector((state) => state.form.countries);
  const [options, setOptions] = useState(countries);
  const [search, setSearch] = useState('');
  useEffect(() => {
    setOptions(countries);
  }, [countries]);
  const setCountryDex = (term: string) => {
    setSearch(term);
    setDisplayCountry(false);
  };

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const validateNestedSchema = async (data: PersonForm) => {
    const validationResult = await schema
      .validate(data, { abortEarly: false })
      .catch((err) => {
        return err;
      });
    if (!validationResult.inner) return [];
    const result = validationResult.inner.map((err: ValidationError) => {
      return { path: err.path, message: err.message };
    });
    return result ? result : [];
  };

  const getErrorMsg = (errors: ValidationError[], path: string): string => {
    return errors.find((item) => item.path === path)?.message || '';
  };

  const getFormData = (): PersonForm => {
    return {
      name: (nameRef?.current as HTMLInputElement | null)?.value || '',
      email: (emailRef?.current as HTMLInputElement | null)?.value || '',
      age: Number((ageRef?.current as HTMLInputElement | null)?.value),
      password: (passwordRef?.current as HTMLInputElement | null)?.value || '',
      confirmPassword:
        (confirmPasswordRef?.current as HTMLInputElement | null)?.value || '',
      gender: (genderRef?.current as HTMLInputElement | null)?.value || '',
      country: (countryRef?.current as HTMLInputElement | null)?.value || '',
      uriImage:
        (uriImageRef?.current as HTMLInputElement | null)?.files ||
        new FileList(),
      conditionsAccepted:
        (conditionsAcceptedRef?.current as HTMLInputElement | null)?.checked ||
        false,
    };
  };

  const changeErrorStates = (errors: ValidationError[]) => {
    setNameErrorMsg(getErrorMsg(errors, 'name'));
    setEmailErrorMsg(getErrorMsg(errors, 'email'));
    setAgeErrorMsg(getErrorMsg(errors, 'age'));
    setPasswordErrorMsg(getErrorMsg(errors, 'password'));
    setConfirmPasswordErrorMsg(getErrorMsg(errors, 'confirmPassword'));
    // setGenderErrorMsg(getErrorMsg(errors, 'gender'));
    setCountryErrorMsg(getErrorMsg(errors, 'country'));
    setUriImageErrorMsg(getErrorMsg(errors, 'uriImage'));
    setConditionsAcceptedErrorMsg(getErrorMsg(errors, 'conditionsAccepted'));
  };

  const handleChooseImage = () => {
    setUploadMessage('Image uploaded');
  };

  const handlePasswordChange = (password: string) => {
    setStrength(calcStrength(password));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setUploadMessage('');
    const formData = getFormData();
    console.log('formData', formData);
    const filesList = formData.uriImage as FileList;
    const fileName = filesList && filesList.length ? filesList[0].name : '';
    setImageName(fileName);

    const errors = await validateNestedSchema(formData);
    changeErrorStates(errors);

    if (errors.length === 0 && fileName) {
      const imageData = await convertToBase64(filesList[0]);
      dispatch(
        formDataUpdated({
          formData: {
            id: uuidv4().toString(),
            name: formData.name,
            age: formData.age,
            email: formData.email,
            image: imageData,
            password: formData.password,
            confirmPassword: formData.confirmPassword,
            conditionsAccepted: formData.conditionsAccepted,
            gender: formData.gender,
            country: formData.country,
            isActive: true,
          },
        })
      );
      navigate('/');
    }
  };

  return (
    <>
      <Header />
      <div className="container">
        <form onSubmit={handleSubmit} className={styles['contact-form']}>
          <div className={styles.field}>
            <label htmlFor="name">Name</label>
            <input id="name" name="name" ref={nameRef} />
            <div className={styles.wrapper}>
              <p className={styles.error}>{nameErrorMsg}</p>
            </div>
          </div>

          <div className={styles.field}>
            <label htmlFor="age">Age</label>
            <input type="number" id="age" ref={ageRef} />
            <div className={styles.wrapper}>
              <p className={styles.error}>{ageErrorMsg}</p>
            </div>
          </div>

          <div className={styles.field}>
            <label htmlFor="email">Email</label>
            <input type="text" id="email" ref={emailRef} />
            <div className={styles.wrapper}>
              <p className={styles.error}>{emailErrorMsg}</p>
            </div>
          </div>

          <div className={styles.field}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              ref={passwordRef}
              onChange={(e) => handlePasswordChange(e.target.value)}
            />
            <progress
              id="progress"
              max="100"
              value={strength.toString()}
            ></progress>
            <InputError msg={passwordErrorMsg} />
          </div>

          <div className={styles.field}>
            <label htmlFor="confirmPassword">Confirm password</label>
            <input
              type="password"
              id="confirmPassword"
              ref={confirmPasswordRef}
            />
            <InputError msg={confirmPasswordErrorMsg} />
          </div>

          <div className={styles.field}>
            <label htmlFor="country">Country</label>
            <input
              type="text"
              id="country"
              autoComplete="off"
              autoCorrect="off"
              spellCheck="false"
              value={search}
              onClick={() => setDisplayCountry(!displayCountry)}
              onChange={(e) => {
                setSearch(e.target.value);
                setDisplayCountry(true);
              }}
              ref={countryRef}
            />
            {displayCountry && (
              <div className={styles.autocontainer}>
                {options
                  .filter((item) => item.indexOf(search) > -1)
                  .map((item) => {
                    return (
                      <div
                        className={styles.options}
                        key={item}
                        onClick={() => setCountryDex(item)}
                      >
                        {item}
                      </div>
                    );
                  })}
              </div>
            )}
            <div className={styles.wrapper}>
              <p className={styles.error}>{countryErrorMsg}</p>
            </div>
          </div>

          <div className={styles.field}>
            <label htmlFor="gender">Gender</label>
            <div className={styles['custom-select']}>
              <select id="gender" ref={genderRef}>
                {Object.values(Gender).map((gender) => {
                  return (
                    <option key={gender} value={gender}>
                      {gender}
                    </option>
                  );
                })}
              </select>
            </div>
            {/* <div className={styles.wrapper}>
              <p className={styles.error}>{genderErrorMsg}</p>
            </div> */}
          </div>

          {uriImageErrorMsg || !imageName ? (
            <>
              <label className={styles['custum-file-upload']} htmlFor="file">
                <div className={styles['icon']}>
                  <img src="upload.svg" width={40} alt="upload" />
                </div>
                <div className={styles['text']}>
                  <span>Click to upload image</span>
                </div>
              </label>
            </>
          ) : (
            <>
              <strong>{imageName}</strong>
            </>
          )}
          <input
            type="file"
            id="file"
            hidden
            ref={uriImageRef}
            onChange={handleChooseImage}
          />

          <p className={styles.message}>{uploadMessage}</p>
          <div className={styles.wrapper}>
            <p className={styles.error}>{uriImageErrorMsg}</p>
          </div>

          <div className={styles.field}>
            <div className={styles.row}>
              <input
                type="checkbox"
                id="conditionsAccepted"
                ref={conditionsAcceptedRef}
                className={styles['ui-checkbox']}
              />
              <label htmlFor="conditionsAccepted">
                I agree to the terms and conditions
              </label>
            </div>
            <div className={styles.wrapper}>
              <p className={styles.error}>{conditionsAcceptedErrorMsg}</p>
            </div>
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
};

export default UncontrolledForm;
