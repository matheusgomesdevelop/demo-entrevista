import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import Header from "../../components/header";
import Main from "../../components/main";

// Components
import Title from "../../components/title";
import Button from "../../components/button";
import Bullet from "../../components/bullet";
import Progress from "../../components/progress";

// Decrypt
// import { decrypt } from "../../validation/encrypt";

import styles from "../../styles/layout/l-solicitar.module.scss";
import buttonStyle from "../../components/button/button.module.scss";
import Image from "next/image";

export default function PageTutorial() {
  const router = useRouter();

  // Passar para proxima etapa
  const [etapa, setEtapa] = useState(0);

  // Verificar se está autorizado
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    const auth = sessionStorage.getItem("auth_key");

    if (auth) {
      // Verifica se a codigo de acesso é válido
     // const decrypt_key = decrypt(auth, process.env.CODIGO_ACESSO);

      /*
       * Verifica se a chave que está armazenada no sessionStorage, ao ser descriptografada,
       * o resultado é igual ao CODIGO_ACESSO que está na variável de ambiente.
       */


      const temp = "123456"

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

  return (
    <>
      {/* Só mostra o conteudo da página se estiver autorizado */}
      {!auth ? null : (
        <>
          <Header headerBranco={true} />
          <Main clearMarginBottom={true}>
            {etapa === 0 ? (
              <>
                {/* Etapa 1 */}
                <div className={`${styles.l_solicitar}`}>
                  <Title texto={"Inserindo assinatura no"} textoDestaque={"Outlook"} />

                  {/* Solicitar assinatura */}
                  <div className={styles.l_solicitar__processo}>
                    <div
                      className={`${styles.l_solicitar__processo_etapas} ${styles.l_solicitar__processo_etapas__centered}`}>
                      {/* Numeros das etapas (Bullet)*/}
                      <Bullet number={1} etapaBullet={true} />
                      <Bullet number={2} etapaBullet={true} inactive={true} />
                      <Bullet number={3} etapaBullet={true} inactive={true} />
                      <Bullet number={4} etapaBullet={true} inactive={true} />

                      {/* Progress bar */}
                      <div className={styles.l_solicitar__processo_etapas__progress}>
                        <Progress size="0" />
                      </div>
                    </div>

                    {/* Texto da etapa */}
                    <p className={styles.l_solicitar__paragrafo_etapa} style={{ marginBottom: "12px" }}>
                      Clique em <strong>“Novo Email”</strong>
                    </p>

                    <Image width={530} height={129} layout="intrinsic" src="/images/tutorial/1.png" alt="" />

                    {/* Texto da etapa */}
                    <p
                      className={styles.l_solicitar__paragrafo_etapa}
                      style={{ marginTop: "46px", marginBottom: "12px" }}>
                      No menu, clique em <strong>“Assinaturas</strong>
                    </p>

                    <Image width={781} height={120} layout="intrinsic" src="/images/tutorial/2.png" alt="" />

                    {/* Botão alterar / download */}
                    <div className={styles.l_solicitar__processo_buttons}>
                      <button
                        className={`${buttonStyle.c_button} ${buttonStyle.c_button__xs2}`}
                        onClick={() => setEtapa(etapa + 1)}>
                        Avançar
                      </button>
                    </div>

                    {/* Contato */}
                    <p
                      className={styles.l_solicitar__paragrafo}
                      style={{
                        fontSize: "18px",
                        maxWidth: "400px",
                        marginTop: "83px",
                        marginBottom: "26px",
                      }}>
                      Você ainda tem dúvidas?{" "}
                      <a href="https://cs.cury.net/" target="blank">
                        Entre em contato
                      </a>
                    </p>
                  </div>
                </div>
                {/* Etapa 1 */}
              </>
            ) : etapa === 1 ? (
              <>
                {/* Etapa 2 */}
                <div className={styles.l_solicitar}>
                  <Title texto={"Inserindo assinatura no"} textoDestaque={"Outlook"} />

                  {/* Etapa 2 */}
                  <div className={styles.l_solicitar__processo}>
                    <div
                      className={`${styles.l_solicitar__processo_etapas} ${styles.l_solicitar__processo_etapas__centered}`}>
                      {/* Numeros das etapas (Bullet)*/}
                      <Bullet number={1} etapaBullet={true} />
                      <Bullet number={2} etapaBullet={true} />
                      <Bullet number={3} etapaBullet={true} inactive={true} />
                      <Bullet number={4} etapaBullet={true} inactive={true} />

                      {/* Progress bar */}
                      <div className={styles.l_solicitar__processo_etapas__progress}>
                        <Progress size="30" />
                      </div>
                    </div>

                    {/* Texto da etapa */}
                    <p
                      className={styles.l_solicitar__paragrafo_etapa}
                      style={{
                        marginBottom: "12px",
                        maxWidth: "580px",
                        textAlign: "center",
                        lineHeight: "24px",
                      }}>
                      Na caixa de diálogo, que foi aberta ao clicar em
                      <strong>“Assinaturas”</strong>, clique em <strong>“Novo”</strong> Digite um nome para a sua nova
                      assinatura e Clique em <strong>“OK”</strong>.
                    </p>

                    <Image width={523} height={363} layout="intrinsic" src="/images/tutorial/3.png" alt="" />

                    {/* Botão voltar / avançar */}
                    <div className={styles.l_solicitar__processo_buttons} style={{ marginTop: "32px" }}>
                      <button
                        className={`${buttonStyle.c_button} ${buttonStyle.c_button__xs2} ${buttonStyle.c_button__info}`}
                        onClick={() => setEtapa(etapa - 1)}>
                        Voltar
                      </button>

                      <button
                        className={`${buttonStyle.c_button} ${buttonStyle.c_button__xs2}`}
                        onClick={() => setEtapa(etapa + 1)}>
                        Avançar
                      </button>
                    </div>

                    {/* Contato */}
                    <p
                      className={styles.l_solicitar__paragrafo}
                      style={{
                        fontSize: "18px",
                        maxWidth: "400px",
                        marginTop: "83px",
                        marginBottom: "26px",
                      }}>
                      Você ainda tem dúvidas?{" "}
                      <a href="https://cs.cury.net/" target="blank">
                        Entre em contato
                      </a>
                    </p>
                  </div>
                </div>
                {/* Etapa 2 */}
              </>
            ) : etapa === 2 ? (
              <>
                {/* Etapa 3 */}
                <div className={styles.l_solicitar}>
                  <Title texto={"Inserindo assinatura no"} textoDestaque={"Outlook"} />

                  {/* Etapa 3 */}
                  <div className={styles.l_solicitar__processo}>
                    <div
                      className={`${styles.l_solicitar__processo_etapas} ${styles.l_solicitar__processo_etapas__centered}`}>
                      {/* Numeros das etapas (Bullet)*/}
                      <Bullet number={1} etapaBullet={true} />
                      <Bullet number={2} etapaBullet={true} />
                      <Bullet number={3} etapaBullet={true} />
                      <Bullet number={4} etapaBullet={true} inactive={true} />

                      {/* Progress bar */}
                      <div className={styles.l_solicitar__processo_etapas__progress}>
                        <Progress size="60" />
                      </div>
                    </div>

                    {/* Texto da etapa */}
                    <p
                      className={styles.l_solicitar__paragrafo_etapa}
                      style={{
                        marginBottom: "14px",
                        maxWidth: "510px",
                        textAlign: "center",
                        lineHeight: "24px",
                      }}>
                      Nas ferramentas da caixa de edição de textos, clique em
                      <strong>“Imagens”</strong> Selecione o arquivo de imagem da sua assinatura e clique em{" "}
                      <strong>“Inserir”</strong>
                      {/* Icone */}
                      <img
                        width="32"
                        height="30"
                        src="/images/icone.png"
                        className={styles.l_solicitar__paragrafo_etapa_icone}
                      />
                    </p>

                    <Image width={914} height={363} layout="intrinsic" src="/images/tutorial/4.png" alt="" />

                    {/* Botão voltar / avançar */}
                    <div className={styles.l_solicitar__processo_buttons} style={{ marginTop: "29px" }}>
                      <button
                        className={`${buttonStyle.c_button} ${buttonStyle.c_button__xs2} ${buttonStyle.c_button__info}`}
                        onClick={() => setEtapa(etapa - 1)}>
                        Voltar
                      </button>

                      <button
                        className={`${buttonStyle.c_button} ${buttonStyle.c_button__xs2}`}
                        onClick={() => setEtapa(etapa + 1)}>
                        Avançar
                      </button>
                    </div>

                    {/* Contato */}
                    <p
                      className={styles.l_solicitar__paragrafo}
                      style={{
                        fontSize: "18px",
                        maxWidth: "400px",
                        marginTop: "83px",
                        marginBottom: "26px",
                      }}>
                      Você ainda tem dúvidas?{" "}
                      <a href="https://cs.cury.net/" target="blank">
                        Entre em contato
                      </a>
                    </p>
                  </div>
                </div>
                {/* Etapa 3 */}
              </>
            ) : etapa === 3 ? (
              <>
                {/* Etapa 4 */}
                <div className={styles.l_solicitar}>
                  <Title texto={"Inserindo assinatura no"} textoDestaque={"Outlook"} />

                  {/* Etapa 4 */}
                  <div className={styles.l_solicitar__processo}>
                    <div
                      className={`${styles.l_solicitar__processo_etapas} ${styles.l_solicitar__processo_etapas__centered}`}>
                      {/* Numeros das etapas (Bullet)*/}
                      <Bullet number={1} etapaBullet={true} />
                      <Bullet number={2} etapaBullet={true} />
                      <Bullet number={3} etapaBullet={true} />
                      <Bullet number={4} etapaBullet={true} />

                      {/* Progress bar */}
                      <div className={styles.l_solicitar__processo_etapas__progress}>
                        <Progress size="100" />
                      </div>
                    </div>

                    {/* Texto da etapa */}
                    <p
                      className={styles.l_solicitar__paragrafo_etapa}
                      style={{
                        maxWidth: "752px",
                        textAlign: "center",
                        lineHeight: "24px",
                      }}>
                      IMPORTANTE: Nas opções <strong>“Escolha a assinatura padrão”</strong>, defina a sua nova
                      assinatura nas opções
                    </p>

                    <p
                      style={{
                        marginBottom: "10px",
                        maxWidth: "480px",
                        textAlign: "center",
                        lineHeight: "24px",
                      }}>
                      <strong>“Novas Mensagens”</strong>e <strong>“Respostas/Encaminhamentos”</strong>. Clique em{" "}
                      <strong>“Salvar”</strong> e, em seguida, <strong>“OK”</strong>
                    </p>

                    <Image width={600} height={415} layout="intrinsic" src="/images/tutorial/5.png" alt="" />

                    {/* Botão voltar / avançar */}
                    <div className={styles.l_solicitar__processo_buttons} style={{ marginTop: "29px" }}>
                      <button
                        className={`${buttonStyle.c_button} ${buttonStyle.c_button__xs2} ${buttonStyle.c_button__info}`}
                        onClick={() => setEtapa(etapa - 1)}>
                        Voltar
                      </button>

                      <button
                        className={`${buttonStyle.c_button} ${buttonStyle.c_button__xs2}`}
                        onClick={() => setEtapa(etapa + 1)}>
                        Avançar
                      </button>
                    </div>

                    {/* Contato */}
                    <p
                      className={styles.l_solicitar__paragrafo}
                      style={{
                        fontSize: "18px",
                        maxWidth: "400px",
                        marginTop: "83px",
                        marginBottom: "26px",
                      }}>
                      Você ainda tem dúvidas?{" "}
                      <a href="https://cs.cury.net/" target="blank">
                        Entre em contato
                      </a>
                    </p>
                  </div>
                </div>
                {/* Etapa 3 */}
              </>
            ) : etapa === 4 ? (
              <>
                {/* Etapa Final */}
                <div className={styles.l_solicitar}>
                  <Title
                    texto={"Parabéns!"}
                    textoDestaque={"Sua nova assinatura está configurada."}
                    colorTextReversed={true}
                  />

                  {/* Etapa Final */}
                  <div className={styles.l_solicitar__processo} style={{ marginTop: "30px" }}>
                    <Image width={178} height={178} layout="intrinsic" src="/images/parabens.svg" alt="" />

                    {/* Botão Sair */}
                    <div className={styles.l_solicitar__processo_buttons} style={{ marginTop: "112px" }}>
                      <Button text="SAIR" type="primary" size="sm" callback={() => router.push("/")} />
                    </div>

                    {/* Contato */}
                    <p
                      className={styles.l_solicitar__paragrafo}
                      style={{
                        fontSize: "18px",
                        maxWidth: "400px",
                        marginTop: "83px",
                        marginBottom: "26px",
                      }}>
                      Você ainda tem dúvidas?{" "}
                      <a href="https://cs.cury.net/" target="blank">
                        Entre em contato
                      </a>
                    </p>
                  </div>
                </div>
                {/* Etapa 3 */}
              </>
            ) : null}
          </Main>
        </>
      )}
    </>
  );
}
