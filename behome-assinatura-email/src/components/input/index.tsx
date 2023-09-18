import { HTMLInputTypeAttribute, useState } from "react";

import styles from "./input.module.scss";
import InputCreci from "./creci";
import InputTel from "./tel";

interface IInput {
  type?: HTMLInputTypeAttribute;
  name: string;
  placeholder?: string;
  labelText?: string;
  labelTextCenter?: boolean;
  inputSelect?: boolean;
  inputSelectValues?: string[];
  maxLength?: number;
  errorMessage?: string;
  required?: boolean;
  defaultValue?: string;
}

export default function Input({
  type,
  name,
  placeholder,
  labelText,
  labelTextCenter,
  inputSelect,
  inputSelectValues,
  errorMessage,
  maxLength,
  required,
  defaultValue,
}: IInput) {
  const [creci, setCreci] = useState(defaultValue);
  const [tel, setTel] = useState(defaultValue);

  const handleCreci = ({ target: { value } }) => setCreci(value);
  const handleTel = ({ target: { value } }) => setTel(value);

  return (
    <>
      {/* Label para o campo do input (opcional) */}
      {labelText && !labelTextCenter ? (
        <label className={styles.c_input__label} htmlFor={name}>
          {required ? (
            <>
              {labelText}
              <span className={styles.c_input__label_asterisk}>*</span>
            </>
          ) : (
            labelText
          )}
        </label>
      ) : null}

      {labelText && labelTextCenter ? (
        <label htmlFor={name} className={styles.c_input__label} style={{ textAlign: "center", paddingLeft: 0 }}>
          {required ? (
            <>
              {labelText}{" "}
              <span className={styles.c_input__label_asterisk} style={{ left: 0 }}>
                *
              </span>
            </>
          ) : (
            labelText
          )}
        </label>
      ) : null}

      {/* Input / Select */}
      {inputSelect ? (
        <>
          <select name={name} id={name} className={`${styles.c_input} ${styles.c_input__select}`}>
            <option value="">Selecione o departamento</option>
            {inputSelectValues.map((values, key) => {
              return (
                <option value={values} key={key} selected={values === defaultValue ? true : false}>
                  {values}
                </option>
              );
            })}
          </select>

          {errorMessage ? <p className={styles.c_input__error_message}>{errorMessage}</p> : null}
        </>
      ) : (
        <>
          {name === "tel" ? (
            <InputTel name={name} value={tel} onChange={handleTel} />
          ) : name === "creci" ? (
            <InputCreci name={name} value={creci} onChange={handleCreci} />
          ) : (
            <input
              type={type}
              name={name}
              className={styles.c_input}
              id={name}
              maxLength={maxLength ? maxLength : 255}
              placeholder={placeholder}
              defaultValue={defaultValue}
            />
          )}

          {errorMessage ? <p className={styles.c_input__error_message}>{errorMessage}</p> : null}
        </>
      )}
    </>
  );
}
