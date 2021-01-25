import * as Yup from "yup";

export class SignInData {
  constructor(phone_no) {}

  static empty() {
    return new SignInData("", "");
  }
}

export const SignInSchema = Yup.object().shape({
  phone_no: Yup.string().length(10, "Enter the 10 digit number"),
  // password: Yup.string().min(1, 'Password must be at least 8 characters'),
});
