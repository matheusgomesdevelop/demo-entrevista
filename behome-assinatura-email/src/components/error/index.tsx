import styles from "./index.module.scss";

interface IErrorMessage {
  text: string;
}

export default function ErrorMessage({ text }: IErrorMessage) {
  return <p className={styles.errorMessage}>{text}</p>;
}
