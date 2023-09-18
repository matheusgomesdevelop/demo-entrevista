import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.l_footer}>
      <div className={styles.l_footer__content}>
        <p>
          Cury Construtora e Incorporadora 2021. Todos os direitos reservados.
          Creci SP 23670-J | Creci RJ 006366-O
        </p>
      </div>
    </footer>
  );
}
