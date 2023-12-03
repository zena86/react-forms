import Header from '../../components/header';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import styles from './../../style.module.scss';
import { useAppDispatch } from '../../redux/hooks';
import { formDataUpdated } from '../../redux/features/formSlice';
import { useNavigate } from 'react-router-dom';
import { schema } from '../../schema';
import { v4 as uuidv4 } from 'uuid';
import { convertToBase64 } from '../../utils/convertToBase64';
import ControlledAutocoplete from '../../components/reactHookForm/controlledAutocomplete.tsx/ControlledAutocoplete';
import ControlledPassword from '../../components/reactHookForm/controlledPassword';
import ControlledConditionsAccepted from '../../components/reactHookForm/controlledConditionsAccepted';
import ControlledField from '../../components/reactHookForm/controlledField.tsx/ControlledField';
import ControlledGender from '../../components/reactHookForm/controlledGender';
import ControlledUpload from '../../components/reactHookForm/controlledUpload';

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
  } = form;

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
          <ControlledPassword form={form} />
          <ControlledAutocoplete form={form} />
          <ControlledGender form={form} />
          <ControlledUpload form={form} />
          <ControlledConditionsAccepted form={form} />
          <input type="submit" disabled={!isValid} value="Submit" />
        </form>
      </div>
    </>
  );
};

export default ReactHookForm;
