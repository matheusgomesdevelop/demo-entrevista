import { useState } from "react";

import Titulo from "../../../util/titulo";
import styles from "./index.module.scss";

export default function TourVirtual() {
  const [dorm2, setDorm2] = useState(true);
  const [dorm2Img, setDorm2Img] = useState(true);

  return (
    <div className={styles.tourVirtual}>
      <div className={styles.tourVirtual__content}>
        <Titulo>
          <strong>TOUR VIRTUAL</strong>
        </Titulo>

        <div className={styles.tourVirtual__tour}>
          {dorm2 ? (
            <>
              <div className={styles.tourVirtual__tour_iframe}>
                {dorm2Img ? (
                  <>
                    <img
                      src="images/secao/tour-virtual/2dorms.webp"
                      alt=""
                      onClick={() => setDorm2Img(false)}
                    />
                    <div
                      className={styles.tourVirtual__tour_iframe__play}
                      onClick={() => setDorm2Img(false)}
                    ></div>
                  </>
                ) : null}

                <iframe
                  allowFullScreen
                  src="https://my.matterport.com/show/?m=kLChYQn2PRb"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                ></iframe>
              </div>
            </>
          ) : null}

          <div className={styles.tourVirtual__tour_Btn}>
            <button
              className={dorm2 ? styles.tourVirtual__tour_Btn__active : null}
              onClick={() => {
                setDorm2Img(true);
                setDorm2(true);
              }}
            >
              <strong>2</strong>
              <span>dorms.</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
