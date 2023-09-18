// Template parts
import Header from "../components/header";
import Main from "../components/main";

import PageCodigoAcesso from "./codigo-acesso";

export default function Home() {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Main */}
      <Main>
        {/* Codigo Acesso */}
        <PageCodigoAcesso />
      </Main>
    </>
  );
}
