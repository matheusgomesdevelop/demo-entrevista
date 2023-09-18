import { SelectHTMLAttributes } from "react";
import styles from "./index.module.scss";

interface IInputSelect extends SelectHTMLAttributes<HTMLSelectElement> {
  optionsList: Array<string>;
}

export default function InputSelect({ optionsList, ...props }: IInputSelect) {
  return (
    <select className={styles.InputSelect} {...props}>
      {optionsList.map((opt) => {
        return (
          <option key={opt} value={opt.toLowerCase()}>
            {opt}
          </option>
        );
      })}
    </select>
  );
}
