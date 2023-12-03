import styles from './../../../style.module.scss';
import { UncontrolledUploadProps } from '../../../types';
import { useState } from 'react';
import InputError from '../../inputError';

const UncontrolledUpload = ({
  uriImageRef,
  uriImageErrorMsg,
  imageName,
}: UncontrolledUploadProps) => {
  const [uploadMessage, setUploadMessage] = useState('');

  const handleChooseImage = () => {
    setUploadMessage('Image uploaded');
  };

  return (
    <>
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
          <p className={styles.message}>{uploadMessage}</p>
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

      <InputError msg={uriImageErrorMsg} />
    </>
  );
};

export default UncontrolledUpload;
