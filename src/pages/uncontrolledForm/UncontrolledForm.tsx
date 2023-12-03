import { useRef, useState } from 'react';
import Header from '../../components/header';
import styles from './../../style.module.scss';
import React from 'react';
import { schema } from '../../schema';
import { formDataUpdated } from '../../redux/features/formSlice';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../redux/hooks';
import { v4 as uuidv4 } from 'uuid';
import { convertToBase64 } from '../../utils/convertToBase64';
import { ValidationError } from 'yup';
import UncontrolledPassword from '../../components/uncontrolledForm/uncontrolledPassword';
import UncontrolledField from '../../components/uncontrolledForm/uncontrolledField';
import UncontrolledAutocomplete from '../../components/uncontrolledForm/uncontrolledAutocomplete';
import UncontrolledGender from '../../components/uncontrolledForm/uncontrolledGender';
import UncontrolledUpload from '../../components/uncontrolledForm/uncontrolledUpload/';
import UncontrolledConditionsAccepted from '../../components/uncontrolledForm/uncontrolledConditionsAccepted';
import { PersonForm } from '../../types';

const UncontrolledForm = () => {
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
  const [countryErrorMsg, setCountryErrorMsg] = useState('');
  const [uriImageErrorMsg, setUriImageErrorMsg] = useState('');
  const [conditionsAcceptedErrorMsg, setConditionsAcceptedErrorMsg] =
    useState('');

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [imageName, setImageName] = useState('');

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
      age: (ageRef?.current as HTMLInputElement | null)?.value || '',
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
    setCountryErrorMsg(getErrorMsg(errors, 'country'));
    setUriImageErrorMsg(getErrorMsg(errors, 'uriImage'));
    setConditionsAcceptedErrorMsg(getErrorMsg(errors, 'conditionsAccepted'));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = getFormData();
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
          <UncontrolledField
            fieldRef={nameRef}
            id="name"
            type="text"
            text="Name"
            error={nameErrorMsg}
          />
          <UncontrolledField
            fieldRef={ageRef}
            id="age"
            type="number"
            text="Age"
            error={ageErrorMsg}
          />
          <UncontrolledField
            fieldRef={emailRef}
            id="email"
            type="email"
            text="Email"
            error={emailErrorMsg}
          />
          <UncontrolledPassword
            passwordRef={passwordRef}
            confirmPasswordRef={confirmPasswordRef}
            passwordError={passwordErrorMsg}
            confirmPasswordError={confirmPasswordErrorMsg}
          />
          <UncontrolledAutocomplete
            countryRef={countryRef}
            countryError={countryErrorMsg}
          />
          <UncontrolledGender genderRef={genderRef} />
          <UncontrolledUpload
            uriImageRef={uriImageRef}
            uriImageErrorMsg={uriImageErrorMsg}
            imageName={imageName}
          />
          <UncontrolledConditionsAccepted
            conditionsAcceptedRef={conditionsAcceptedRef}
            error={conditionsAcceptedErrorMsg}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
};

export default UncontrolledForm;
