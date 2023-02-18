import React from "react";
import styles from "./SignIn.module.scss";
import { Field, Form, Formik,  } from "formik";
import { LOG_IN_SHEMA } from "../../../utils";
import InputWrapper from './../InputWrapper/index';
const initialValues = {
  emailAddress: "",
  password: "",
};
const SignInForm = () => {
  const onSubmit = (values,formikBag) => {
    console.log(values)
    formikBag.resetForm();
  };
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.h1}>LOG IN INTO YOUR ACCOUNT</h1>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={LOG_IN_SHEMA}
        >
          {(formikProps) => {
            return (
              <Form className={styles.form}>
                <InputWrapper
                  name="emailAddress"
                  type="text"
                  placeholder="Email address"
                  className={styles.field}
                />
                <InputWrapper
                  name="password"
                  type="password"
                  placeholder="Password"
                  className={styles.field}
                />
                <Field
                  id="true"
                  type="submit"
                  value="LOGIN"
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

export default SignInForm;
