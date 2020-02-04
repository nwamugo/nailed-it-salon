import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

export const successToast = message => {
  toast.success(message, {
    position: toast.POSITION.TOP_RIGHT
  });
};

export const dangerToast = message => {
  toast.error(message, {
    position: toast.POSITION.TOP_RIGHT
  });
};
