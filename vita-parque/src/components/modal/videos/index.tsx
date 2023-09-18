import { useState } from "react";

import styles from "./index.module.scss";

export default function ModalVideos() {
  const [videoPrincipal, setVideoPrincipal] = useState(
    "https://www.youtube.com/embed/NtSdv_5SS2Y"
  );
  return (
    <div className={styles.modalVideos}>
      <div className={styles.modalVideos__principal}>
        <iframe
          width="100%"
          height="100%"
          src={videoPrincipal}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className={styles.modalVideos__lista}>
        <div style={{ position: "relative" }}>
          <span
            style={{
              width: "100%",
              height: "100%",
              display: "block",
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: 999,
              cursor: "pointer",
            }}
            onClick={() => {
              const miniVideoSrc: any = document.getElementById("mini-video-1");

              if (miniVideoSrc) {
                setVideoPrincipal(miniVideoSrc.src);
              }
            }}
          ></span>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/E0XcB-b3SA8"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            id="mini-video-1"
            style={{ zIndex: 2 }}
          ></iframe>
        </div>

        <div style={{ position: "relative" }}>
          <span
            style={{
              width: "100%",
              height: "100%",
              display: "block",
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: 999,
              cursor: "pointer",
            }}
            onClick={() => {
              const miniVideoSrc: any = document.getElementById("mini-video-2");

              if (miniVideoSrc) {
                setVideoPrincipal(miniVideoSrc.src);
              }
            }}
          ></span>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/YqJsAOETSg8"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            id="mini-video-2"
            style={{ zIndex: 2 }}
          ></iframe>
        </div>
      </div>
    </div>
  );
}
