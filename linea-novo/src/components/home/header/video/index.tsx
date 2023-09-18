import { useState } from "react";

import styles from "./index.module.scss";

export default function Video() {
  const [videoPrincipal, setVideoPrincipal] = useState(
    "https://www.youtube.com/embed/zgZxNYwGkzc"
  );
  return (
    <section className={styles.l_video} style={{ position: "relative" }}>
      <div className={styles.l_video__principal}>
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

      <div className={styles.l_video__mini}>
        {
          <div className={styles.l_video__mini_video}>
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
                  const miniVideoSrc: any =
                    document.getElementById("mini-video-1");

                  if (miniVideoSrc) {
                    setVideoPrincipal(miniVideoSrc.src);
                  }
                }}
              ></span>
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/PU08dFyEIb8"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ zIndex: 2 }}
                id="mini-video-1"
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
                  const miniVideoSrc: any =
                    document.getElementById("mini-video-2");

                  if (miniVideoSrc) {
                    setVideoPrincipal(miniVideoSrc.src);
                  }
                }}
              ></span>
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/p7YgBE5l0ak"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                id="mini-video-2"
              ></iframe>
            </div>
          </div>
        }
        <a
          href="https://www.youtube.com/watch?v=w1CMmyWbn0E&list=PLKG2CoPDRjCynPlHVrgNtm9d19EFPyLh7&index=1"
          target="_blank"
          rel="noreferrer"
        >
          <button>
            <span>+</span>
            <span>vídeos</span>
          </button>
        </a>
      </div>
    </section>
  );
}
