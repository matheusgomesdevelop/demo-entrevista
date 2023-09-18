import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import styles from "../../styles/layout/l-codigo-acesso.module.scss";

// Components
import Title from "../../components/title";
import Input from "../../components/input";
import Button from "../../components/button";
// import { validarAcesso } from "../../http";

export default function PageCodigoAcesso() {
  const router = useRouter();

  const [msgEnviando, setMsgEnviando] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Remove o acesso, caso acesso a rota "/"
    if (router.pathname === "/") {
      sessionStorage.removeItem("auth_key");
    }
  }, []);

  // Validar Chave de acesso ao submit
  function handleSubmit(event: any) {
    event.preventDefault();

    const data = {
      codigo_acesso: event.target.codigo_acesso.value,
    };

    // Validação do campo
  /*  if (data.codigo_acesso !== "") {
      // Seta mensagem enquanto envia os dados
      setMsgEnviando("Aguarde...");

      // Verificar se o codigo de acesso está correto na API
      validarAcesso(data)
        .then((resolve) => {
          if (resolve.auth_key) {
            // Armazenar no sessionStorage caso o código esteja correto
            sessionStorage.setItem("auth_key", resolve.auth_key);

            // Redireciona para a tela de solicitar assinatura
            router.push("/solicitar-assinatura");
          } else {
            setError(resolve.message);
          }
        })
        .catch(() => setError("Ocorreu um erro na conexão com o servidor."))
        .finally(() => setMsgEnviando(null));
    } else {
      setError("Digite um código de acesso");
    } */
  }

  return (
    <div className={styles.l_codigo_acesso}>
      <Title texto={"Assinatura de e-mail"} textoDestaque={"Cury Construtora"}>
        Nesta página, você pode solicitar a sua nova assinatura de e-mail.
      </Title>

      {/* Código de acesso */}
      <form
        method="POST"
        className={styles.l_codigo_acesso__formAcesso}
        onSubmit={handleSubmit}
      >
        <Input
          type="text"
          name="codigo_acesso"
          placeholder="X X X X X X X X X"
          labelText="Digite o seu Código de Acesso"
          labelTextCenter={true}
          required={true}
          maxLength={20}
          errorMessage={error}
        />

        {msgEnviando ? (
          <Button text={msgEnviando} />
        ) : (
          <Button text="Acessar" />
        )}
      </form>
      {/* Código de acesso */}
    </div>
  );
}
