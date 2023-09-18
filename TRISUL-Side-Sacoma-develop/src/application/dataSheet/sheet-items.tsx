import styles from "./style.module.scss";

export const SheetData1 = [
  {
    title: "endereço",
    data: "RUA DO LAGO, 216",
  },
  {
    title: "ARQUITETURA",
    data: "RENATO BIANCONI ARQUITETO",
    divider: false,
  },
  {
    title: "PAISAGISMO",
    data: "ROBERTA VENTURA ARQUITETURA & PAISAGISMO",
    divider: false,
  },
  {
    title: "DECORAÇÃO DE INTERIORES",
    data: "GABRIELA BOSSO ARQUITETURA",
  },
  {
    title: "ÁREA DO TERRENO",
    data: "5.082,40 M²",
  },
  {
    title: "PAVIMENTOS",
    multipleData: [
      <p className={styles.info_description}>
        <b>TORRE 1</b>: 22 PAVIMENTOS TIPO (1º AO 22º ANDARES)
      </p>,
      <p className={styles.info_description}>
        <b>TORRE 2</b>: 20 PAVIMENTOS TIPO (1º AO 20º ANDARES)
      </p>,
    ],
  },
  {
    title: "ELEVADORES",
    data: "TORRES 1 E 2 = 5 ELEVADORES E 1 TRANSFER (PAV. TÉRREO / ACESSO)",
  },
  {
    title: "TIPOLOGIAS",
    multipleData: [
      <p className={styles.info_description}>65 M² | 3 DORMS. (1 SUÍTE)</p>,
      <p className={styles.info_description}>44 M² A 47 M² | 2 DORMS. (1 SUÍTE)</p>,
      <p className={styles.info_description}>36 M² A 41 M² | 2 DORMS.</p>,
    ],
  },
];

export const SheetData2 = [
  {
    title: "VAGAS",
    data: "1 VAGA PARA AS UNIDADES DE 3 DORMITÓRIOS",
  },
  {
    title: "ÁREAS COMUNS INTERNAS",
    multipleData: [
      <p className={styles.info_description}>
        PAV. TÉRREO: <b>COWORKING ESTUDOS, DELIVERY, MINI MARKET, ESPAÇO INFLUENCER, SALA DE JOGOS,
        SALÃO DE FESTAS, SALÃO FESTAS GOURMET, BRINQUEDOTECA, ESPAÇO BEM-ESTAR, APOIO PISCINA E SPORTS BAR.</b>
      </p>,
      <p className={styles.info_description}>
        NÍVEIS INFERIORES:<b> ATELIER, LAVANDERIA COLETIVA OMO, BICICLETÁRIOS COM OFICINA E ACADEMIA INTERNO.</b>
      </p>,
    ],
  },
  {
    title: "ÁREAS COMUNS EXTERNAS",
    multipleData: [
      <p className={styles.info_description}>
        PAV. TÉRREO:<b> SOLÁRIO COM PISCINA ADULTO, INFANTIL E DECK MOLHADO DESCOBERTOS, PRAÇAS DE ESTAR, APOIO
        SPORTS BAR, CHURRASQUEIRA TÉRREO, PLAYGROUND BABY, ESPAÇO PARA FEIRA LIVRE, APOIO SALÃO FESTAS
        GOURMET E HORTA.</b>
      </p>,
      <p className={styles.info_description}>
        NÍVEIS INFERIORES: <b>ESPAÇO LUAU, QUADRA RECREATIVA DE AREIA, ÁREA DE APOIO (ARQUIBANCADA), PLAYGROUND,
         CHURRASQUEIRA SUBSOLO, ÁREA DE DESCANSO, PET PLACE, DOG WASH E ACADEMIA EXTERNO.</b>
      </p>,
    ],
  },
];
