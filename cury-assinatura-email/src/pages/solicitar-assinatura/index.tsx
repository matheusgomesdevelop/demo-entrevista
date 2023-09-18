import { useState, useEffect, useRef, FormEvent } from "react";
import { useRouter } from "next/router";

import Header from "../../components/header";
import Main from "../../components/main";

// Components
import Title from "../../components/title";
import Button from "../../components/button";
import Bullet from "../../components/bullet";
import Input from "../../components/input";
import Progress, { ProgressValidation } from "../../components/progress";
import Assinatura from "../../components/assinatura";

// Decrypt
// import { decrypt } from "../../validation/encrypt";

// Converter HTML para Imagem
import { toPng } from "html-to-image";
import download from "downloadjs";

import styles from "../../styles/layout/l-solicitar.module.scss";

// Data
import { get_list } from "../../storage/departamentos";

export default function PageSolicitarAssinatura() {
  const router = useRouter();

  // Passar para proxima etapa
  const [etapa, setEtapa] = useState(0);

  // Verificar se está autorizado
  const [auth, setAuth] = useState(null);

  // Mensagens de erro dos campos dos formularios
  const [errorNomeMessage, setErrorNomeMessage] = useState(null);
  const [errorDepartMessage, setErrorDepartMessage] = useState(null);
  const [errorTelMessage, setErrorTelMessage] = useState(null);
  const [errorCelCorporativoMessage, setErrorCelCorporativoMessage] = useState(null);
  const [errorEmailMessage, setErrorEmailMessage] = useState(null);

  // Dados do usuário para colocar na assinatura final
  const [dadosAssinatura, setDadosAssinatura] = useState(null);

  // Mensagem de erro caso não consiga gerar a assinatura ao gerar assinatura
  const [erroGerarAssinatura, setErroGerarAssinatura] = useState(null);
  const [msgEnviando, setMsgEnviando] = useState(null);

  // Sobrenome
  const [sobrenomeAssinatura, setSobrenomeAssinatura] = useState(null);

  useEffect(() => {
    const auth = sessionStorage.getItem("auth_key");

    if (auth) {
      // Verifica se a codigo de acesso é válido
     // const decrypt_key = decrypt(auth, process.env.CODIGO_ACESSO);

      /*
       * Verifica se a chave que está armazenada no sessionStorage, ao ser descriptografada,
       * o resultado é igual ao CODIGO_ACESSO que está na variável de ambiente.
       */

      const temp = "123456";

      if (auth === temp) {
        setAuth(auth);
      } else {
        router.push("/");
      }
    }

    // Verifica se está autorizado a acessar esta página
    if (!auth) {
      router.push("/");
    }
  }, []);

  // post assinatura
  function handleAssinatura(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = {
      nome_sobrenome: null,
      departamento: null,
      tel: null,
      cel_corporativo: null,
      email: null,
    };

    // Validar formulario
    const form = new FormData(event.target as HTMLFormElement);

    // Verifica se o e-mail informado possui o provedor @cury.net
    const regex_email = /(@cury.net)/g;

    // Verifica se o telefone é válido
    const regex_tel = /(?:\+?55\s?)?(?:\(?\d{2}\)?[-\s]?)?\d{4,5}[-\s]?\d{4}/;

    form.forEach((value: any, key: any) => {
      // Nome e sobrenome
      key === "nome_sobrenome" && value !== ""
        ? (data.nome_sobrenome = value)
        : setErrorNomeMessage("Preencha o seu nome e sobrenome.");

      // Departamentos
      key === "departamento" && value !== ""
        ? (data.departamento = value)
        : setErrorDepartMessage("Selecione o departamento.");

      // Telefone fixo
      key === "tel" && value === ""
        ? setErrorTelMessage("O telefone é obrigatório.")
        : key === "tel" && regex_tel.test(value)
        ? (data.tel = value)
        : key === "tel" && !regex_tel.test(value)
        ? setErrorTelMessage("Telefone inválido.")
        : null;

      // Celular corporativo
      key === "cel_corporativo" && value !== ""
        ? regex_tel.test(value)
          ? (data.cel_corporativo = value)
          : !regex_tel.test(value)
          ? setErrorCelCorporativoMessage("Telefone inválido.")
          : setErrorCelCorporativoMessage(null)
        : key === "cel_corporativo" && value === ""
        ? setErrorCelCorporativoMessage(null)
        : null;

      // Email @cury.net
      key === "email" && value === ""
        ? setErrorEmailMessage("Informe o e-mail.")
        : key === "email" && regex_email.test(value)
        ? (data.email = value)
        : setErrorEmailMessage("Somente e-mail @cury.net é permitido.");
    });

    // Limpa as mensagens de erro
    data.nome_sobrenome ? setErrorNomeMessage(null) : null;
    data.departamento ? setErrorDepartMessage(null) : null;
    data.tel ? setErrorTelMessage(null) : null;
    data.cel_corporativo ? setErrorCelCorporativoMessage(null) : null;
    data.email ? setErrorEmailMessage(null) : null;

    // Enviar os dados e gerar a assinatura
    if (data.nome_sobrenome && data.departamento && data.tel && data.email) {
      // Armazena o estado com as informações que deverão ser inseridas na assinatura
      setDadosAssinatura(data);

      const ultimoNome = data.nome_sobrenome.split(" ");
      // setSobrenomeAssinatura(ultimoNome[ultimoNome.length - 1]);
      setSobrenomeAssinatura(ultimoNome.length >= 2 ? ultimoNome[1] : "");

      // Passa para a etapa de validação
      setEtapa(etapa + 1);

      // Espera a promise gerar a assinatura e passa para etapa final
      setTimeout(() => {
        setEtapa(etapa + 2);
      }, 1000);
    }
  }

  // Referencia ao DOM da assinatura
  const assinaturaRef = useRef(null);

  // Gerar uma imagem PNG da assinatura e fazer o download
  async function handleDownload() {
    setMsgEnviando("Aguarde...");

    // Remover a borda antes de baixar
    assinaturaRef.current.style.border = "none";

    toPng(assinaturaRef.current, { canvasWidth: 455, canvasHeight: 236 })
      .then((dataUrl: any) => {
        download(dataUrl, "assinatura-email-cury.png");

        // Redireciona para a tela de sucesso se conseguiu baixar
        setEtapa(4);
      })
      .catch(() => {
        setErroGerarAssinatura(
          "Ocorreu um erro ao gerar a imagem de assinatura, tente preencher o formulário novamente."
        );
      })
      .finally(() => {
        setMsgEnviando(null);
      });
  }

  return (
    <>
      {/* Só mostra o conteudo da página se estiver autorizado */}
      {!auth ? null : (
        <>
          <Header />
          <Main>
            {etapa === 1 ? (
              <>
                {/* Etapa 1 */}
                <div className={`${styles.l_solicitar}`}>
                  <Title texto={"Assinatura de e-mail"} textoDestaque={"Cury Construtora"} />

                  {/* Solicitar assinatura */}
                  <div className={styles.l_solicitar__processo}>
                    <div
                      className={`${styles.l_solicitar__processo_etapas} ${styles.l_solicitar__processo_etapas__centered}`}>
                      {/* Numeros das etapas (Bullet)*/}
                      <Bullet number={1} etapaBullet={true} />
                      <Bullet number={2} etapaBullet={true} inactive={true} />
                      <Bullet number={3} etapaBullet={true} inactive={true} />

                      {/* Progress bar */}
                      <div className={styles.l_solicitar__processo_etapas__progress}>
                        <Progress size="0" />
                      </div>
                    </div>

                    <h3>
                      <strong>1.</strong> Preencha o formulário abaixo
                    </h3>

                    {/* Formulário */}
                    <form onSubmit={handleAssinatura} className={styles.l_solicitar__processo_formEtapa}>
                      <Input
                        type="text"
                        name="nome_sobrenome"
                        placeholder="Seu nome e sobrenome"
                        labelText="Nome e Sobrenome"
                        required={true}
                        errorMessage={errorNomeMessage}
                        maxLength={30}
                      />
                      <Input
                        name="departamento"
                        labelText="Departamentos"
                        inputSelect={true}
                        inputSelectValues={get_list()}
                        required={true}
                        errorMessage={errorDepartMessage}
                      />
                      <Input
                        type="text"
                        name="tel"
                        placeholder="Telefone fixo do escritório"
                        labelText="Telefone fixo do escritório"
                        required={true}
                        errorMessage={errorTelMessage}
                        maxLength={20}
                      />
                      <Input
                        type="text"
                        name="cel_corporativo"
                        placeholder="Celular Corporativo"
                        labelText="Celular Corporativo"
                        maxLength={20}
                        errorMessage={errorCelCorporativoMessage}
                      />
                      <Input
                        type="email"
                        name="email"
                        placeholder="E-mail"
                        labelText="E-mail"
                        required={true}
                        errorMessage={errorEmailMessage}
                      />
                      {/* Gerar assinatura */}
                      <Button text="Gerar Assinatura" size="md" />
                    </form>
                  </div>
                </div>
                {/* Etapa 1 */}
              </>
            ) : etapa === 2 ? (
              <>
                {/* Etapa 2 */}
                <div className={styles.l_solicitar}>
                  <Title texto={"Assinatura de e-mail"} textoDestaque={"Cury Construtora"} />

                  {/* Solicitar assinatura */}
                  <div className={styles.l_solicitar__processo}>
                    <div
                      className={`${styles.l_solicitar__processo_etapas} ${styles.l_solicitar__processo_etapas__centered}`}>
                      {/* Numeros das etapas (Bullet)*/}
                      <Bullet number={1} etapaBullet={true} />
                      <Bullet number={2} etapaBullet={true} />
                      <Bullet number={3} etapaBullet={true} inactive={true} />

                      {/* Progress bar */}
                      <div className={styles.l_solicitar__processo_etapas__progress}>
                        <Progress size="50" />
                      </div>
                    </div>
                    <h3 className={styles.l_solicitar__processo_aguarde}>
                      <strong>2.</strong> Informações em validação. <strong>Aguarde...</strong>
                    </h3>
                    {/* Animação de enviando... */}
                    <ProgressValidation size="50" />
                  </div>
                </div>
                {/* Etapa 2 */}
              </>
            ) : etapa === 3 ? (
              <>
                {/* Etapa Final */}
                <div className={styles.l_solicitar}>
                  <Title texto={"Assinatura de e-mail"} textoDestaque={"Cury Construtora"} />

                  {/* Solicitar assinatura */}
                  <div className={styles.l_solicitar__processo}>
                    {/* Assinatura gerada */}
                    {dadosAssinatura ? (
                      <>
                        <div
                          className={`${styles.l_solicitar__processo_etapas} ${styles.l_solicitar__processo_etapas__centered}`}>
                          {/* Numeros das etapas (Bullet)*/}
                          <Bullet number={1} etapaBullet={true} />
                          <Bullet number={2} etapaBullet={true} />
                          <Bullet number={3} etapaBullet={true} />

                          {/* Progress bar */}
                          <div className={styles.l_solicitar__processo_etapas__progress}>
                            <Progress size="100" />
                          </div>
                        </div>
                        <h3 className={styles.l_solicitar__processo_aguarde}>
                          <strong>3.</strong> Assinatura gerada com sucesso!
                        </h3>

                        <div className={styles.l_solicitar__processo_assinaturaBox}>
                          <Assinatura
                            nome={dadosAssinatura.nome_sobrenome.split(" ")[0]}
                            sobrenome={sobrenomeAssinatura}
                            departamento={dadosAssinatura.departamento}
                            tel={dadosAssinatura.tel}
                            cel_corporativo={dadosAssinatura.cel_corporativo}
                            refEl={assinaturaRef}
                          />
                        </div>

                        {/* Mensagem de erro ao gerar assinatura */}
                        {erroGerarAssinatura ? (
                          <p
                            style={{
                              color: "#ff3333",
                              fontSize: "14px",
                              textAlign: "center",
                              paddingLeft: "20px",
                              paddingRight: "20px",
                              marginTop: "20px",
                            }}>
                            {erroGerarAssinatura}
                          </p>
                        ) : null}

                        {/* Botão alterar / download */}
                        <div className={styles.l_solicitar__processo_buttons}>
                          <Button text="Alterar" type="info" callback={() => setEtapa(1)} />

                          {msgEnviando ? (
                            <Button text={msgEnviando} size="xs" />
                          ) : (
                            <Button text="Download" type="success" size="xs" callback={handleDownload} />
                          )}
                        </div>
                      </>
                    ) : (
                      <>
                        <p
                          style={{
                            color: "#ff3333",
                            fontSize: "14px",
                            textAlign: "center",
                            paddingLeft: "20px",
                            paddingRight: "20px",
                            marginTop: "20px",
                          }}>
                          Não foi possível gerar a assinatura, por favor preencha o formulário
                        </p>
                        {/* Botão alterar / download */}
                        <div className={styles.l_solicitar__processo_buttons}>
                          <Button text="Voltar" size="sm" callback={() => setEtapa(1)} />
                        </div>
                      </>
                    )}
                    {/* Assinatura gerada */}
                  </div>
                </div>
                {/* Etapa Final */}
              </>
            ) : etapa === 4 ? (
              <>
                {/* Gerado com sucesso */}
                <div className={styles.l_solicitar}>
                  <Title texto={"Assinatura de e-mail"} textoDestaque={"Cury Construtora"} />

                  {/* Solicitar assinatura */}
                  <div className={styles.l_solicitar__processo}>
                    <h3 className={styles.l_solicitar__processo_aguarde} style={{ marginTop: "40px" }}>
                      <strong>Download realizado com Sucesso!</strong>
                    </h3>

                    <p className={styles.l_solicitar__paragrafo}>
                      Veja aqui como inserir a sua assinatura no <strong>Microsoft Outlook</strong>
                    </p>
                    {/* Botão alterar / download */}
                    <div className={styles.l_solicitar__processo_buttons}>
                      <Button
                        text="Ver Tutorial"
                        size="xs"
                        callback={() => router.push(`${router.pathname.replace("solicitar-assinatura", "tutorial")}`)}
                      />
                    </div>

                    <p
                      className={styles.l_solicitar__paragrafo}
                      style={{
                        fontSize: "18px",
                        maxWidth: "400px",
                        marginTop: "175px",
                      }}>
                      Você ainda tem dúvidas?{" "}
                      <a href="https://cs.cury.net/" target="blank">
                        Entre em contato
                      </a>
                    </p>
                  </div>
                </div>
                {/* Gerado com sucesso */}
              </>
            ) : (
              <>
                {/* Pagina de solicitação */}
                <div className={styles.l_solicitar}>
                  <Title texto={"Assinatura de e-mail"} textoDestaque={"Cury Construtora"}>
                    Nesta página, você pode solicitar a sua nova assinatura de e-mail.
                  </Title>

                  {/* Solicitar assinatura */}
                  <div className={styles.l_solicitar__processo}>
                    <h2>O processo é muito simples:</h2>

                    <div className={styles.l_solicitar__processo_etapas}>
                      {/* Numeros das etapas (Bullet)*/}
                      <Bullet number={1} text="Preencha adequadamente o formulário;" />
                      <Bullet number={2} text="Aguarde a validação interna das suas informações;" />
                      <Bullet
                        number={3}
                        text="Com as informações aprovadas, o arquivo será disponibilizado para download."
                      />
                    </div>
                  </div>

                  {/* Solicite agora */}
                  <Button text="Solicite agora a sua assinatura!" size="lg" callback={() => setEtapa(etapa + 1)} />
                </div>
                {/* Pagina de solicitação */}
              </>
            )}
          </Main>
        </>
      )}
    </>
  );
}
