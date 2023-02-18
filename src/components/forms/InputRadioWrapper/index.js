import React from "react";
import { ErrorMessage, Field } from "formik";
import styles from './InputRadioWrapper.module.scss'


const InputRadioWrapper = (props) => {
  const { name, textRadioLabel } = props;
  return (
    <div>
      {textRadioLabel.map((text, index) => (
        <div className={styles.label}>
          <label key={index}>
            <Field name={name} value={text.role} type="radio" className={styles.radio} />
            <div className={styles.description}>
              <h3>{text.h3}</h3>
              <p className={styles.pDesc}>{text.p}</p>
            </div>
          </label>
        </div>
      ))}
      <ErrorMessage name={name} component="div" className={styles.error} />
    </div>
  );
};

export default InputRadioWrapper;
