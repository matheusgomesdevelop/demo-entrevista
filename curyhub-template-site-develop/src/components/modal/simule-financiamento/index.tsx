import { useState, useRef, useEffect, Dispatch, SetStateAction, useMemo } from "react";
import { useRouter } from "next/router";

import { styled } from "../../../../theme/stitches.config";

// Components
import Button, { ButtonStyled } from "../../form/button";
import styles from "./index.module.scss";

// Styled components
import { TituloStyled } from "../../util/titulo";
import { ModalContentStyled, ModalFooterStyled, ModalStyled } from "..";
import { IconLeftStyled } from "../../icons";
import { InputLabelMessage, InputStyled, InputStyledMessage } from "../../form/input";

// Helpers
import { validateCel, validateEmail } from "../../../validation/regex";
import { ThemeHelper } from "../../../helpers/theme";
import { filter_component_by_name, get_component_styles } from "../../../helpers/theme/theme-component";

export const DescStyled = styled("p", {
  fontSize: "$xmd",
  fontWeight: "$light",
  letterSpacing: "0",
  color: "$highConstraText",

  "& strong": {
    fontWeight: "$bold",
  },
});

export const FormStyled = styled("form", {
  width: "100%",
  maxWidth: "335px",
  display: "flex",
  flexDirection: "column",
  margin: "0 auto",

  "& input": {
    maxWidth: "100%",
  },
});

const VoltarWrapperStyled = styled("div", {
  width: "100%",
  maxWidth: "335px",
  margin: "0 auto",
});

interface ISimule {
  state: Dispatch<SetStateAction<boolean>>;
  section: ThemeSection;
  corretor_data: Corretor;
}

