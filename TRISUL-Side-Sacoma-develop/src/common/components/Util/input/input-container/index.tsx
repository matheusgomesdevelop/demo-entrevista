
import { FC, PropsWithChildren } from "react";
import styles from "./styles.module.scss";

interface InputContainerProps {}

export const InputContainer: FC<PropsWithChildren<InputContainerProps>> = ({children}) => <div className={styles.container}>
  {children}
</div>