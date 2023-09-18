import Titulo from "../../util/titulo";
import { imgLazer } from "./imgLazer";
import styles from "./index.module.scss";

export default function ModalDiferenciaisLazer({ children }) {
  return (
    <div className={styles.modalDiferenciaisLazer}>
      <div className={styles.modalDiferenciaisLazer__content}>
        {children}
        <Titulo>
          <strong>Diferenciais</strong> e Lazer
        </Titulo>

        <p className={styles.modalDiferenciaisLazer__desc}>
          Diferenciais para qualidade de vida.
        </p>

        <div className={styles.modalDiferenciaisLazer__atributos}>
          <ul>
            {imgLazer().map((img) => {
              return (
                <li key={img.alt}>
                  <img
                    width={img.width}
                    height={img.height}
                    src={img.src}
                    alt={img.alt}
                  />
                  <p>{img.nome}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className={styles.modalDiferenciaisLazer__footer}></div>
    </div>
  );
}
