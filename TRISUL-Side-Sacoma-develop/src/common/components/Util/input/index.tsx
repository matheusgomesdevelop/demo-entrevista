import { useState, FC, InputHTMLAttributes, KeyboardEventHandler } from "react";

import NumberFormat from "react-number-format";
import styles from "./index.module.scss";

interface Input {
  type: any;
  name: string;
  placeholder: string;
  maxLength?: any;
  defaultValue?: any;
  maskTel?: boolean;
}

const CInput: FC<Input & InputHTMLAttributes<HTMLInputElement>> = ({
  type,
  name,
  placeholder,
  maxLength,
  defaultValue,
  maskTel,
  ...rest
}: Input) => {
  const [valueTel, setValueTel] = useState("");
  const [activeClass, setActiveClass] = useState<boolean>(false);

  function insertActiveClass(e: any) {
    if (e.currentTarget.value.length > 0) {
      setActiveClass(true);
    } else if (e.currentTarget.value.length === 0) {
      setActiveClass(false);
    }
  }

  return (
    <>
      {name === "tel" || maskTel ? (
        <NumberFormat
          format={"(##) #####-####"}
          mask=""
          type={type}
          name={name}
          className={`${styles.c_input} ${activeClass ? styles.c_input__active : ""}`}
          onKeyUp={insertActiveClass}
          id={name}
          placeholder={placeholder}
          defaultValue={defaultValue ? defaultValue : valueTel}
          onChange={(e: any) => {
            setValueTel(e.target.value);
          }}
          {...rest}
        />
      ) : name === "cep" ? (
        <NumberFormat
          format="#####-###"
          mask=""
          type={type}
          name={name}
          className={`${styles.c_input} ${activeClass ? styles.c_input__active : ""}`}
          onKeyUp={insertActiveClass}
          id={name}
          placeholder={placeholder}
          defaultValue={defaultValue ? defaultValue : ""}
          {...rest}
        />
      ) : name === "valor" || name === "entrada" || name === "fgts" ? (
        <NumberFormat
          type={type}
          name={name}
          className={`${styles.c_input} ${activeClass ? styles.c_input__active : ""}`}
          onKeyUp={insertActiveClass}
          id={name}
          placeholder={placeholder}
          thousandSeparator={true}
          prefix={"R$ "}
          maxLength={maxLength}
          defaultValue={defaultValue ? defaultValue : ""}
          {...rest}
        />
      ) : type === "textarea" ? (
        <textarea
          name={name}
          id={name}
          cols={30}
          rows={10}
          className={`${styles.c_input} ${styles.c_input__textarea} ${activeClass ? styles.c_input__active : ""}`}
          placeholder={placeholder}
          defaultValue={defaultValue ? defaultValue : ""}
          onKeyUp={insertActiveClass}
          {...rest}
        ></textarea>
      ) : (
        <input
          name={name}
          type={type}
          className={`${styles.c_input} ${activeClass ? styles.c_input__active : ""}`}
          onKeyUp={insertActiveClass}
          placeholder={placeholder}
          id={name}
          defaultValue={defaultValue ? defaultValue : ""}
          maxLength={maxLength}
          {...rest}
        />
      )}
    </>
  );
};

export default CInput;
