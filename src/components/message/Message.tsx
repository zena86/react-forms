import { ErrorMessageProps } from './types';

const Message = ({ errorMessage }: ErrorMessageProps) => {
  return <h1>{errorMessage}</h1>;
};

export default Message;
