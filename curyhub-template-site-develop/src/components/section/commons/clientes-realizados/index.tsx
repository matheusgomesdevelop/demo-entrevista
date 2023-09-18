import { useMemo } from "react";
import { NoStyleWrapper } from "../../../structure";
import { TituloStyled } from "../../../util/titulo";
import { DepoimentText } from "../principal";
import style from "./style.module.scss";
import { filter_component_by_name, get_component_styles } from "../../../../helpers/theme/theme-component";
import { ThemeHelper } from "../../../../helpers/theme";
import { ImageComponent } from "../components/Image";
import { styled } from "../../../../../theme/stitches.config";

type IClientProps = {
  avatar: string;
  id: number;
};

const clients: Array<IClientProps> = [
  {
    avatar: "/images/customers/clientes.png",
    id: 1,
  },
  {
    avatar: "/images/customers/clientes2.png",
    id: 2,
  },
  {
    avatar: "/images/customers/clientes3.png",
    id: 3,
  },
  {
    avatar: "/images/customers/clientes4.png",
    id: 4,
  },
  {
    avatar: "/images/customers/clientes5.png",
    id: 5,
  },
  {
    avatar: "/images/customers/clientes6.png",
    id: 6,
  },
  {
    avatar: "/images/customers/clientes7.png",
    id: 7,
  },
  {
    avatar: "/images/customers/clientes8.png",
    id: 8,
  },
  {
    avatar: "/images/customers/clientes9.png",
    id: 9,
  },
  {
    avatar: "/images/customers/clientes10.png",
    id: 10,
  },
  {
    avatar: "/images/customers/clientes11.png",
    id: 11,
  },
  {
    avatar: "/images/customers/clientes12.png",
    id: 12,
  },
];

interface IClientesRealizadosProps {
  section: ThemeSection;
  corretor_data: Corretor;
}

export const ClientesRealizados = ({ section, corretor_data }: IClientesRealizadosProps) => {
  const active_components = ThemeHelper.getActiveComponents(section.componentes);

  // Title
  const section_title = useMemo(() => filter_component_by_name(active_components, "section-title"), []);
  const get_title_styles = get_component_styles(section_title);

  // Client Wrapper
  const clients_div = useMemo(() => filter_component_by_name(active_components, "client-wrapper"), []);
  const get_clients_div_styles = get_component_styles(clients_div);

  // Client
  const client_div = useMemo(() => filter_component_by_name(active_components, "client-div"), []);
  const get_client_div_styles = get_component_styles(client_div);

  const ClientsWrapper = styled("div", {
    alignContent: "flex-start",
    display: "flex",
    gap: "1px",
    maxWidth: '1360px',
    maxHeight: '299px',
    overflowX: "scroll",
    width: '100%',

    variants: {
      alignment: {
        default: {},
        wrapped: {
          flexWrap: 'wrap'
        }
      }
    }
  });

  return (
    <NoStyleWrapper
      size={{ "@initial": "mobile", "@desktop": "desktop" }}
      className={style.container}
      css={{ ...section.styles }}
    >
      <div className={style.container__wrapper}>
        <DepoimentText css={{ ...get_title_styles }} size={{ "@initial": "title" }}>
          Quem já realizou o sonho!
        </DepoimentText>
        <ClientsWrapper
         alignment={{'@initial': 'default', '@desktop': 'wrapped'}}
         css={{ ...get_clients_div_styles }}
         className={style.container__clients_wrapper}>
          {clients.map((client) => (
            <ImageComponent
              src={client.avatar}
              key={client.id}
              size={{ "@initial": "lg" }}
              css={{ ...get_client_div_styles }}
            />
          ))}
        </ClientsWrapper>
      </div>
    </NoStyleWrapper>
  );
};
