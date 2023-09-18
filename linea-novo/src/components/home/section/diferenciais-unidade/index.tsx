import Titulo from "../../../util/titulo";
import styles from "./index.module.scss";

export default function DiferenciaisUnidade() {
  return (
    <>
      <div className={styles.diferenciaisUnidade}>
        <div className={styles.diferenciaisUnidade__content}>
          <div className={styles.diferenciaisUnidade__titulo}>
            <Titulo>
              <strong>Diferenciais</strong> da <span>Unidade</span>
            </Titulo>

            <p className={styles.diferenciaisUnidade__titulo_desc}>
              Apartamentos perfeitos para todos e pensados em cada detalhe para
              o seu conforto.
            </p>
          </div>

          <div className={styles.diferenciaisUnidade__atributos}>
            <ul>
              <li>
                <img
                  width="48px"
                  height="48px"
                  src="images/diferenciais/ar-b.svg"
                  alt=""
                />
                <p>
                  Previsão para futura instalação de ar-condicionado no
                  dormitório.
                </p>
              </li>
              <li>
                <img
                  width="48px"
                  height="48px"
                  src="images/diferenciais/persianas-b.svg"
                  alt=""
                />
                <p>Caixilho com persiana de enrolar no dormitório.</p>
              </li>
              <li>
                <img
                  width="48px"
                  height="48px"
                  src="images/diferenciais/icon-revestimento.svg"
                  alt=""
                />
                <p>
                  Banheiro com revestimento cerâmico em todas as paredes até o
                  teto.
                </p>
              </li>
              <li>
                <img
                  width="48px"
                  height="48px"
                  src="images/diferenciais/bancadas-b.svg"
                  alt=""
                />
                <p>Cozinha e banheiro com bancadas em granito.</p>
              </li>

              {/* atualizar */}
              <li>
                <img
                  width="48px"
                  height="48px"
                  src="images/diferenciais/ambientes-decorados.svg"
                  alt=""
                />
                <p>Living para dois ambientes integrado á cozinha e varanda.</p>
              </li>
              <li>
                <img
                  width="48px"
                  height="48px"
                  src="images/diferenciais/elevadores.svg"
                  alt=""
                />
                <p>
                  Seis elevadores por torre, maior conforto e menor tempo de
                  espera dos moradores
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
