import React from "react";
import { Field, ErrorMessage } from "formik";
import cx from 'classnames'
import styles from './InputWrapper.module.scss'

const InputWrapper = (props) => {
    const {name, ...rest} = props;
  return (
    <label className={styles.label}>
      <Field name={name}>
        {({ field, form, meta }) => {
          return <input {...field} {...rest} />;
        }}
      </Field>
      <ErrorMessage name={name} component="div" className={styles.error} />
    </label>
  );
};

export default InputWrapper;

