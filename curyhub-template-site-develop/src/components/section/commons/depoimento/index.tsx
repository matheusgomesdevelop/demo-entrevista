import { useMemo } from "react";
import { NoStyleWrapper } from "../../../structure";
import { CardDepoimentoComponent } from "../components/Card";
import { ImageComponent } from "../components/Image";
import style from "./style.module.scss";
import { filter_component_by_name, get_component_styles } from "../../../../helpers/theme/theme-component";
import { ThemeHelper } from "../../../../helpers/theme";
import { DepoimentText } from "../principal";
import { LinkComponent } from "../../../link";
import { Icon } from "../../../icons";
import { useRouter } from "next/router";
import Link from "next/link";

export interface IDepoimentosProps {
  city: string;
  district: string;
  depoiment: string;
  name: string;
  avatar: string;
  occupation: string;
  id: number;
}

interface IDepoimentoProps {
  section: ThemeSection;
  corretor_data: Corretor;
}

export const depoiments: Array<IDepoimentosProps> = [
  {
    city: "Salvador",
    district: "BA",
    depoiment: "Foi um sonho realizado e o consultor imóbiliario realizou um ótimo trabalho",
    name: "Dianne Russell",
    avatar: "/images/user1.png",
    occupation: "Designer",
    id: 1,
  },
  {
    city: "Salvador",
    district: "BA",
    depoiment: "Foi um sonho realizado e o consultor imóbiliario realizou um ótimo trabalho",
    name: "Marvin McKinney",
    avatar: "/images/user2.png",
    occupation: "Produtor",
    id: 2,
  },
  {
    city: "Salvador",
    district: "BA",
    depoiment: "Foi um sonho realizado e o consultor imóbiliario realizou um ótimo trabalho",
    name: "Theresa Webb",
    avatar: "/images/user3.png",
    occupation: "Advogada",
    id: 3,
  },
];

export const Depoimento = ({ section, corretor_data }: IDepoimentoProps) => {
  const active_components = ThemeHelper.getActiveComponents(section.componentes);

  // Title
  const section_title = useMemo(() => filter_component_by_name(active_components, "section-title"), []);
  const get_title_styles = get_component_styles(section_title);

  // Link
  const section_link = useMemo(() => filter_component_by_name(active_components, "section-link"), []);
  const get_link_styles = get_component_styles(section_link);

  // Image
  const div_image = useMemo(() => filter_component_by_name(active_components, "image-secao"), []);
  const get_image_styles = get_component_styles(div_image);

  // User Name
  const div_user_name = useMemo(() => filter_component_by_name(active_components, "user-name-section"), []);
  const get_user_name_styles = get_component_styles(div_user_name);

  // User Occupation
  const div_user_occupation = useMemo(() => filter_component_by_name(active_components, "user-occupation-section"), []);
  const get_user_occupation_styles = get_component_styles(div_user_occupation);

  // Depoiment
  const user_depoiment = useMemo(() => filter_component_by_name(active_components, "user-depoiment-section"), []);
  const get_depoiment_styles = get_component_styles(user_depoiment);

  // Address
  const user_address = useMemo(() => filter_component_by_name(active_components, "user-address-section"), []);
  const get_address_styles = get_component_styles(user_address);

  const router = useRouter();

  return (
    <NoStyleWrapper
      size={{ "@initial": "mobile", "@desktop": "desktop" }}
      css={{ ...section.styles }}
      className={style.container}
    >
      <div className={style.container__depoiment}>
        <div className={style.container__depoiment_header}>
          <DepoimentText size={{ "@initial": "title" }} css={{ ...get_title_styles }}>
            Depoimentos dos clientes 
          </DepoimentText>
            <LinkComponent href="/depoimentos" prefetch={false} link="underline" css={{ ...get_link_styles }} style={{ minWidth: "110.56px" }}>
              <Icon width="39.56px" height="13.5px" src="/images/icon-arrow-forward.svg" alt="" />
              <p>Ver todos</p>
            </LinkComponent>
        </div>
        <div className={style.container__depoiment_section}>
          {depoiments.map((depoiment) => (
            <CardDepoimentoComponent key={`customer-depoiment-${depoiment.name}`}>
              <div className={style.container__depoiment_section_header}>
                <ImageComponent css={{ ...get_image_styles }} src={depoiment.avatar} size={{ "@initial": "sm" }} />
                <div className={style.container__depoiment_header_text}>
                  <DepoimentText size={{ "@initial": "md" }} css={{ ...get_user_name_styles }}>
                    {depoiment.name}
                  </DepoimentText>
                  <DepoimentText size={{ "@initial": "xsmBold" }} css={{ ...get_user_occupation_styles }}>
                    {depoiment.occupation}
                  </DepoimentText>
                </div>
              </div>
              <div className={style.container__depoiment_section_body}>
                <img src="/images/message.svg" alt="side image" />
                <div className={style.container__depoiment_body_text}>
                  <DepoimentText size={{ "@initial": "sm" }} css={{ ...get_depoiment_styles }}>
                    {depoiment.depoiment}
                  </DepoimentText>
                  <DepoimentText size={{ "@initial": "xsmBold" }} css={{ ...get_address_styles }}>
                    {depoiment.city} - {depoiment.district}
                  </DepoimentText>
                </div>
              </div>
            </CardDepoimentoComponent>
          ))}
        </div>
      </div>
    </NoStyleWrapper>
  );
};
