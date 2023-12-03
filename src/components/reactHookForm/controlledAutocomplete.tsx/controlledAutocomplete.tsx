import { UseFormReturn } from 'react-hook-form';
import styles from './../../../pages/reactHookForm/style.module.scss';
import { schema } from '../../../pages/reactHookForm/schema';
import { useState } from 'react';
import { Country } from '../../../pages/reactHookForm/types';
import * as yup from 'yup';

type PersonFormProps = yup.InferType<typeof schema>;
interface CountrySelectorProps {
  form: UseFormReturn<PersonFormProps>;
}

const ControlledAutocoplete = ({ form }: CountrySelectorProps) => {
  const {
    getValues,
    setValue,
    register,
    formState: { errors },
  } = form;
  // } = useForm<PersonFormProps>({
  //   mode: 'all',
  //   resolver: yupResolver(schema),
  // });

  const [displayCountry, setDisplayCountry] = useState(false);

  return (
    <div className={styles.field}>
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
                    console.log('CLICK', getValues());
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
    </div>
  );
};

export default ControlledAutocoplete;
