import { useRef, useState } from 'react';
import Header from '../../components/header';
import styles from './../reactHookForm/style.module.scss';
import React from 'react';
import { schema } from '../reactHookForm/schema';
import { Gender } from '../../components/card/type';
import { country } from '../reactHookForm/constants';
import { formDataUpdated } from '../../redux/features/formSlice';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../redux/hooks';
import { v4 as uuidv4 } from 'uuid';

const UncontrolledForm = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const ageRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const genderRef = useRef(null);
  const countryRef = useRef(null);
  const conditionsAcceptedRef = useRef(null);

  const [nameErrorMsg, setNameErrorMsg] = useState(null);
  const [emailErrorMsg, setEmailErrorMsg] = useState(null);
  const [ageErrorMsg, setAgeErrorMsg] = useState(null);
  const [passwordErrorMsg, setPasswordErrorMsg] = useState(null);
  const [confirmPasswordErrorMsg, setConfirmPasswordErrorMsg] = useState(null);
  // const [genderErrorMsg, setGenderErrorMsg] = useState(null);
  // const [countryErrorMsg, setCountryErrorMsg] = useState(null);
  const [conditionsAcceptedErrorMsg, setConditionsAcceptedErrorMsg] =
    useState(null);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const validateNestedSchema = async (data) => {
    const validationResult = await schema
      .validate(data, { abortEarly: false })
      .catch((err) => {
        return err;
      });
    if (!validationResult.inner) return [];
    const result = validationResult.inner.map((err) => {
      return { path: err.path, message: err.message };
    });
    return result ? result : [];
  };

  const getErrorMsg = (errors, path: string) => {
    return errors.find((item) => item.path === path)?.message || '';
  };

  const getFormData = () => {
    return {
      name: (nameRef?.current as HTMLInputElement | null)?.value,
      email: (emailRef?.current as HTMLInputElement | null)?.value,
      age: (ageRef?.current as HTMLInputElement | null)?.value,
      password: (passwordRef?.current as HTMLInputElement | null)?.value,
      confirmPassword: (confirmPasswordRef?.current as HTMLInputElement | null)
        ?.value,
      gender: (genderRef?.current as HTMLInputElement | null)?.value,
      country: (countryRef?.current as HTMLInputElement | null)?.value,
      conditionsAccepted: (
        conditionsAcceptedRef?.current as HTMLInputElement | null
      )?.checked,
    };
  };

  const changeErrorStates = (errors) => {
    setNameErrorMsg(getErrorMsg(errors, 'name'));
    setEmailErrorMsg(getErrorMsg(errors, 'email'));
    setAgeErrorMsg(getErrorMsg(errors, 'age'));
    setPasswordErrorMsg(getErrorMsg(errors, 'password'));
    setConfirmPasswordErrorMsg(getErrorMsg(errors, 'confirmPassword'));
    // setGenderErrorMsg(getErrorMsg(errors, 'gender'));
    // setCountryErrorMsg(getErrorMsg(errors, 'country'));
    setConditionsAcceptedErrorMsg(getErrorMsg(errors, 'conditionsAccepted'));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = getFormData();
    const errors = await validateNestedSchema(formData);
    changeErrorStates(errors);
    if (errors.length === 0) {
      // dispatch(formDataUpdated({ formData: formData }));
      dispatch(
        formDataUpdated({
          formData: { ...formData, isActive: true, id: uuidv4().toString() },
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
            <input type="password" id="password" ref={passwordRef} />
            <div className={styles.wrapper}>
              <p className={styles.error}>{passwordErrorMsg}</p>
            </div>
          </div>

          <div className={styles.field}>
            <label htmlFor="confirmPassword">Confirm password</label>
            <input
              type="password"
              id="confirmPassword"
              ref={confirmPasswordRef}
            />
            <div className={styles.wrapper}>
              <p className={styles.error}>{confirmPasswordErrorMsg}</p>
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

          <div className={styles.field}>
            <label htmlFor="country">Country</label>
            <div className={styles['custom-select']}>
              <select id="country" autoComplete={'on'} ref={countryRef}>
                {country.map((country) => {
                  return (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  );
                })}
              </select>
            </div>
            {/* <div className={styles.wrapper}>
              <p className={styles.error}>{countryErrorMsg}</p>
            </div> */}
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
