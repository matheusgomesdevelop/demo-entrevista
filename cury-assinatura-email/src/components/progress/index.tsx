import styles from "./progress.module.scss";
import styles_validation from "./validation.module.scss";

interface IProgress {
  size?: any;
}

export default function Progress({ size }: IProgress) {
  return (
    <div className={styles.c_progress}>
      <span className={styles.c_progress__bar}></span>

      {/* Preencher a barra com o tamanho passado na props size */}
      {size ? (
        <span
          className={`${styles.c_progress__bar} ${styles.c_progress__bar_active}`}
          style={{ width: `${size}%` }}
        ></span>
      ) : null}
    </div>
  );
}

// Progress de validação das informações
export function ProgressValidation({ size }: IProgress) {
  return (
    <div className={styles_validation.c_progress_validation}>
      <span className={styles_validation.c_progress_validation__bar}></span>

      {/* Preencher a barra com o tamanho passado na props size */}
      {size ? (
        <span
          className={`${styles_validation.c_progress_validation__bar} ${styles_validation.c_progress_validation__bar_active}`}
          style={{ width: `${size}%` }}
        ></span>
      ) : null}
    </div>
  );
}
