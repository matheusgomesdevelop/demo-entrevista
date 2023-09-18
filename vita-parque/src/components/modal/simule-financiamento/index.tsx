import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";

import Swal from "sweetalert2";

import Button from "../../util/button";
import CInput from "../../util/input";
import Titulo from "../../util/titulo";
import styles from "./index.module.scss";

import modalStyles from "../.././modal/index.module.scss";
import { validateCel, validateEmail } from "../../../validation/regex";
import anapro_body, { anaproURLFormulario } from "../../../helpers/anapro";
import { anapro_post } from "../../../http";
import dataPush from "../../../helpers/gtm";
import { getUpCrmBody, postInteractionOpportunity } from "../../../helpers/url-crm";

export default function ModalSimuleFinanciamento({ children }) {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const formRef = useRef(null);

  const [etapa, setEtapa] = useState(0);

  // Etapa 1 - Nome
  const [nome, setNome] = useState(null);
  const [msgNomeErro, setMsgNomeErro] = useState(null);

  // Etapa 2 - Valor financiamento
  const [valor, setValor] = useState(null);
  const [msgValorErro, setMsgValorErro] = useState(null);

  const [fgts, setFgts] = useState(null);
  const [msgFgtsErro, setMsgFgtsErro] = useState(null);

  const [entrada, setEntrada] = useState(null);
  const [msgEntradaErro, setMsgEntradaErro] = useState(null);

  // Etapa 3 - Email e celular
  const [email, setEmail] = useState(null);
  const [msgEmailErro, setMsgEmailErro] = useState(null);

  const [celular, setCelular] = useState(null);
  const [msgCelularErro, setMsgCelularErro] = useState(null);

  // Fetch valor final
  const [valorFinal, setValorFinal] = useState(null);

  // Mensagem de erro no valor final
  const [MsgErroValorFinal, setMsgErroValorFinal] = useState(null);

  useEffect(() => {
    const nome = formRef.current.nome ? formRef.current.nome : null;
    const valor = formRef.current.valor ? formRef.current.valor : null;
    const fgts = formRef.current.fgts ? formRef.current.fgts : null;
    const entrada = formRef.current.entrada ? formRef.current.entrada : null;
    const email = formRef.current.email ? formRef.current.email : null;
    const celular = formRef.current.tel ? formRef.current.tel : null;

    const eventos = ["change", "keyup"];

    // Remove a mensagem de erro ao adicionar um valor
    if (nome) {
      eventos.forEach((evento) => {
        nome.addEventListener(evento, () => {
          setMsgNomeErro(null);
        });
      });
    }
    if (valor) {
      eventos.forEach((evento) => {
        valor.addEventListener(evento, () => {
          setMsgValorErro(null);
        });
      });
    }

    if (fgts) {
      eventos.forEach((evento) => {
        fgts.addEventListener(evento, () => {
          setMsgFgtsErro(null);
        });
      });
    }

    if (entrada) {
      eventos.forEach((evento) => {
        entrada.addEventListener(evento, () => {
          setMsgEntradaErro(null);
        });
      });
    }

    if (email) {
      eventos.forEach((evento) => {
        email.addEventListener(evento, () => {
          setMsgEmailErro(null);
        });
      });
    }
    if (celular) {
      eventos.forEach((evento) => {
        celular.addEventListener(evento, () => {
          setMsgCelularErro(null);
        });
      });
    }
  }, []);

  // Enviar mensagem
  function enviar_dados(nome: string, valor: string, email: string, tel: string) {
    const ddd = tel.match(/(\d+)/gm);

    const ddd_n = ddd[1];
    const numero = `${ddd[2]}-${ddd[3]}`;
    const numero_anapro = `${ddd[2]}${ddd[3]}`;
    const ramal = ddd[0];

    // Corpo do body da requisicao com os dados
    // const body = anapro_body(nome, email, ddd_n, numero, ramal);

    const origin =
      typeof window !== "undefined" && window.location.origin ? window.location.origin.replace('""', "") : "";

    const up_crm_body = getUpCrmBody({
      first_name: nome,
      email: email,
      phone: tel,
      cellphone: tel,
      feedback: origin,
      description: "Simulação de financiamento",
      interaction_type_id: 1,
    });

    postInteractionOpportunity(up_crm_body, process.env.UP_CRM_KEY)
      .then((upCrm) => {})
      .finally(() => {
        // Enviar dados para o GTM
        dataPush(
          "lead_gerado_produto",
          "simulacao_financiamento",
          `${origin + router.pathname}`,
          true,
          100,
          `${origin + router.pathname}`,
          "Vita Parque",
          "Ficha de produto"
        );
        Swal.fire({
          text: "Obrigado !",
          icon: "success",
          confirmButtonText: "OK",
          allowOutsideClick: false,
        }).then((result) => {
          if (result.isConfirmed) {
            setLoading(true);
            const anapro_url_formulario = anaproURLFormulario(
              nome,
              email,
              ddd_n,
              numero_anapro,
              "Olá Gostaria de Informações sobre o empreendimento Vita Parque"
            );

            window.location.href = anapro_url_formulario;
          }
        });

        setLoading(false);
      });
  }

  return (
    <div className={styles.modalSimuleFinanciamento}>
      <div className={styles.modalSimuleFinanciamento__content}>
        {etapa === 0 || etapa === 3 ? (
          <>{children}</>
        ) : (
          <button
            className={modalStyles.c_modal__closeVoltar}
            onClick={() => {
              // Limpar os campos da etapa atual ao clicar em voltar
              if (etapa === 1) {
                setNome(null);
                setMsgNomeErro(null);
              } else if (etapa === 2) {
                setValor(null);
                setMsgValorErro(null);
                setFgts(null);
                setMsgFgtsErro(null);
                setEntrada(null);
                setMsgEntradaErro(null);
              }
              setEtapa(etapa - 1);
            }}>
            <img src="images/icon-voltar.svg" alt="" width="18px" height="16px" />
            Voltar
          </button>
        )}

        <form action="#" onSubmit={(event: any) => event.preventDefault()} ref={formRef}>
          {/* Etapa 1 */}
          {etapa === 0 ? (
            <>
              <Titulo>
                <strong>Simule Financiamento</strong>
              </Titulo>
              <p className={styles.modalSimuleFinanciamento__desc}>
                Para iniciarmos, informe abaixo o seu nome completo.
              </p>

              <CInput type="text" name="nome" placeholder="Nome Completo" />

              {msgNomeErro ? <p className={styles.modalSimuleFinanciamento__msgErro}>{msgNomeErro}</p> : null}

              <Button
                type="azul"
                width="148px"
                height="51px"
                callback={() => {
                  const nome = formRef.current.nome.value;
                  if (nome !== "") {
                    setNome(nome);
                    setEtapa(etapa + 1);
                  } else {
                    setMsgNomeErro("Informe o seu nome completo");
                  }
                }}>
                CONTINUAR
              </Button>
            </>
          ) : etapa === 1 ? (
            <>
              <Titulo>
                <strong>Simule Financiamento</strong>
              </Titulo>
              <p className={styles.modalSimuleFinanciamento__desc}>{nome}, qual o valor total que deseja financiar?</p>

              <label htmlFor="valor" className={styles.modalSimuleFinanciamento__labelValor}>
                Valor do financiamento
              </label>

              <CInput type="text" name="valor" placeholder={null} maxLength={20} defaultValue="230.000" />

              {msgValorErro ? <p className={styles.modalSimuleFinanciamento__msgErro}>{msgValorErro}</p> : null}

              <label htmlFor="fgts" className={styles.modalSimuleFinanciamento__labelValor}>
                Valor do FGTS
              </label>

              <CInput name="fgts" type="text" placeholder="" maxLength={20} />

              {msgFgtsErro ? <p className={styles.modalSimuleFinanciamento__msgErro}>{msgFgtsErro}</p> : null}

              <label htmlFor="entrada" className={styles.modalSimuleFinanciamento__labelValor}>
                Valor disponível para Entrada
              </label>

              <CInput name="entrada" type="text" placeholder="" maxLength={20} />

              {msgEntradaErro ? <p className={styles.modalSimuleFinanciamento__msgErro}>{msgEntradaErro}</p> : null}

              <Button
                type="azul"
                width="148px"
                height="51px"
                callback={() => {
                  const valor = formRef.current.valor.value;

                  if (valor == "") {
                    setMsgValorErro("Informe o valor");
                    return false;
                  }

                  const fgts = formRef.current.fgts.value;

                  if (fgts == "") {
                    setMsgFgtsErro("Informe o valor do FGTS");
                    return false;
                  }

                  const entrada = formRef.current.entrada.value;

                  if (entrada == "") {
                    setMsgEntradaErro("Informe o valor da Entrada");
                    return false;
                  }

                  setValor(valor);
                  setFgts(fgts);
                  setEntrada(entrada);

                  setEtapa(etapa + 1);
                }}>
                CONTINUAR
              </Button>
            </>
          ) : etapa === 2 ? (
            <>
              <br />
              <Titulo>
                <strong>Simule Financiamento</strong>
              </Titulo>
              <p className={styles.modalSimuleFinanciamento__desc}>
                {nome}, para finalizar, informe seu e-mail e celular.
              </p>

              <CInput type="text" name="email" placeholder="Seu melhor e-mail" />

              {msgEmailErro ? <p className={styles.modalSimuleFinanciamento__msgErro}>{msgEmailErro}</p> : null}

              <CInput type="text" name="tel" placeholder="Celular" />

              {msgCelularErro ? <p className={styles.modalSimuleFinanciamento__msgErro}>{msgCelularErro}</p> : null}

              {loading ? (
                <Button type="azul" width="124px" height="51px">
                  Aguarde...
                </Button>
              ) : (
                <Button
                  type="azul"
                  width="124px"
                  height="51px"
                  submit={true}
                  callback={() => {
                    setLoading(true);

                    const email = formRef.current.email.value;
                    const celular = formRef.current.tel.value;

                    if (email === "") {
                      setMsgEmailErro("Informe o e-mail");
                    } else if (!validateEmail(email)) {
                      setMsgEmailErro("E-mail inválido");
                    } else if (celular === "") {
                      setMsgCelularErro("Informe o celular");
                    } else if (!validateCel(celular)) {
                      setMsgCelularErro("Celular inválido");
                    } else {
                      setNome(nome);
                      setValor(valor);
                      setEmail(email);
                      setCelular(celular);
                    }

                    if (nome && valor && fgts && entrada && email && celular && validateCel(celular)) {
                      enviar_dados(nome, valor, email, celular);
                    }
                  }}>
                  SIMULAR
                </Button>
              )}
            </>
          ) : etapa === 4 ? (
            <>
              {valorFinal ? (
                <>
                  <Titulo>
                    <strong>SIMULAÇÃO</strong>
                  </Titulo>
                  <p className={styles.modalSimuleFinanciamento__desc}>
                    <span style={{ display: "block", marginTop: "12px" }}>OBRIGADO !</span>
                    {nome}, confira a simulação
                  </p>

                  <div className={styles.modalSimuleFinanciamento__valorFinal}>
                    <span className={styles.modalSimuleFinanciamento__labelValor}>Valor do financiamento</span>

                    <div className={styles.modalSimuleFinanciamento__valorFinal_valor}>
                      <span>R$</span>
                      <strong>198</strong>
                      <span>.000</span>

                      <button
                        onClick={() => {
                          setEtapa(0);
                        }}>
                        <img src="images/icon-voltar-financiamento.svg" width="16px" height="16px" alt="" />
                      </button>
                    </div>
                  </div>

                  {/* Lista de parcelas */}
                  <ul className={styles.modalSimuleFinanciamento__parcelas}>
                    <li>
                      <strong>36 parcelas</strong>
                      <span>R$ 998</span>
                    </li>
                    <li>
                      <strong>24 parcelas</strong>
                      <span>R$ 1.654</span>
                    </li>
                    <li>
                      <strong>12 parcelas</strong>
                      <span>R$ 2.369</span>
                    </li>
                  </ul>
                  {/* Lista de parcelas */}

                  <div className={styles.modalSimuleFinanciamento__duvidas}>
                    <p>Tire suas dúvidas!</p>
                    <a href="#">Atendimento online</a>
                  </div>
                </>
              ) : (
                <p className={styles.modalSimuleFinanciamento__msgErro} style={{ marginTop: "60px" }}>
                  {MsgErroValorFinal}
                </p>
              )}
            </>
          ) : null}
        </form>
      </div>

      <div className={styles.modalSimuleFinanciamento__footer}></div>
    </div>
  );
}
