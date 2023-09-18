import { InputHTMLAttributes, useState } from "react";
import styles from "./index.module.scss";

interface OptionType {
  value: string;
  text: string;
}

interface ISelect extends InputHTMLAttributes<HTMLSelectElement> {
  name: string;
  options: OptionType[];
  textPrimary: string;
  withLancamentos?: boolean;
  className?: string;
}

export default function InputSelect({ name, textPrimary, options, withLancamentos, className, ...props }: ISelect) {
  const [activeClass, setActiveClass] = useState<boolean>(false);

  return (
    <select
      {...props}
      name={name}
      id={name}
      className={`${styles.c_select} ${className && className} ${activeClass ? styles.c_select__active : ""}`}
      onSelect={(e) => {
        if (e.currentTarget.value) {
          setActiveClass(true);
        } else {
          setActiveClass(false);
        }
      }}>
      <option value="">{textPrimary}</option>

      {options.map((opt,index) => {
        return (
          <option key={`option-${index + 1}`} value={opt.value}>
            {opt.text}
          </option>
        );
      })}

      {withLancamentos && <option value="novos_lancamentos">Novos Lançamentos</option>}
    </select>
  );
}
