import { useState } from "react";

import Image from "next/image";

import styles from "./index.module.scss";

// Util
import FormCtaWhatsapp from "../Util/form-cta-whatsapp";

export default function ButtonWhatsFlutuante() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <div className={styles.ctaWhatsFlutuante} onClick={() => setIsOpen(true)}>
        <Image width={139} height={145} src={"/icons/btn-whats-flutuante.png"} alt={""} />
      </div>
      {isOpen && <FormCtaWhatsapp setIsOpen={setIsOpen} />}
    </>
  );
}
