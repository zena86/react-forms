import { useEffect, useState } from 'react';
import styles from './../../../style.module.scss';
import { useAppSelector } from '../../../redux/hooks';
import { UncontrolledAutocompleteProps } from '../../../types';
import InputError from '../../inputError';

const UncontrolledAutocomplete = ({
  countryRef,
  countryError,
}: UncontrolledAutocompleteProps) => {
  const countries = useAppSelector((state) => state.form.countries);
  const [displayCountry, setDisplayCountry] = useState(false);
  const [options, setOptions] = useState(countries);
  const [search, setSearch] = useState('');

  const setCountryDex = (term: string) => {
    setSearch(term);
    setDisplayCountry(false);
  };

  useEffect(() => {
    setOptions(countries);
  }, [countries]);

  return (
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
      <InputError msg={countryError} />
    </div>
  );
};

export default UncontrolledAutocomplete;
