import Head from "next/head";

// Lib
import { styled } from "@stitches/react";

// Components
import { SacomaBenefits } from "@/application/benefits";
import { ContactSection } from "@/application/contact";
import { DownloadEbook } from "@/application/downloadEbook";
import { Environments } from "@/application/environments";
import { ESG } from "@/application/esg";
import { Introduction } from "@/application/introduction";
import { Location } from "@/application/location";
import { SacomaInfos } from "@/application/sacomanInfos";
import { Trisul } from "@/application/trisul";
import { FooterLayout } from "@/layout/Footer";
import { HeaderLayout } from "@/layout/Header";
import SectionGaleria from "@/application/section/galeria";
import { Datasheet } from "@/application/dataSheet";
import { SacomaVideo } from "@/application/sacomaVideo";
import SectionTour from "@/application/section/tour-virtual";
import SectionPlantas from "@/application/section/plantas";

const BannerSpace = styled("div", {
  width: "100%",
  height: "70px",
  display: "block",
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Side sacomã - Trisul</title>
        <meta name="description" content="Bem vindo a página do empreendimento Sacomã da linha Side - TRISUL" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main>
        <HeaderLayout />

        {/*Espaçamento entre o banner e o menu */}
        <BannerSpace />
        {/*Espaçamento entre o banner e o menu */}

        <Introduction />
        <SacomaInfos />
        <Environments />
        <SectionGaleria />
        <Location />
        {/*<SectionTour /> */}
        <SectionPlantas />
        <SacomaVideo />
        <SacomaBenefits />
        <Datasheet />
        <ESG />
        <Trisul />
        <DownloadEbook />
        <ContactSection />
        <FooterLayout />
      </main>
    </>
  );
}
