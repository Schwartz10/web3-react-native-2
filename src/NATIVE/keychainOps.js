import  * as Keychain from 'react-native-keychain';

export const setMnemonic = mnemonic =>
  Keychain.setGenericPassword('username', mnemonic);

export const getMnemonic = async () => {
  try {
    // Retreive the credentials
    return await Keychain.getGenericPassword();
  } catch (error) {
    console.log('Keychain couldn\'t be accessed!', error);
  }
}