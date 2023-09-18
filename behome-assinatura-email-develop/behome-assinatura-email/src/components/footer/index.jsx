import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.l_footer}>
      <div className={styles.l_footer__content}>
        <p>
          Be Home 2022 - Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
