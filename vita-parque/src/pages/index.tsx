import { useEffect } from "react";
import Head from "next/head";

import Footer from "../components/home/footer";
import Header from "../components/home/header";
import ConhecaBairro from "../components/home/section/conheca-bairro";
import DiferenciaisEngelux from "../components/home/section/diferenciais-engelux";
import DiferenciaisLazer from "../components/home/section/diferenciais-lazer";
import DiferenciaisUnidade from "../components/home/section/diferenciais-unidade";
import Plantas from "../components/home/section/plantas";
import Principal from "../components/home/section/principal";
import SimuleFinanciamento from "../components/home/section/simule-financiamento";
import TermosLegais from "../components/home/section/termos-legais";
import TourVirtual from "../components/home/section/tour-virtual";
import dataPush from "../helpers/gtm";

// UTM
import { configurar_cookies } from "../track/track";

export default function Home() {
  useEffect(() => {
    configurar_cookies();
  }, []);

  return (
    <>
      <Head>
        {/* <!-- Google Tag Manager --> */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
		new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
		j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
		'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
		})(window,document,'script','dataLayer','GTM-548SB5T');`,
          }}
        />
        {/*		<!-- End Google Tag Manager --> */}
      </Head>

      {/* <!-- Google Tag Manager (noscript) --> */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-548SB5T"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>
      {/* <!-- End Google Tag Manager (noscript) --> */}

      {/* Header */}
      <Header />
      {/* Header */}

      {/* Fotos videos e mapa */}
      <Principal />
      {/* Fotos videos e mapa */}

      {/* Simule Financiamento */}
      <SimuleFinanciamento />
      {/* Simule Financiamento */}

      {/* Diferenciais e Lazer */}
      <DiferenciaisLazer />
      {/* Diferenciais e Lazer */}

      {/* Diferenciais Unidade */}
      <DiferenciaisUnidade />
      {/* Diferenciais Unidade */}

      {/* Tour Virtual */}
      <TourVirtual />
      {/* Tour Virtual */}

      {/* Plantas */}
      <Plantas />
      {/* Plantas */}

      {/* Conheça o bairro */}
      <ConhecaBairro />
      {/* Conheça o bairro */}

      {/* Diferenciais Engelux */}
      <DiferenciaisEngelux />
      {/* Diferenciais Engelux */}

      {/* Termos Legais */}
      <TermosLegais />
      {/* Termos Legais */}

      {/* Footer */}
      <Footer />
      {/* Footer */}
    </>
  );
}