export default function ModalSimuleFinanciamento({ state, section, corretor_data }: ISimule) {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const formRef: any = useRef(null);

  const [etapa, setEtapa] = useState(0);

  // Etapa 1 - Nome
  const [nome, setNome] = useState<any>(null);
  const [msgNomeErro, setMsgNomeErro] = useState<any>(null);

  // Etapa 2 - Valor financiamento
  const [valor, setValor] = useState<any>(null);
  const [msgValorErro, setMsgValorErro] = useState<any>(null);

  const [fgts, setFgts] = useState<any>(null);
  const [msgFgtsErro, setMsgFgtsErro] = useState<any>(null);

  const [entrada, setEntrada] = useState<any>(null);
  const [msgEntradaErro, setMsgEntradaErro] = useState<any>(null);

  // Etapa 3 - Email e celular
  const [email, setEmail] = useState<any>(null);
  const [msgEmailErro, setMsgEmailErro] = useState<any>(null);

  const [celular, setCelular] = useState<any>(null);
  const [msgCelularErro, setMsgCelularErro] = useState<any>(null);

  // Fetch valor final
  const [valorFinal, setValorFinal] = useState<any>(null);
  const [MsgErroValorFinal, setMsgErroValorFinal] = useState<any>(null);

  // Mensagem de erro no valor final

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

  // para evitar temporariamente DDIs russos
  function validateDDI(value: any) {
    const ddi = value.substr(1, 2);

    if (ddi == "83" || ddi == "87" || ddi == "89") {
      return false;
    }

    return true;
  }

  // Enviar mensagem
  function enviar_dados(nome: string, valor: string, email: string, tel: string) {
    const ddd: any = tel.match(/(\d+)/gm);

    const ddd_n = ddd[1];
    const numero = `${ddd[2]}-${ddd[3]}`;
    const numero_anapro = `${ddd[2]}${ddd[3]}`;
    const ramal = ddd[0];

    // Corpo do body da requisicao com os dados
  }

  // Components
  const active_components = ThemeHelper.getActiveComponents(section.componentes);

  // Footer
  const div_footer = useMemo(() => filter_component_by_name(active_components, "footer"), []);
  const get_footer_styles = get_component_styles(div_footer);

  // Enviar
  const div_btn_enviar = useMemo(() => filter_component_by_name(active_components, "button-enviar"), []);
  const get_btn_enviar_styles = get_component_styles(div_btn_enviar);

  // Titulo form
  const div_title_form = useMemo(() => filter_component_by_name(active_components, "title-form"), []);
  const get_title_form_styles = get_component_styles(div_title_form);

  return (
    <ModalStyled style={{ flexDirection: "column", justifyContent: "center", paddingTop: "100px" }}>
      <ModalContentStyled style={{ alignSelf: "center", height: "100%", marginTop: "-200px" }}>
        {etapa === 0 || etapa === 3 ? (
          <VoltarWrapperStyled>
            <ButtonStyled
              button={"voltar"}
              onClick={() => {
                setEtapa(0);
                state(false);
                document.documentElement.style.overflowY = "initial";
              }}
              style={{ marginLeft: "-9px" }}
            >
              <IconLeftStyled fontSize={24} />
              <span style={{ fontWeight: "400" }}>Voltar</span>
            </ButtonStyled>
          </VoltarWrapperStyled>
        ) : (
          <ButtonStyled
            button={"voltar"}
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
            }}
            style={{ marginLeft: "-9px" }}
          >
            <IconLeftStyled fontSize={24} />
            <span style={{ fontWeight: "400" }}>Voltar</span>
          </ButtonStyled>
        )}

        <FormStyled action="#" onSubmit={(event: any) => event.preventDefault()} ref={formRef}>
          {/* Etapa 1 */}
          {etapa === 0 ? (
            <VoltarWrapperStyled>
              <TituloStyled css={{ ...get_title_form_styles }}>Simule Financiamento</TituloStyled>
              <DescStyled style={{ marginBottom: "50px", marginTop: "15px" }}>
                Para iniciarmos, informe abaixo o seu nome completo.
              </DescStyled>

              <InputStyled type="text" name="nome" placeholder="Nome Completo" />

              {msgNomeErro ? <InputStyledMessage variant={"error"}>{msgNomeErro}</InputStyledMessage> : null}

              <ButtonStyled
                button={"agendeVisita"}
                css={{
                  ...get_btn_enviar_styles,
                  width: "136px",
                  fontSize: "16px",
                  alignSelf: "flex-end",
                  marginTop: "40px",
                }}
                onClick={() => {
                  const nome = formRef.current.nome.value;
                  if (nome !== "") {
                    setNome(nome);
                    setEtapa(etapa + 1);
                  } else {
                    setMsgNomeErro("Informe o seu nome completo");
                  }
                }}
              >
                Continuar
              </ButtonStyled>
            </VoltarWrapperStyled>
          ) : etapa === 1 ? (
            <VoltarWrapperStyled>
              <TituloStyled>Simule Financiamento</TituloStyled>
              <DescStyled style={{ marginBottom: "50px", marginTop: "15px" }}>
                {nome}, qual o valor total que deseja financiar?
              </DescStyled>

              <InputLabelMessage htmlFor="valor">Valor do financiamento</InputLabelMessage>
              <InputStyled type="text" name="valor" placeholder={""} maxLength={20} defaultValue="230.000" />
              {msgValorErro ? <InputStyledMessage variant={"error"}>{msgValorErro}</InputStyledMessage> : null}
              <InputLabelMessage htmlFor="fgts">Valor do FGTS</InputLabelMessage>
              <InputStyled name="fgts" type="text" placeholder="" maxLength={20} />
              {msgFgtsErro ? <InputStyledMessage variant={"error"}>{msgFgtsErro}</InputStyledMessage> : null}
              <InputLabelMessage htmlFor="entrada">Valor disponível para Entrada</InputLabelMessage>
              <InputStyled name="entrada" type="text" placeholder="" maxLength={20} />
              {msgEntradaErro ? <InputStyledMessage variant={"error"}>{msgEntradaErro}</InputStyledMessage> : null}

              <ButtonStyled
                button={"agendeVisita"}
                style={{ width: "136px", fontSize: "16px", alignSelf: "flex-end", marginTop: "40px" }}
                onClick={() => {
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
                }}
              >
                Continuar
              </ButtonStyled>
            </VoltarWrapperStyled>
          ) : etapa === 2 ? (
            <VoltarWrapperStyled>
              <strong>Simule Financiamento</strong>
              <p className={styles.modalSimuleFinanciamento__desc}>
                {nome}, para finalizar, informe seu e-mail e celular.
              </p>

              <InputStyled type="text" name="email" placeholder="Seu melhor e-mail" />

              {msgEmailErro ? <p className={styles.modalSimuleFinanciamento__msgErro}>{msgEmailErro}</p> : null}

              <InputStyled type="text" name="tel" placeholder="Celular" />

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
                    } else if (!validateDDI(celular)) {
                      setMsgCelularErro("DDI inválido");
                    } else {
                      setNome(nome);
                      setValor(valor);
                      setEmail(email);
                      setCelular(celular);
                    }

                    if (
                      nome &&
                      valor &&
                      fgts &&
                      entrada &&
                      email &&
                      celular &&
                      validateCel(celular) &&
                      validateDDI(celular)
                    ) {
                      setLoading(true);
                      enviar_dados(nome, valor, email, celular);
                    }
                  }}
                >
                  SIMULAR
                </Button>
              )}
            </VoltarWrapperStyled>
          ) : etapa === 4 ? (
            <>
              {valorFinal ? (
                <VoltarWrapperStyled>
                  <strong>SIMULAÇÃO</strong>
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

                      <ButtonStyled
                        button={"voltar"}
                        onClick={() => {
                          setEtapa(0);
                        }}
                        style={{ marginLeft: "-9px" }}
                      >
                        <IconLeftStyled fontSize={24} />
                        <span style={{ fontWeight: "400" }}>Voltar</span>
                      </ButtonStyled>
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
                </VoltarWrapperStyled>
              ) : (
                <p className={styles.modalSimuleFinanciamento__msgErro} style={{ marginTop: "60px" }}>
                  {MsgErroValorFinal}
                </p>
              )}
            </>
          ) : null}
        </FormStyled>
      </ModalContentStyled>

      <ModalFooterStyled css={{ ...get_footer_styles, position: "absolute", bottom: "0" }}>
        <ModalContentStyled style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            <TituloStyled style={{ display: "flex", flexDirection: "column", fontSize: "18px", color: "white" }}>
              Ou ligue a qualquer momento
            </TituloStyled>

            <DescStyled>
              (11) <strong>99876-5432</strong>
            </DescStyled>
          </div>
        </ModalContentStyled>
      </ModalFooterStyled>
    </ModalStyled>
  );
}
