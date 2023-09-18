import { useState } from "react";

import Titulo from "../../../util/titulo";
import styles from "./index.module.scss";

export default function TourVirtual() {
  const [dorm2, setDorm2] = useState(true);
  const [dorm2Img, setDorm2Img] = useState(true);
  const [dorm3, setDorm3] = useState(false);
  const [dorm3Img, setDorm3Img] = useState(false);

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
                  src="https://my.matterport.com/show/?m=xh2DpABkUNV"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                ></iframe>
              </div>
            </>
          ) : null}

          {dorm3 ? (
            <>
              <div className={styles.tourVirtual__tour_iframe}>
                {dorm3Img ? (
                  <>
                    <img
                      src="images/secao/tour-virtual/3dorms.webp"
                      alt=""
                      onClick={() => setDorm3Img(false)}
                    />
                    <div
                      className={styles.tourVirtual__tour_iframe__play}
                      onClick={() => setDorm3Img(false)}
                    ></div>
                  </>
                ) : null}

                <iframe
                  allowFullScreen
                  src="https://my.matterport.com/show/?m=Gjowt8Fhj72"
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
                setDorm3(false);
              }}
            >
              <strong>2</strong>
              <span>dorms.</span>
            </button>
            <button
              className={dorm3 ? styles.tourVirtual__tour_Btn__active : null}
              onClick={() => {
                setDorm2(false);
                setDorm3Img(true);
                setDorm3(true);
              }}
            >
              <strong>3</strong>
              <span>dorms.</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
