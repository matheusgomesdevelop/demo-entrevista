import InputMask from "react-input-mask";

import styles from "./input.module.scss";

export default function InputTel(props) {
  return (
    <InputMask
      name={props.name}
      id={props.id}
      value={props.value}
      onChange={props.onChange}
      mask="(99) 99999-9999"
      className={styles.c_input}
      alwaysShowMask={true}
    />
  );
}
