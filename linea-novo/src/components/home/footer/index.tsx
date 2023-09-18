import Button from "../../util/button";
import styles from "./index.module.scss";

export default function Footer() {
  return (
    <footer className={styles.l_footer}>
      <div className={styles.l_footer__container}>
        <span className={styles.l_footer__bar}></span>

        <div className={styles.l_footer__middle}>
          <div className={styles.l_footer__middle_logos}>
            {/* 
      <div className={styles.l_footer__middle_logos__item}>
              <span>Lançamento</span>  
<img src="images/logo-lopes.png" alt="" width="100" height="24" />
      </div>
 */}
            <div className={styles.l_footer__middle_logos__item}>
              <span>Realização e Construção</span>
              <img
                src="images/logo-engelux.png"
                alt=""
                width="148"
                height="23"
              />
            </div>
          </div>

          <div className={styles.l_footer__middle_copy}>
            <p>
              <strong>Grupo Engelux</strong> | Incorporadora e Construtora
            </p>
          </div>
        </div>

        <span className={styles.l_footer__bar}></span>

        <div className={styles.l_footer__bottom}>
          <a href="#">Voltar ao topo</a>

          <div className={styles.l_footer__logoMop}>
            <span>Desenvolvido por</span>
            <img src="images/logo-mop.png" width="60" height="30" alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
}
