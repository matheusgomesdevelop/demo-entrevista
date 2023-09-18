import { useEffect } from "react";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import styles from "./header.module.scss";

interface IHeader {
  headerBranco?: boolean;
}

export default function Header({ headerBranco }: IHeader) {
  useEffect(() => {
    document.documentElement.lang = "pt-br";
  }, []);
  return (
    <>
      <Head>
        <title>Cury | Ferramenta para assinatura de e-mail</title>
        <meta name="keywords" content="cury, assinatura e-mail, solicitar assinatura e-mail" />
        <meta name="description" content="Nesta página, você pode solicitar a sua nova assinatura de e-mail." />
        <link rel="shortcut icon" href="favicon.png" type="image/x-icon" />
      </Head>

      <header className={headerBranco ? `${styles.l_header} ${styles.l_header_branco}` : styles.l_header}>
        <Link href="/" legacyBehavior>
          <a>
            {headerBranco ? (
              <Image src="/logo-cury-azul.png" width={182} height={55} layout="intrinsic" alt="Logo Cury" />
            ) : (
              <Image src="/logo-cury-branco.png" width={182} height={55} layout="intrinsic" alt="Logo Cury" />
            )}
          </a>
        </Link>
      </header>
    </>
  );
}
