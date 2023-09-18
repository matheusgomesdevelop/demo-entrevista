import styles from "./index.module.scss";

export default function Localizacao() {
  return (
    <section className={styles.l_localizacao}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7316.82153096079!2d-46.686831122777185!3d-23.517724051137872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef9e8a4c45817%3A0xb6201dab750ebcab!2sLaparque%20Stand!5e0!3m2!1spt-BR!2sbr!4v1633540114110!5m2!1spt-BR!2sbr"
        width="100%"
        height="100%"
        style={{ border: "0" }}
        allowFullScreen
        loading="lazy"
      ></iframe>
    </section>
  );
}
