import { ControlledProps } from '../../../types';
import styles from './../../../pages/reactHookForm/style.module.scss';

const ControlledUpload = ({ form }: ControlledProps) => {
  const {
    register,
    watch,
    formState: { errors },
  } = form;

  return (
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
  );
};

export default ControlledUpload;
