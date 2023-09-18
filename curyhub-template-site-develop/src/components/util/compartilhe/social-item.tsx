import { useEffect, useState } from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  TelegramShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  EmailShareButton,
} from "react-share";

import styles from "./index.module.scss";

interface ISocial {
  type: string;
}

export default function SocialItem({ type }: ISocial) {
  const [location, setLocation] = useState<string>("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setLocation(window.location.href);
    }
  }, []);

  return (
    <div className={styles.socialItem}>
      {type === "facebook" && (
        <>
          <FacebookShareButton url={location}>
            <div className={styles.socialItem__facebook}></div>
            <p>Facebook</p>
          </FacebookShareButton>
        </>
      )}

      {type === "twitter" && (
        <>
          <TwitterShareButton url={location}>
            <div className={styles.socialItem__twitter}></div>
            <p>Twitter</p>
          </TwitterShareButton>
        </>
      )}

      {type === "telegram" && (
        <>
          <TelegramShareButton url={location}>
            <div className={styles.socialItem__telegram}></div>
            <p>Telegram</p>
          </TelegramShareButton>
        </>
      )}

      {type === "linkedin" && (
        <>
          <LinkedinShareButton url={location}>
            <div className={styles.socialItem__linkedin}></div>
            <p>Linkedin</p>
          </LinkedinShareButton>
        </>
      )}

      {type === "whatsapp" && (
        <>
          <WhatsappShareButton url={location}>
            <div className={styles.socialItem__whatsapp}></div>
            <p>WhatsApp</p>
          </WhatsappShareButton>
        </>
      )}

      {type === "compartilhar" && (
        <>
          <EmailShareButton url={location}>
            <div className={styles.socialItem__compartilhar}></div>
            <p></p>
          </EmailShareButton>
        </>
      )}
    </div>
  );
}
