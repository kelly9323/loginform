import React from "react";
import styles from "./SignUp.module.scss";
import { Field, Form, Formik } from "formik";
import { SIGN_UP_SHEMA } from "../../../utils";
import InputWrapper from "./../InputWrapper";
import InputRadioWrapper from "./../InputRadioWrapper/index";

import textRadioLabel from './TextRadio.json'

const initialValues = {
  firstName: "",
  displayName: "",
  lastName: "",
  passwordConfirm: "",
  emailAddress: "",
  password: "",
  role: "",
};
const SignUpForm = () => {
  const onSubmit = (values, formikBag) => {
    console.log(values);
    formikBag.resetForm();
  };
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.h1}>CREATE AN ACCOUNT</h1>
        <p>We always keep your name and email address private</p>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={SIGN_UP_SHEMA}
        >
          {(formikProps) => {
            return (
              <Form className={styles.form}>
                <section className={styles.section}>
                  <div>
                    <InputWrapper
                      name="firstName"
                      type="text"
                      placeholder="First name"
                      className={styles.field}
                    />
                    <InputWrapper
                      name="displayName"
                      type="text"
                      placeholder="Display name"
                      className={styles.field}
                    />
                    <InputWrapper
                      name="password"
                      type="password"
                      placeholder="Password"
                      className={styles.field}
                    />
                  </div>
                  <div>
                    <InputWrapper
                      name="lastName"
                      type="text"
                      placeholder="Last name"
                      className={styles.field}
                    />
                    <InputWrapper
                      name="emailAddress"
                      type="text"
                      placeholder="Email Address"
                      className={styles.field}
                    />
                    <InputWrapper
                      name="passwordConfirm"
                      type="password"
                      placeholder="Password Confirmation"
                      className={styles.field}
                    />
                  </div>
                </section>

                <InputRadioWrapper
                  name="role"
                  textRadioLabel={textRadioLabel}
                />

                <Field
                  id="true"
                  type="submit"
                  value="Create account"
                  className={styles.buttonLog}
                />
              </Form>
            );
          }}
        </Formik>
      </div>
    </>
  );
};

export default SignUpForm;
