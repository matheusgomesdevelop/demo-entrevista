import NumberFormat from "react-number-format";

import styles from "./input.module.scss";

interface IInput {
  type?: any;
  name: any;
  placeholder?: any;
  labelText?: any;
  labelTextCenter?: boolean;
  inputSelect?: any;
  inputSelectValues?: Array<string>;
  maxLength?: any;
  errorMessage?: any;
  required?: any;
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
}: IInput) {
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
        <label
          htmlFor={name}
          className={styles.c_input__label}
          style={{ textAlign: "center", paddingLeft: 0 }}
        >
          {required ? (
            <>
              {labelText}{" "}
              <span
                className={styles.c_input__label_asterisk}
                style={{ left: 0 }}
              >
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
          <select
            name={name}
            id={name}
            className={`${styles.c_input} ${styles.c_input__select}`}
          >
            <option value="">Selecione o departamento</option>
            {inputSelectValues.map((values, key) => {
              return (
                <option value={values} key={key}>
                  {values}
                </option>
              );
            })}
          </select>

          {errorMessage ? (
            <p className={styles.c_input__error_message}>{errorMessage}</p>
          ) : null}
        </>
      ) : (
        <>
          {name === "tel" ? (
            <NumberFormat
              format="(##) ####-####"
              mask=""
              type={type}
              name={name}
              className={styles.c_input}
              id={name}
              placeholder={placeholder}
            />
          ) : name === "cel_corporativo" ? (
            <NumberFormat
              format="(##) # ####-####"
              mask=""
              type={type}
              name={name}
              className={styles.c_input}
              id={name}
              placeholder={placeholder}
            />
          ) : (
            <input
              type={type}
              name={name}
              className={styles.c_input}
              id={name}
              maxLength={maxLength ? maxLength : 255}
              placeholder={placeholder}
            />
          )}

          {errorMessage ? (
            <p className={styles.c_input__error_message}>{errorMessage}</p>
          ) : null}
        </>
      )}
    </>
  );
}
