import NumberFormat from "react-number-format";
import styles from "./index.module.scss";

interface Input {
  type: any;
  name: string;
  placeholder: string;
  maxLength?: any;
  defaultValue?: any;
}

export default function CInput({
  type,
  name,
  placeholder,
  maxLength,
  defaultValue,
}: Input) {
  return (
    <>
      {name === "tel" ? (
        <NumberFormat
          format="+## (##) #####-####"
          mask=""
          type={type}
          name={name}
          className={styles.c_input}
          id={name}
          placeholder={placeholder}
          defaultValue={defaultValue ? defaultValue : null}
        />
      ) : name === "valor" || name === "entrada" || name === "fgts" ? (
        <NumberFormat
          type={type}
          name={name}
          className={styles.c_input}
          id={name}
          placeholder={placeholder}
          thousandSeparator={true}
          prefix={"R$ "}
          maxLength={maxLength}
          defaultValue={defaultValue ? defaultValue : null}
        />
      ) : (
        <input
          name={name}
          type={type}
          className={styles.c_input}
          placeholder={placeholder}
          id={name}
          defaultValue={defaultValue ? defaultValue : null}
        />
      )}
    </>
  );
}
