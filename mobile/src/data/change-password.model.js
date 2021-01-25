import * as Yup from "yup";

export class ChangePasswordData {
  constructor(old_password, new_password, confirm_password) {}

  static empty() {
    return new ChangePasswordData("", "", "");
  }
}

export const ChangePasswordSchema = Yup.object().shape({
  old_password: Yup.string().min(1, "Password must be at least 8 characters"),
  new_password: Yup.string().min(1, "Password must be at least 8 characters"),
  confirm_password: Yup.string().min(
    1,
    "Password must be at least 8 characters"
  ),
});
