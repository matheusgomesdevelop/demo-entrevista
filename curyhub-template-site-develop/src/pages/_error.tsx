import Head from "next/head";

export default function Error() {
  return (
    <>
      <Head>
        <title>Theme Admin</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
          integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
          crossOrigin="anonymous"
        />
      </Head>

      <div className="d-flex align-items-center justify-content-center vh-100">
        <div className="text-center">
          <h1 className="display-1 fw-bold text-primary">404</h1>
          <p className="fs-3">
            {" "}
            <span className="text-danger">Opps!</span> Pagina não encontrada.
          </p>
          <p className="lead">A página que você está tentando visualizar, não existe.</p>
        </div>
      </div>
    </>
  );
}
