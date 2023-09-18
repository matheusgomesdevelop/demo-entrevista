import { Dispatch, SetStateAction } from "react";
import SocialItem from "./social-item";

import styles from "./index.module.scss";

interface ICompartilhe {
  state: Dispatch<SetStateAction<boolean>>;
}

export default function ModalCompartilhe({ state }: ICompartilhe) {
  return (
    <div className={styles.compartilhe}>
      <header>
        <h1>Compartilhar</h1>

        <button onClick={() => state(false)}>{""}</button>
      </header>

      <section>
        <SocialItem type="facebook" />
        <SocialItem type="twitter" />
        <SocialItem type="telegram" />
        <SocialItem type="linkedin" />
        <SocialItem type="whatsapp" />
        <SocialItem type="compartilhar" />
      </section>
    </div>
  );
}
