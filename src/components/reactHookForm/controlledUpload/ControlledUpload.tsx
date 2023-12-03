import { ControlledProps } from '../../../types';
import InputError from '../../inputError';
import styles from './../../../style.module.scss';

const ControlledUpload = ({ form }: ControlledProps) => {
  const {
    register,
    watch,
    formState: { errors },
  } = form;

  const fileList = watch('uriImage');
  return (
    <div className={styles.field}>
      {errors.uriImage || !fileList || fileList.length === 0 ? (
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
        <strong>{fileList[0].name}</strong>
      )}
      <InputError msg={errors.uriImage?.message} />
    </div>
  );
};

export default ControlledUpload;
