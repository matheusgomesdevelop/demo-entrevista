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
              o seu bem-estar.
            </p>
          </div>

          <div className={styles.diferenciaisUnidade__atributos}>
            <ul>
              <li>
                <img
                  width="48px"
                  height="48px"
                  src="images/diferenciais/medidor-b.svg"
                  alt=""
                />
                <p>Medidores individuais de água entregues instalados</p>
              </li>
              <li>
                <img
                  width="48px"
                  height="48px"
                  src="images/diferenciais/gas-b.svg"
                  alt=""
                />
                <p>Previsão para individualização da medição de gás.</p>
              </li>
              <li>
                <img
                  width="48px"
                  height="48px"
                  src="images/diferenciais/bancadas-b.svg"
                  alt=""
                />
                <p>Bancada de granito na cozinha e no banheiro</p>
              </li>
              <li>
                <img
                  width="48px"
                  height="48px"
                  src="images/diferenciais/persianas-b.svg"
                  alt=""
                />
                <p>Persianas de enrolar nos Dormitórios</p>
              </li>
              <li>
                <img
                  width="48px"
                  height="48px"
                  src="images/diferenciais/ar-b.svg"
                  alt=""
                />
                <p>
                  Infraestrutura para futura instalação de ar-condicionado nos
                  dormitórios de todas <br /> as unidades
                </p>
              </li>
              <li>
                <img
                  width="48px"
                  height="48px"
                  src="images/diferenciais/aquecedor-b.svg"
                  alt=""
                />
                <p>
                  Infraestrutura para futura instalação do aquecedor de passagem
                  a gás para água quente do chuveiro das unidades
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
