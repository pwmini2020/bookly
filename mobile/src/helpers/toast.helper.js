import Toast from 'react-native-toast-message';

export const errorToast = (message) => {
    Toast.show({
        type: 'error',
        text1: 'Error!',
        text2: message
    });
}
