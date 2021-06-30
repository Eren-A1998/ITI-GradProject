export default class Validator {
 

  public static requiredValidator(value) {
    return value !== '';
  }
  public static emailValidtaor(email) {
    const patternEmail = new RegExp(
      
       /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      'g',
    );
    return patternEmail.test(email);
  }
  public static phoneNumberValidtaor(phoneNumber) {
    const patternMobile = new RegExp(
      /^010[0-9]{8}$|^011[0-9]{8}$|^012[0-9]{8}$|^015[0-9]{8}$/,
      'g',
    );
    return patternMobile.test(phoneNumber);
  }
  public static passwordValidator(password) {
    const patternPassword = new RegExp(
      '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})',
    );
    return patternPassword.test(password);
  }
  public static confirmPasswordVlaidator(password, confirmPassword) {
    return password === confirmPassword;
  }

  public static formValidation(
    userName,
    email,
    password,
    confirmPassword,
    phoneNumber,
  ) {
    let errors = {};
    let formIsValid = true;

    if (!this.requiredValidator(userName)) {
      formIsValid = false;
      errors['username'] = '*Please enter your username';
    }

    if (!this.emailValidtaor(email)) {
      formIsValid = false;
      errors['email'] = '*Please enter valid email';
    }

    if (!this.passwordValidator) {
      formIsValid = false;
      errors['password'] = '*Please enter valid password like as Test@1234....';
    }

    if (!this.confirmPasswordVlaidator(password, confirmPassword)) {
      formIsValid = false;
      errors['confiremPassword'] = '*Please enter the same password';
    }
    if (!this.phoneNumberValidtaor(phoneNumber)) {
      formIsValid = false;
      errors['phoneNumber'] = '*Please enter valid phone number';
    }  
    return formIsValid;
  }
}

