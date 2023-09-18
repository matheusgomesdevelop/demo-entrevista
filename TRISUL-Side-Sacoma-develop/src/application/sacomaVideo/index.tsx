import styles from "./style.module.scss";

export const SacomaVideo = () => {
  const video = {
    url: "https://www.youtube.com/embed/YsuRbxO6yDQ",
    title: "Side Sacomã - Conceito",
  };
  return (
    <section id="section-video" className={styles.sacoma_video_container}>
      <div className={styles.sacoma_video_container__wrapper}>
        <iframe
          src={`${video.url}?controls=0`}
          title={video.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};
