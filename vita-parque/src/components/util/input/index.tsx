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
        <></>
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
