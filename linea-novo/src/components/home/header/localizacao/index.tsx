import styles from "./index.module.scss";

export default function Localizacao() {
  return (
    <section className={styles.l_localizacao}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.2923588689596!2d-46.7392226844707!3d-23.593845668678927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce569017ef37ef%3A0x689c4210f367033b!2sAv.%20Prof.%20Francisco%20Morato%2C%204228%20-%20Vila%20Sonia%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2005520-100!5e0!3m2!1spt-BR!2sbr!4v1635863397778!5m2!1spt-BR!2sbr"
        width="100%"
        height="100%"
        style={{ border: "0" }}
        allowFullScreen
        loading="lazy"
      ></iframe>
    </section>
  );
}
