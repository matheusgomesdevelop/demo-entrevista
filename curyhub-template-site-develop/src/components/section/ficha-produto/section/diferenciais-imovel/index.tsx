import { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/router";

import { styled } from "../../../../../../theme/stitches.config";

// Modal
import Modal from "../../../../modal";
import ModalDiferenciaisImoveis from "../../../../modal/diferenciais-imoveis";

// Styled Components
import { TituloStyled } from "../../../../util/titulo";
import { SectionContentStyled } from "../../../../structure";
import { ListChildStyled, ListStyled } from "../../../../list";
import { ButtonStyled } from "../../../../form/button";
import { IconArrowRightStyled, IconCheckStyled } from "../../../../icons";

// Helpers
import { dif_imovel_list } from "./list";
import { ThemeHelper } from "../../../../../helpers/theme";
import { filter_component_by_name, get_component_styles } from "../../../../../helpers/theme/theme-component";

const DiferenciaisLazerStyled = styled("div", {
  display: "flex",
  width: "100%",
  background: "$primaria",
  position: "relative",
  margin: "60px auto",
  padding: "20px 0 40px 0",

  "@mobile": {
    marginTop: "32px",
  },
});

interface IDiferenciaisImovel {
  section: ThemeSection;
  corretor_data: Corretor;
}

export default function DiferenciaisImovel({ section, corretor_data }: IDiferenciaisImovel) {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const router = useRouter();

  const nome_imovel = router.query.imovel;

  useEffect(() => {
    // Fechar o modal ao apertar a tecla 'ESC'
    function fechar(event: any) {
      if (event.key === "Escape") {
        setOpenModal(false);
        document.documentElement.style.overflowY = "initial";
      }
    }

    openModal ? window.addEventListener("keyup", fechar) : null;
  }, [openModal]);

  // Components
  const active_components = ThemeHelper.getActiveComponents(section.componentes);

  // Titulo
  const div_titulo = useMemo(() => filter_component_by_name(active_components, "titulo-secao"), []);
  const get_titulo_styles = get_component_styles(div_titulo);

  // Icone dif
  const div_icone_dif = useMemo(() => filter_component_by_name(active_components, "icone-diferencial"), []);
  const get_icone_dif_styles = get_component_styles(div_icone_dif);

  // Botao
  const div_botao = useMemo(() => filter_component_by_name(active_components, "botao"), []);
  const get_botao_styles = get_component_styles(div_botao);

  return (
    <>
      <DiferenciaisLazerStyled css={{ ...section.styles, marginTop: "0", marginBottom: "0" }}>
        <SectionContentStyled style={{ margin: "0 auto" }}>
          <TituloStyled css={{ ...get_titulo_styles }}>Diferenciais do {nome_imovel}</TituloStyled>

          <ListStyled>
            {dif_imovel_list.map((dif, key) => {
              return (
                <ListChildStyled key={key}>
                  <IconCheckStyled width={32} height={28} css={{ ...get_icone_dif_styles }} />

                  <p style={{ color: "white" }}>{dif.texto}</p>
                </ListChildStyled>
              );
            })}
          </ListStyled>

          <div style={{ maxWidth: "380px", display: "flex", justifyContent: "flex-end" }}>
            <ButtonStyled
              button={"verTodos"}
              onClick={() => {
                setOpenModal(true);
                document.documentElement.style.overflowY = "hidden";
              }}
              css={{ ...get_botao_styles, cursor: "pointer" }}
            >
              <IconArrowRightStyled fontSize={24} />
              <span style={{ textDecoration: "underline", marginLeft: "12px" }}>veja mais</span>
            </ButtonStyled>
          </div>
        </SectionContentStyled>
      </DiferenciaisLazerStyled>

      {/* Modal Diferenciais Imoveis */}
      <Modal open={openModal}>
        <ModalDiferenciaisImoveis onClose={setOpenModal} section={section} corretor_data={corretor_data} />
      </Modal>
      {/* Modal Diferenciais Imoveis */}
    </>
  );
}
