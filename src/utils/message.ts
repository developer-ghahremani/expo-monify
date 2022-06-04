import Toast, { ToastShowParams } from "react-native-toast-message";

interface Props extends ToastShowParams {}

export const showMessage = (props: Props) => {
  Toast.show(props);
};
