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
                    <strong>TRANSPORTE</strong>{" "}
                    <span>
                      A futura estação Vila Formosa do Metrô e o Terminal Carrão
                      conectam você à cidade.
                    </span>
                  </p>
                </li>
                <li>
                  <img
                    width="24px"
                    height="24px"
                    src="images/diferenciais/shoppings.svg"
                    alt=""
                  />
                  <p>
                    <strong>SHOPPINGS</strong>{" "}
                    <span>
                      Shopping Anália Franco, Shopping Aricanduva, Shopping
                      Metrô Tatuapé, Shopping Garden e lindas lojas no bairro e
                      região pra você desfilar seu estilo.
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
                    <strong>COMÉRCIO</strong>{" "}
                    <span>
                      Padaria Renata, Supermercado Carregour, Negreiros
                      Supermercados, Assaí Atacadista, Padadaria Verona,
                      Farmácia, Subway, {"McDonald's"}, Charada Burguer, Mercado
                      Municipal Vila Formosa e Spani Atacadista
                    </span>
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
                      Aproveite o Parque Ceret, Parque do Carmo, Praça Sampaio
                      Vidigal, Altitude Park, Playcenter e amplas áreas verdes
                      em toda a região.
                    </span>
                  </p>
                </li>
                <li>
                  <img
                    width="24px"
                    height="24px"
                    src="images/diferenciais/torres.svg"
                    alt=""
                  />
                  <p>
                    <strong>HOSPITAIS</strong>{" "}
                    <span>Hospital Vitória e Hospital São Luiz</span>
                  </p>
                </li>
                <li>
                  <img
                    width="24px"
                    height="24px"
                    src="images/diferenciais/endereco.svg"
                    alt=""
                  />
                  <p>
                    <strong>ACESSOS</strong>{" "}
                    <span>
                      Fácil acesso à Radial Leste e avenidas importantes como
                      Dr. Eduardo Cotching, João XXIII, Regente Feijó, Vereador
                      Abel Ferreira, Renata, Emília Marengo e Eleonora Cintra;
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
