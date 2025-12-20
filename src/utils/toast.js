import { toast } from "react-toastify";

export const showLoadingToast = (message = "Loading...") => {
  return toast.loading(message);
};

export const showSuccessToast = (toastId, message) => {
  toast.update(toastId, {
    render: message,
    type: "success",
    isLoading: false,
    autoClose: 3000,
    closeOnClick: true,
  });
};

export const showErrorToast = (toastId, error) => {
  toast.update(toastId, {
    render:
      error?.response?.data?.message ||
      error ||
      "Something went wrong",
    type: "error",
    isLoading: false,
    autoClose: 4000,
    closeOnClick: true,
  });
};
