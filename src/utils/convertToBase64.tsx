export const convertToBase64 = async (file: File) => {
  if (!file) return;
  const promise = new Promise(
    (resolve: (data: string) => void, reject: () => void) => {
      const reader = new FileReader();
      reader.onerror = () => {
        reject();
      };
      reader.onabort = () => {
        reject();
      };
      reader.onloadend = () => {
        if (reader.result) {
          resolve(reader.result.toString());
        }
      };
      reader.readAsDataURL(file);
    }
  );
  return promise;
};
