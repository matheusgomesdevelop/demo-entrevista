import style from "./style.module.scss";
import { ThemeHelper } from "../../../../helpers/theme";
import {
  NoStyleWrapper,
  SectionWrapper,
} from "../../../structure";
import { useMemo } from "react";
import {
  filter_component_by_name,
  get_component_styles,
} from "../../../../helpers/theme/theme-component";
import {
  config,
  styled,
} from "../../../../../theme/stitches.config";
import { DepoimentText } from "../principal";
import { CardDepoimentoComponent } from "../components/Card";
import { depoiments } from "../depoimento";
import { ImageComponent } from "../components/Image";

const clientDepoiemnts = [
  ...depoiments,
  {
    city: "Salvador",
    district: "BA",
    depoiment: "Foi um sonho realizado e o consultor imóbiliario realizou um ótimo trabalho",
    name: "Marco Antunes",
    avatar: "/images/user2.png",
    occupation: "Designer",
    id: 4,
  },
  {
    city: "Salvador",
    district: "BA",
    depoiment: "Foi um sonho realizado e o consultor imóbiliario realizou um ótimo trabalho",
    name: "Rebeca Werner",
    avatar: "/images/user3.png",
    occupation: "Designer",
    id: 5,
  },
  {
    city: "Salvador",
    district: "BA",
    depoiment: "Foi um sonho realizado e o consultor imóbiliario realizou um ótimo trabalho",
    name: "Bernetta Guitierrez",
    avatar: "/images/user1.png",
    occupation: "Designer",
    id: 6,
  },
]

const {
  white,
  primaria,
  secundaria,
  apoio,
  h1secundario,
  h2,
  h3,
} = config.theme.colors;

interface IDepoimentosSectionProps {
  section: ThemeSection;
  corretor_data: Corretor;
}

const Section = styled("div", {
  alignContent: "center",
  display: "flex",
  justifyContent: "center",
  background: primaria,
  width: "100%",

  variants: {
    paddingSize: {
      mobile: {
        padding: "40px 40px 32px 40px",
      },
      desktop: {
        padding: "44px 50px",
      },
    },
    aligment: {
      vertical: {
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
      },
      horizontal: {
        alignContent: "center",
        display: "flex",
      },
    },
  },
});

