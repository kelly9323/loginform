import * as Yup from "yup";

export const NAME_SHEMA = Yup.string("Must be string")
  .matches(/^[A-Z][a-z]{2,15}$/, "Must use latin letters")
  .required("Required field");

export const PASSWORD = Yup.string()
  .matches(
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,20}$/,
    "Password is weak"
  )
  .required("Required field");

export const EMAIL_ADDRESS = Yup.string().email().required("Required field");

export const SIGN_UP_SHEMA = Yup.object({
  firstName: NAME_SHEMA,
  lastName: NAME_SHEMA,
  displayName: NAME_SHEMA,
  emailAddress: EMAIL_ADDRESS,
  password: PASSWORD,
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref("password")], "Should match original password")
    .required("Required field"),
  role: Yup.string().oneOf(["buyer", "creative"]).required("Choose one option"),
});

export const LOG_IN_SHEMA = Yup.object({
  emailAddress: EMAIL_ADDRESS,
  password: PASSWORD,
});
