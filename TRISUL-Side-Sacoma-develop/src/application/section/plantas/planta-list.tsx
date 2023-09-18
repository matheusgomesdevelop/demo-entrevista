import { ReactNode } from "react";
import plantaImage36 from "../../../../public/images/plantas/planta36mComVaranda.png";
import plantaImage40 from "../../../../public//images/plantas/planta40mComVaranda.png";
import plantaImage44 from "../../../../public//images/plantas/planta44m2d1sComVaranda.png";
import plantaImage44_2 from "../../../../public//images/plantas/planta44mComVaranda.png";
import plantaImage46 from "../../../../public//images/plantas/planta46mComVaranda.png";
import plantaImage65 from "../../../../public//images/plantas/planta65mComVaranda.png";
import plantaImage65_2 from "../../../../public//images/plantas/planta65mComVaranda2.png";
import styles from "./index.module.scss";

type TPlantaList = {
  id: number,
  quartos: ReactNode[];
  description: ReactNode[];
  src: string;
  thumbSrc: any;
  metros: string;
  label: string;
};

export const planta_list: Array<TPlantaList> = [
  {
    id: 0,
    quartos:[
      <p className={styles.l_plantas__info_title}>
        <b>2</b> DORMS.
      </p>,
    ],
    src: "/images/plantas/planta36mComVaranda.png",
    thumbSrc: plantaImage36,
    metros: "36 M²",
    label: "COM VARANDA GOURMET",
    description: [
      <div className={styles.l_plantas__thumb_description}>
          <p className={styles.l_plantas__thumb_green_description}>
              <strong>2</strong> DORMS
          </p>
          <p><strong>36 </strong>M²</p>
          <p className={styles.l_plantas__thumb_green_description}>COM VARANDA GOURMET</p>
      </div>
  ],
},
{
  id: 1,
  quartos:[
    <p className={styles.l_plantas__info_title}>
        <b>2</b> DORMS.
      </p>,
    ],
    src: "/images/plantas/planta40mComVaranda.png",
    thumbSrc: plantaImage40,
    metros: "40 M²",
    label: "COM VARANDA GOURMET",
    description: [
      <div className={styles.l_plantas__thumb_description}>
          <p className={styles.l_plantas__thumb_green_description}>
              <strong>2</strong> DORMS
          </p>
          <p><strong>40 </strong>M²</p>
          <p className={styles.l_plantas__thumb_green_description}>COM VARANDA GOURMET</p>
      </div>
  ],
},
{
  id: 2,
  quartos:[
    <p className={styles.l_plantas__info_title}>
        <b>2</b> DORMS.
      </p>,
      <p className={styles.l_plantas__info_title}>
        <b>1</b> SUÍTE
      </p>,
    ],
    src: "/images/plantas/planta44m2d1sComVaranda.png",
    thumbSrc: plantaImage44,
    metros: "44 M²",
    label: "COM VARANDA GOURMET",
    description: [
      <div className={styles.l_plantas__thumb_description}>
          <p className={styles.l_plantas__thumb_green_description}>
              <strong>2</strong> DORMS. <strong>1</strong> SUÍTE
          </p>
          <p><strong>44 </strong>M²</p>
          <p className={styles.l_plantas__thumb_green_description}>COM VARANDA GOURMET</p>
      </div>
  ],
},
{
  id: 3,
  quartos:[
    <p className={styles.l_plantas__info_title}>
        <b>2</b> DORMS.
      </p>,
      <p className={styles.l_plantas__info_title}>
        <b>1</b> SUÍTE
      </p>,
    ],
    src: "/images/plantas/planta44mComVaranda.png",
    thumbSrc: plantaImage44_2,
    metros: "44 M²",
    label: "COM VARANDA GOURMET",
    description: [
      <div className={styles.l_plantas__thumb_description}>
          <p className={styles.l_plantas__thumb_green_description}>
              <strong>2</strong> DORMS. <strong>1</strong> SUÍTE
          </p>
          <p><strong>44 </strong>M²</p>
          <p className={styles.l_plantas__thumb_green_description}>COM VARANDA GOURMET</p>
      </div>
  ],
},
{
  id: 4,
  quartos:[
    <p className={styles.l_plantas__info_title}>
        <b>2</b> DORMS.
      </p>,
      <p className={styles.l_plantas__info_title}>
        <b>1</b> SUÍTE
      </p>,
    ],
    src: "/images/plantas/planta46mComVaranda.png",
    thumbSrc: plantaImage46,
    metros: "46 M²",
    label: "COM VARANDA GOURMET",
    description: [
      <div className={styles.l_plantas__thumb_description}>
          <p className={styles.l_plantas__thumb_green_description}>
              <strong>2</strong> DORMS. <strong>1</strong> SUÍTE
          </p>
          <p><strong>46 </strong>M²</p>
          <p className={styles.l_plantas__thumb_green_description}>COM VARANDA GOURMET</p>
      </div>
  ],
},
{
  id: 5,
  quartos: [
    <p className={styles.l_plantas__info_title}>
        <b>3</b> DORMS.
      </p>,
      <p className={styles.l_plantas__info_title}>
        <b>1</b> SUÍTE
      </p>,
    ],
    src: "/images/plantas/planta65mComVaranda.png",
    thumbSrc: plantaImage65,
    metros: "65 M²",
    label: "COM VARANDA GOURMET",
    description: [
      <div className={styles.l_plantas__thumb_description}>
          <p className={styles.l_plantas__thumb_green_description}>
              <strong>3</strong> DORMS. <strong>1</strong> SUÍTE
          </p>
          <p><strong>65 </strong>M²</p>
          <p className={styles.l_plantas__thumb_green_description}>COM VARANDA GOURMET</p>
      </div>
  ],
},
{
  id: 6,
  quartos:[
    <p className={styles.l_plantas__info_title}>
        <b>3</b> DORMS.
      </p>,
      <p className={styles.l_plantas__info_title}>
        <b>1</b> SUÍTE
      </p>,
    ],
    src: "/images/plantas/planta65mComVaranda2.png",
    thumbSrc: plantaImage65_2,
    metros: "65 M²",
    label: "COM VARANDA GOURMET",
    description: [
      <div className={styles.l_plantas__thumb_description}>
          <p className={styles.l_plantas__thumb_green_description}>
              <strong>3</strong> DORMS. <strong>1</strong> SUÍTE
          </p>
          <p><strong>65 </strong>M²</p>
          <p className={styles.l_plantas__thumb_green_description}>COM VARANDA GOURMET</p>
      </div>
  ],
  },
];
