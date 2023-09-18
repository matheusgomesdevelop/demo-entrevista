import { ReactNode } from "react";
import styles from "./index.module.scss";

interface IConhecaBairro {
  children: ReactNode;
}

export default function ModalConhecaBairro({ children }: IConhecaBairro) {
  return (
    <div className={styles.modalConhecaBairro}>
      <div className={styles.modalConhecaBairro__content}>
        {children}
        <strong>Conheça </strong>o bairro
        <div className={styles.modalConhecaBairro__bairro}>
          <div className={styles.modalConhecaBairro__bairro_foto}>
            <img src="/images/secao/conheca-bairro/img-bairro.png" alt="" />
          </div>
          <div className={styles.modalConhecaBairro__bairro_list}>
            <div className={styles.modalConhecaBairro__bairro_list__atributos}>
              <ul>
                <li>
                  <img width="24px" height="24px" src="/images/diferenciais/metro.svg" alt="" />
                  <p>
                    <strong>TRANSPORTE</strong>{" "}
                    <span>
                      Futura estação Santa Marina do Metrô, Terminal Barra Funda e estações Lapa e Água Branca da CPTM
                      conectam você à cidade.
                    </span>
                  </p>
                </li>
                <li>
                  <img width="24px" height="24px" src="/images/diferenciais/shoppings.svg" alt="" />
                  <p>
                    <strong>SHOPPINGS</strong>{" "}
                    <span>
                      Bourbon Shopping, West Plaza, Tietê Plaza, Shopping Lapa e lindas lojas no bairro e região pra
                      você desfilar seu estilo.
                    </span>
                  </p>
                </li>
                <li>
                  <img width="24px" height="24px" src="/images/diferenciais/escolas.svg" alt="" />
                  <p>
                    <strong>ESCOLAS</strong>{" "}
                    <span>
                      Unip, Colégio Adventista da Lapa, Colégio Heitor Garcia, Pré-Médico e Campos Salles. Você terá as
                      melhores faculdades e uma ampla rede de ensino para a educação da sua família.
                    </span>
                  </p>
                </li>
                <li>
                  <img width="24px" height="24px" src="/images/diferenciais/metro.svg" alt="" />
                  <p>
                    <strong>CULTURA</strong>{" "}
                    <span>
                      MIS Experience, Museu da Imaginação, Teatro Bradesco, Sesc Pompéia, Teatro Cacilda Becker,
                      Memorial da América Latina e muitas outras opções em programas culturais.
                    </span>
                  </p>
                </li>
                <li>
                  <img width="24px" height="24px" src="/images/diferenciais/supermercado.svg" alt="" />
                  <p>
                    <strong>COMÉRCIO</strong>{" "}
                    <span>
                      Rua Doze de Outubro, Mercado da Lapa e as principais redes de hipermercados como Extra, Assaí e
                      Makro, oferencendo comércio e serviços.
                    </span>
                  </p>
                </li>
                <li>
                  <img width="24px" height="24px" src="/images/diferenciais/lazer.svg" alt="" />
                  <p>
                    <strong>LAZER</strong>{" "}
                    <span>
                      Aproveite o Parque da Água Branca, Parque Cidade de Toronto, Parque Villa-Lobos, Parque Jardim das
                      Perdizes, amplas praças e áreas verdes em toda a região.
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
