import styles from './../../../style.module.scss';
import { useState } from 'react';
import { ControlledProps } from '../../../types';
import InputError from '../../inputError';
import { RootState } from '../../../redux/store';
import { useAppSelector } from '../../../redux/hooks';

const ControlledAutocoplete = ({ form }: ControlledProps) => {
  const {
    getValues,
    setValue,
    register,
    formState: { errors },
  } = form;

  const [displayCountry, setDisplayCountry] = useState(false);
  const countries = useAppSelector((state: RootState) => state.form.countries);

  return (
    <div className={styles.field}>
      <label htmlFor="country">Country</label>
      <input
        type="text"
        id="country"
        autoComplete="off"
        autoCorrect="off"
        spellCheck="false"
        {...register('country')}
        onClick={() => setDisplayCountry(!displayCountry)}
        onChange={(e) => {
          const userCountry = e.target.value.toString();
          if (countries.map((c) => c.toString()).includes(userCountry)) {
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
        <div className={styles.autocontainer}>
          {countries
            .filter((item) => item.indexOf(getValues('country')) > -1)
            .map((option) => {
              return (
                <div
                  className={styles.options}
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
      <InputError msg={errors.country?.message} />
    </div>
  );
};

export default ControlledAutocoplete;
