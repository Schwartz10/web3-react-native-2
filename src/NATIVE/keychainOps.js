import  * as Keychain from 'react-native-keychain';

const setMnemonic = async () => {
  const username = 'zuck';
  const password = 'poniesRgr8';

  // Store the credentials
  const res = await Keychain.setGenericPassword(username, password);
  console.log(res)

  try {
    // Retreive the credentials
    const credentials = await Keychain.getGenericPassword();
    if (credentials) {
      console.log('Credentials successfully loaded for user ' + credentials.username);
    } else {
      console.log('No credentials stored')
    }
  } catch (error) {
    console.log('Keychain couldn\'t be accessed!', error);
  }
  // await Keychain.resetGenericPassword()
}

export const getMnemonic = async () => {
  try {
    // Retreive the credentials
    return await Keychain.getGenericPassword();
  } catch (error) {
    console.log('Keychain couldn\'t be accessed!', error);
  }
}