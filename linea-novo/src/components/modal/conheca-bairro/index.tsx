import Titulo from "../../util/titulo";
import styles from "./index.module.scss";

export default function ModalConhecaBairro({ children }) {
  return (
    <div className={styles.modalConhecaBairro}>
      <div className={styles.modalConhecaBairro__content}>
        {children}
        <Titulo>
          <strong>Conheça </strong>o bairro
        </Titulo>

        <div className={styles.modalConhecaBairro__bairro}>
          <div className={styles.modalConhecaBairro__bairro_foto}>
            <img src="images/secao/conheca-bairro/img-bairro.jpg" alt="" />
          </div>
          <div className={styles.modalConhecaBairro__bairro_list}>
            <div className={styles.modalConhecaBairro__bairro_list__atributos}>
              <ul>
                <li>
                  <img
                    width="24px"
                    height="24px"
                    src="images/diferenciais/metro.svg"
                    alt=""
                  />
                  <p>
                    <strong>MOBILIDADE URBANA</strong>{" "}
                    <span>Estação Vila Sônia</span>
                  </p>
                </li>
                <li>
                  <img
                    width="24px"
                    height="24px"
                    src="images/diferenciais/lazer.svg"
                    alt=""
                  />
                  <p>
                    <strong>LAZER</strong>{" "}
                    <span>
                      Clube Pequeninos do Jockey, Teatro das Artes, Shopping
                      Eldorado, Parque Villa-Lobos
                    </span>
                  </p>
                </li>
                <li>
                  <img
                    width="24px"
                    height="24px"
                    src="images/diferenciais/supermercado.svg"
                    alt=""
                  />
                  <p>
                    <strong>FACILIDADES</strong>{" "}
                    <span>
                      Assaí, Carrefour Hipermercado, Padaria Vila Sônia, Dia
                      Supermercado, Pão de Açúcar, Laboratório Delboni,
                      Starbucks, Hospital Sancta Maggiore, Drogaria São Paulo
                    </span>
                  </p>
                </li>
                <li>
                  <img
                    width="24px"
                    height="24px"
                    src="images/diferenciais/farmacia.svg"
                    alt=""
                  />
                  <p>
                    <strong>CULTURA</strong>{" "}
                    <span>
                      Colégio Franciscano João XXIII, CESAS - Centro de Educação
                      de Saúde, Abram Szajman - Albert Einstein Ensino, Escola e
                      Berçário Maria Sofia, Colégio Guilherme Dumont Vilares
                    </span>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.modalConhecaBairro__footer}></div>
    </div>
  );
}
