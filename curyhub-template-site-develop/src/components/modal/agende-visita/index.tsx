import { Dispatch, SetStateAction, useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/router";

import { styled } from "../../../../theme/stitches.config";

// Styled Components
import { ButtonStyled } from "../../form/button";
import { LabelInputStyled, SelectStyled } from "../../form/input";
import { ModalContentStyled, ModalFooterStyled, ModalHeaderStyled, ModalStyled } from "..";
import { TituloStyled } from "../../util/titulo";
import { StrongStyled } from "../../elements/strong";
import { InputStyled } from "../../form/input";
import { IconLeftStyled } from "../../icons";

// Helpers
import { ThemeHelper } from "../../../helpers/theme";
import { filter_component_by_name, get_component_styles } from "../../../helpers/theme/theme-component";

interface IAgendeVisita {
  state: Dispatch<SetStateAction<boolean>>;
  section: ThemeSection;
  corretor_data: Corretor;
}

const SelectWrapper = styled("div", {
  display: "flex",
  gap: "40px",

  "@mobile": {
    flexWrap: "wrap",
    justifyContent: "center",
  },
});

const FormStyled = styled("form", {
  maxWidth: "400px",
  display: "flex",
  flexDirection: "column",
  margin: "0 auto",
});

const DescStyled = styled("p", {
  fontSize: "$xmd",
  fontWeight: "$light",
  letterSpacing: "0",
  color: "$white",

  "& strong": {
    fontWeight: "$bold",
  },
});

export default function ModalAgendeVisita({ state, section, corretor_data }: IAgendeVisita) {
  const router = useRouter();

  const formRef: any = useRef(null);

  const [dia, setDia] = useState("");
  const [msgDiaErro, setMsgDiaErro] = useState<any>(null);

  const [mes, setMes] = useState("");
  const [msgMesErro, setMsgMesErro] = useState<any>(null);

  const [hora, setHora] = useState("");
  const [msgHoraErro, setMsgHoraErro] = useState<any>(null);

  useEffect(() => {
    const dia = formRef.current.dia ? formRef.current.dia : null;
    const mes = formRef.current.mes ? formRef.current.mes : null;
    const hora = formRef.current.hora ? formRef.current.hora : null;

    const eventos = ["change", "keyup"];

    // Remove a mensagem de erro ao adicionar um valor
    if (dia) {
      eventos.forEach((evento) => {
        dia.addEventListener(evento, () => {
          setMsgDiaErro(null);
        });
      });
    }
    if (mes) {
      eventos.forEach((evento) => {
        mes.addEventListener(evento, () => {
          setMsgMesErro(null);
        });
      });
    }

    if (hora) {
      eventos.forEach((evento) => {
        hora.addEventListener(evento, () => {
          setMsgHoraErro(null);
        });
      });
    }
  }, []);

  function enviar_dados(dia: string, mes: string, hora: string) {
    const agendaDia = dia;
    const agendaMes = mes;
    const agendaHora = hora;

    // Corpo do body da requisicao com os dados
  }

  // Components
  const active_components = ThemeHelper.getActiveComponents(section.componentes);

  // NavLink
  const div_modal_header = useMemo(() => filter_component_by_name(active_components, "modal-header"), []);
  const get_modal_header_styles = get_component_styles(div_modal_header);

  // Titulo header
  const div_modal_header_title = useMemo(() => filter_component_by_name(active_components, "modal-header-title"), []);
  const get_modal_header_title_styles = get_component_styles(div_modal_header_title);

  // Titulo form
  const div_form_title = useMemo(() => filter_component_by_name(active_components, "modal-form-title"), []);
  const get_form_title_styles = get_component_styles(div_form_title);

  // Botao enviar
  const div_btn_enviar = useMemo(() => filter_component_by_name(active_components, "button-enviar"), []);
  const get_btn_enviar_styles = get_component_styles(div_btn_enviar);

  // Botao voltar
  const div_btn_voltar = useMemo(() => filter_component_by_name(active_components, "button-voltar"), []);
  const get_btn_voltar_styles = get_component_styles(div_btn_voltar);

  // Footer
  const div_footer = useMemo(() => filter_component_by_name(active_components, "footer"), []);
  const get_footer_styles = get_component_styles(div_footer);

  return (
    <>
      <ModalStyled>
        <ModalHeaderStyled css={{ ...get_modal_header_styles, textAlign: "center" }}>
          <TituloStyled css={{ ...get_modal_header_title_styles }}>Agende uma visita</TituloStyled>
        </ModalHeaderStyled>

        <ModalContentStyled>
          <ButtonStyled
            button={"voltar"}
            onClick={() => {
              state(false);
              document.documentElement.style.overflowY = "initial";
            }}
            css={{ ...get_btn_voltar_styles, marginLeft: "-9px" }}
          >
            <IconLeftStyled fontSize={24} />
            <span style={{ fontWeight: "400" }}>Voltar</span>
          </ButtonStyled>
          <FormStyled ref={formRef}>
            <TituloStyled css={{ ...get_form_title_styles, fontWeight: "700", fontSize: "18px", marginBottom: "16px" }}>
              Escolha uma data
            </TituloStyled>

            <SelectWrapper>
              <LabelInputStyled htmlFor="dia" variant={"data"}>
                <StrongStyled style={{ fontWeight: "500", fontSize: "18px" }}>Dia</StrongStyled>
                <SelectStyled id="dia" name="dia">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                  <option value="15">15</option>
                  <option value="16">16</option>
                  <option value="17">17</option>
                  <option value="18">18</option>
                  <option value="19">19</option>
                  <option value="20">20</option>
                  <option value="21">21</option>
                  <option value="22">22</option>
                  <option value="23">23</option>
                  <option value="24">24</option>
                  <option value="25">25</option>
                  <option value="26">26</option>
                  <option value="27">27</option>
                  <option value="28">28</option>
                  <option value="29">29</option>
                  <option value="30">30</option>
                  <option value="31">31</option>
                </SelectStyled>
              </LabelInputStyled>

              <LabelInputStyled htmlFor="mes" variant={"data"}>
                <StrongStyled style={{ fontWeight: "500", fontSize: "18px" }}>Mês</StrongStyled>
                <SelectStyled id="mes" name="mes">
                  <option value="janeiro">JAN</option>
                  <option value="fevereiro">FEV</option>
                  <option value="março">MAR</option>
                  <option value="abril">ABR</option>
                  <option value="maio">MAI</option>
                  <option value="junho">JUN</option>
                  <option value="julho">JUL</option>
                  <option value="agosto">AGO</option>
                  <option value="setembro">SET</option>
                  <option value="outubro">OUT</option>
                  <option value="novembro">NOV</option>
                  <option value="dezembro">DEZ</option>
                </SelectStyled>
              </LabelInputStyled>

              <LabelInputStyled htmlFor="hora" variant={"data"}>
                <StrongStyled style={{ fontWeight: "500", fontSize: "18px" }}>Hora</StrongStyled>
                <SelectStyled id="hora" name="hora">
                  <option value="0">00:00</option>
                  <option value="1">01:00</option>
                  <option value="2">02:00</option>
                  <option value="3">03:00</option>
                  <option value="4">04:00</option>
                  <option value="5">05:00</option>
                  <option value="6">06:00</option>
                  <option value="7">07:00</option>
                  <option value="8">08:00</option>
                  <option value="9">09:00</option>
                  <option value="10">10:00</option>
                  <option value="11">11:00</option>
                  <option value="12">12:00</option>
                  <option value="13">13:00</option>
                  <option value="14">14:00</option>
                  <option value="15">15:00</option>
                  <option value="16">16:00</option>
                  <option value="17">17:00</option>
                  <option value="18">18:00</option>
                  <option value="19">19:00</option>
                  <option value="20">20:00</option>
                  <option value="21">21:00</option>
                  <option value="22">22:00</option>
                  <option value="23">23:00</option>
                </SelectStyled>
              </LabelInputStyled>
            </SelectWrapper>

            <TituloStyled
              css={{
                ...get_form_title_styles,
                fontWeight: "700",
                fontSize: "18px",
                marginBottom: "16px",
                marginTop: "40px",
              }}
            >
              Qual a finalidade do imóvel que você procura?
            </TituloStyled>

            <SelectWrapper style={{ marginBottom: "51px" }}>
              <LabelInputStyled htmlFor="para-morar" variant={"radio"}>
                <InputStyled type="radio" name="para-morar" id="para-morar" variant={"radio"} />
                <StrongStyled style={{ fontWeight: "500", fontSize: "18px" }}>Para morar</StrongStyled>
              </LabelInputStyled>

              <LabelInputStyled htmlFor="para-investir" variant={"radio"}>
                <InputStyled type="radio" name="para-investir" id="para-investir" variant={"radio"} />
                <StrongStyled style={{ fontWeight: "500", fontSize: "18px" }}>Para investir</StrongStyled>
              </LabelInputStyled>
            </SelectWrapper>

            <ButtonStyled
              button={"agendeVisita"}
              onClick={() => enviar_dados(dia, mes, hora)}
              css={{ ...get_btn_enviar_styles, width: "133px", alignSelf: "center" }}
            >
              AGENDAR
            </ButtonStyled>
          </FormStyled>
        </ModalContentStyled>

        <ModalFooterStyled css={{ ...get_footer_styles, display: "flex", alignItems: "center", padding: "0" }}>
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              gap: "20px",
              maxWidth: "1360px",
              margin: "0 auto",
              padding: "0 20px",
            }}
          >
            <TituloStyled style={{ color: "white", fontSize: "18px" }}>Ou ligue a qualquer momento</TituloStyled>

            <DescStyled>
              (11) <strong>99876-5432</strong>
            </DescStyled>
          </div>
        </ModalFooterStyled>
      </ModalStyled>
    </>
  );
}