export const DepoimentosSection = ({
  corretor_data,
  section,
}: IDepoimentosSectionProps) => {
  const active_components = ThemeHelper.getActiveComponents(
    section.componentes
  );

  // Title Container
  const section_title_container = useMemo(
    () =>
      filter_component_by_name(
        active_components,
        "titulo-secao-container"
      ),
    []
  );
  const get_title_container_styles = get_component_styles(
    section_title_container
  );

  // Title
  const section_title = useMemo(
    () =>
      filter_component_by_name(
        active_components,
        "titulo-secao"
      ),
    []
  );
  const get_title_styles =
    get_component_styles(section_title);

  // Depoiments Container
  const section_depoiments_container = useMemo(
    () =>
      filter_component_by_name(
        active_components,
        "depoiments-container"
      ),
    []
  );
  const get_depoiments_container_styles =
    get_component_styles(section_depoiments_container);

  // Depoiments Header
  const section_depoiments_header = useMemo(
    () =>
      filter_component_by_name(
        active_components,
        "depoiments-header"
      ),
    []
  );
  const get_depoiments_header_styles = get_component_styles(
    section_depoiments_header
  );

  // Depoiments Header Title
  const section_depoiments_header_title = useMemo(
    () =>
      filter_component_by_name(
        active_components,
        "depoiments-header-title"
      ),
    []
  );
  const get_depoiments_header_title_styles =
    get_component_styles(section_depoiments_header_title);

  // Image
  const div_image = useMemo(
    () =>
      filter_component_by_name(
        active_components,
        "image-secao"
      ),
    []
  );
  const get_image_styles = get_component_styles(div_image);

  // User Name
  const div_user_name = useMemo(
    () =>
      filter_component_by_name(
        active_components,
        "user-name-section"
      ),
    []
  );
  const get_user_name_styles =
    get_component_styles(div_user_name);

  // User Occupation
  const div_user_occupation = useMemo(
    () =>
      filter_component_by_name(
        active_components,
        "user-occupation-section"
      ),
    []
  );
  const get_user_occupation_styles = get_component_styles(
    div_user_occupation
  );

  // Depoiment
  const user_depoiment = useMemo(
    () =>
      filter_component_by_name(
        active_components,
        "user-depoiment-section"
      ),
    []
  );
  const get_depoiment_styles =
    get_component_styles(user_depoiment);

  // Address
  const user_address = useMemo(
    () =>
      filter_component_by_name(
        active_components,
        "user-address-section"
      ),
    []
  );
  const get_address_styles =
    get_component_styles(user_address);

  return (
    <NoStyleWrapper
      size={{ "@initial": "noFlex" }}
      css={{ ...section.styles }}
      className={style.container}>
      <Section
        paddingSize={{
          "@initial": "mobile",
          "@desktop": "desktop",
        }}
        css={{ ...get_title_container_styles }}>
        <DepoimentText
          size={{ "@initial": "title" }}
          css={{ ...get_title_styles }}>
          Depoimentos dos clientes
        </DepoimentText>
      </Section>
      <Section
        paddingSize={{
          "@initial": "mobile",
          "@desktop": "desktop",
        }}
        aligment={{ "@initial": "vertical" }}
        css={{ ...get_depoiments_container_styles }}
        className={style.container__depoiments}>
        <SectionWrapper
          size={{ "@initial": "sm" }}
          css={{ ...get_depoiments_header_styles }}>
          <DepoimentText
            size={{ "@initial": "mdBold" }}
            css={{ ...get_depoiments_header_title_styles }}
            className={
              style.container__depoiments_header_title
            }>
            Lorem ipsum dolor sit amet consectetur. Pulvinar
            purus diam purus vel in a pharetra gravida.
            Ornare amet amet ornare sagittis arcu.
          </DepoimentText>
        </SectionWrapper>
        <SectionWrapper size={{ "@initial": "default" }}>
          <div className={style.container__depoiments_container}>
            {clientDepoiemnts.map((depoiment) => (
              <CardDepoimentoComponent
                key={`customer-depoiment-${depoiment.name}`}>
                <div
                  className={
                    style.container__depoiments_card
                  }>
                  <ImageComponent
                    css={{ ...get_image_styles }}
                    src={depoiment.avatar}
                    size={{ "@initial": "sm" }}
                  />
                  <div
                    className={
                      style.container__depoiments_card_text
                    }>
                    <DepoimentText
                      size={{ "@initial": "md" }}
                      css={{ ...get_user_name_styles }}>
                      {depoiment.name}
                    </DepoimentText>
                    <DepoimentText
                      size={{ "@initial": "xsmBold" }}
                      css={{ ...get_user_occupation_styles }}>
                      {depoiment.occupation}
                    </DepoimentText>
                  </div>
                </div>
                <div
                  className={
                    style.container__depoiments_card_body
                  }>
                  <img
                    src="/images/message.svg"
                    alt="side image"
                  />
                  <div
                    className={
                      style.container__depoiments_card_body_text
                    }>
                    <DepoimentText
                      size={{ "@initial": "sm" }}
                      css={{ ...get_depoiment_styles }}>
                      {depoiment.depoiment}
                    </DepoimentText>
                    <DepoimentText
                      size={{ "@initial": "xsmBold" }}
                      css={{ ...get_address_styles }}>
                      {depoiment.city} - {depoiment.district}
                    </DepoimentText>
                  </div>
                </div>
              </CardDepoimentoComponent>
            ))}
          </div>
        </SectionWrapper>
      </Section>
    </NoStyleWrapper>
  );
};
