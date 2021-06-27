export default class Validator {
  private static requiredValidator(value) {
    return value !== '';
  
  }
  private static emailValidtaor(email) {
    const patternEmail = new RegExp(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      'g',
    );
    return patternEmail.test(email);
  
  }
  private static phoneNumberValidtaor(phoneNumber) {
    const patternMobile = new RegExp(
      /^010[0-9]{8}$|^011[0-9]{8}$|^012[0-9]{8}$|^015[0-9]{8}$/,
      'g',
    );
    return patternMobile.test(phoneNumber);
    
  }
  private static passwordValidator(password) {
    const patternPassword = new RegExp(
      '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})',
    );
    return patternPassword.test(password);
   
  }
  private static confirmPasswordVlaidator(password, confirmPassword) {
    return password === confirmPassword;
    
  }

  public static formValidation(
    userName,
    email,
    password,
    confirmPassword,
    phoneNumber,
  ) {
    if (
      this.requiredValidator(userName) &&
      this.requiredValidator(email) &&
      this.requiredValidator(password) &&
      this.requiredValidator(confirmPassword)
    ) {
      if (this.emailValidtaor(email)) {
        if (this.passwordValidator) {
          if (this.confirmPasswordVlaidator(password, confirmPassword)) {
            if (this.phoneNumberValidtaor(phoneNumber)) {
              return true;
            } else {
              alert(
                'Please Enter Valid Phone number that contain 11 numbers start with 01',
              );
              return false;
            }
          } else {
            alert('Please Enter Identical Passwords');
            return false;
          }
        } else {
          alert(
            'Please enter Valid Password that contain at least 8 charchters which are Capital, small, numbers and Spechial characters',
          );
          return false;
        }
      } else {
        alert('Please Enter Valid mail');
        return false;
      }
    } else {
      alert('Please Enter all Failds');
      return false;
    }
  }
}
