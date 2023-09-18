import styles from "./index.module.scss";

export default function Localizacao() {
  return (
    <section className={styles.l_localizacao}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.8348224751394!2d-46.53316428447092!3d-23.574375167959296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5d96abd2e52b%3A0x394bb7666953a395!2sAv.%20Cipriano%20Rodrigues%2C%20316%20-%20Vila%20Formosa%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2003361-010!5e0!3m2!1spt-BR!2sbr!4v1635442628309!5m2!1spt-BR!2sbr"
        width="100%"
        height="100%"
        style={{ border: "0" }}
        allowFullScreen
        loading="lazy"
      ></iframe>
    </section>
  );
}
