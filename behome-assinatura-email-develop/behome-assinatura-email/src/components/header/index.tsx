import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import styles from "./header.module.scss";

export default function Header() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Behome | Ferramenta para assinatura de e-mail</title>
        <meta
          name="keywords"
          content="behome, assinatura e-mail, solicitar assinatura e-mail"
        />
        <meta
          name="description"
          content="Nesta página, você pode solicitar a sua nova assinatura de e-mail."
        />
        <link rel="shortcut icon" href="favicon.png" type="image/x-icon" />
      </Head>

      <header className={styles.l_header}>
        <a onClick={() => router.reload()} style={{ cursor: "pointer" }}>
          <Image
            src="/images/logo-behome-b.svg"
            width={182}
            height={42}
            layout="intrinsic"
            alt="Behome"
          />
        </a>
      </header>
    </>
  );
}
