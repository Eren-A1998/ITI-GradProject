export default class Validator {
  public static requiredValidator(value) {
    return value == '';
    // if (value == "") {
    //   return 'Please enter value for this field';
    // }
  }
  public static emailValidtaor(email) {
    const patternEmail = new RegExp(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      'g',
    );
    return patternEmail.test(email);
    // if (!patternEmail.test(email)) {
    //   return 'Please enter valid email';
    // }
  }
  public static phoneNumberValidtaor(phoneNumber) {
    const patternMobile = new RegExp(
      /^010[0-9]{8}$|^011[0-9]{8}$|^012[0-9]{8}$|^015[0-9]{8}$/,
      'g',
    );
    return patternMobile.test(phoneNumber);
    // if (!patternMobile.test(phoneNumber)) {
    //   return 'Please enter valid email';
    // }
  }
  public static passwordValidator(password) {
    const patternPassword = new RegExp(
      '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})',
    );
    return patternPassword.test(password);
    // if (!patternPassword.test(password)) {
    //   return 'Please enter valid password';
    // }
  }
  public static confirmPasswordVlaidator(password, confirmPassword) {
    return password == confirmPassword;
    // if (password != confirmPassword) {
    //   return 'Please enter identical password';
    // }
  }
}
