import { useState } from "react";
import InputMask from "react-input-mask";

import styles from "./input.module.scss";

export default function InputCreci(props) {
  return (
    <InputMask
      name={props.name}
      id={props.id}
      value={props.value}
      onChange={props.onChange}
      mask={"***.***-a"}
      maskChar={null}
      alwaysShowMask
      className={`${styles.c_input} ${styles.c_input__creci}`}
      beforeMaskedStateChange={({ currentState, nextState }) => {
        let { value, selection } = nextState;

        if (value.length >= 7) {
     //     console.log(value.length);
        } else {
        //    console.log(value.length);

        }

        return {
          ...nextState,
          value,
        };
      }}
    />
  );
}
