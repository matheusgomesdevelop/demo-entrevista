import styles from "./index.module.scss";

export default function TermosLegaisModal({ children }) {
  return (
    <div className={styles.modalTermosLegais}>
      <div className={styles.modalTermosLegais__content}>
        <div className={styles.modalTermosLegais__content_top}>{children}</div>

        <div className={styles.modalTermosLegais__content_text}>
          <div className={styles.modalTermosLegais__content_text__logo}>
            <strong>realização</strong>
            <img
              width="204"
              height="32"
              src="images/logo-engelux.png"
              alt="La Parque"
            />
          </div>

          <p className={styles.modalTermosLegais__content_text__desc}>
            Jaçanã Empreendimentos Imobiliários SPE Ltda. Rua dos Pinheiros, 870
            – 8.º andar – conj. 84B – Pinheiros – São Paulo – SP. Incorporação
            Registrada sob R5 na matrícula nº 159.571 do 10º Cartório de
            Registro de Imoveis de SP, em 02/07/2021. Área recreativa externa
            (reservada para atendimento ao futuro melhoramento viário). O salão
            de festas gourmet, a oficina de bicicletas, o espaço delivery, o
            Lamarket e o lounge coberto serão entregues com a torre A. A
            infraestrutura para futura instalação do ar condicionado consiste na
            entrega de ponto de dreno e ponto de energia. A instalação de rede
            frigorígena, equipamentos e sanca serão por conta do comprador. As
            áreas comuns serão entregues equipadas e decoradas conforme Memorial
            Descritivo. As imagens são meramente ilustrativas, com sugestão de
            decoração e paisagismo. A vegetação que compõem o paisagismo
            retratado nas perspectivas é meramente ilustrativa e representa o
            porte adulto. Na entrega do empreendimento, poderá apresentar
            diferenças de tamanho e porte, mas estará de acordo com o projeto de
            paisagismo. Os móveis e utensílios são meramente ilustrativos, de
            dimensões comerciais e não fazem parte do Compromisso de Compra e
            Venda. *Disponível para algumas unidades.**Preço referente as
            unidades 304 C e 404 C da torre C Castanheira. Tabela Julho de 2021.
            Sujeita a alteração sem aviso prévio. Endereço do Vita Parque: Av.
            Cipriano Rodrigues, 316 - Vila Formosa - São Paulo. Consulte a
            equipe de vendas no stand para documentação necessária. Vendas
            futuras: Lopes CRECI/SP 24.073-J.
          </p>
        </div>
      </div>
    </div>
  );
}
