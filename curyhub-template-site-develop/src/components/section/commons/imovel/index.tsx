import { useMemo } from "react";
import { ThemeHelper } from "../../../../helpers/theme";
import {
  IconCarStyled,
  IconDormStyled,
  IconFilterStyled,
  IconShareStyled,
} from "../../../icons";
import { toBrCurrency } from "../../../util/validators";
import style from "./style.module.scss";
import { filter_component_by_name, get_component_styles } from "../../../../helpers/theme/theme-component";
import { DepoimentText } from "../principal";
import { NoStyleWrapper } from "../../../structure";
import { styled } from "../../../../../theme/stitches.config";
import { 
    ImovelCardInfosWrapper,
    ImovelCardWrapper, 
    ImovelReleaseTag, 
    ImovelInfoWrapper, 
    ImovelInfo} from "./components/imovel-card/imovel-card";
import { ImageComponent } from "../components/Image";
import { LinkComponent } from "../../../link";



interface IImovelCardProps {
  release: string;
  title: string;
  subtitle: string;
  rooms: string;
  area: string;
  garages: string;
  value: number;
  id?: number
}
const imoveis: Array<IImovelCardProps> = [
  {
    release: 'Lançamento',
    title: "Mansão Wildberg",
    subtitle: "Vitória neighborhood",
    rooms: "2 a 3",
    area: "138m² a 168m²",
    garages: "1 a 2",
    value: 500000.0,
    id: 1
  },
  {
    release: '100% Vendido',
    title: "Mansão Wildberg",
    subtitle: "Vitória neighborhood",
    rooms: "2 a 3",
    area: "138m² a 168m²",
    garages: "1 a 2",
    value: 500000.0,
    id: 2
  },
  {
    release: '100% Vendido',
    title: "Mansão Wildberg",
    subtitle: "Vitória neighborhood",
    rooms: "2 a 3",
    area: "138m² a 168m²",
    garages: "1 a 2",
    value: 500000.0,
    id: 3
  },
  {
    release: 'Lançamento',
    title: "Mansão Wildberg",
    subtitle: "Vitória neighborhood",
    rooms: "2 a 3",
    area: "138m² a 168m²",
    garages: "1 a 2",
    value: 500000.0,
    id: 4
  },
  {
    release: '100% Vendido',
    title: "Mansão Wildberg",
    subtitle: "Vitória neighborhood",
    rooms: "2 a 3",
    area: "138m² a 168m²",
    garages: "1 a 2",
    value: 500000.0,
    id: 5
  },
  {
    release: '100% Vendido',
    title: "Mansão Wildberg",
    subtitle: "Vitória neighborhood",
    rooms: "2 a 3",
    area: "138m² a 168m²",
    garages: "1 a 2",
    value: 500000.0,
    id: 6
  },
  {
    release: '100% Vendido',
    title: "Mansão Wildberg",
    subtitle: "Vitória neighborhood",
    rooms: "2 a 3",
    area: "138m² a 168m²",
    garages: "1 a 2",
    value: 500000.0,
    id: 7
  },
  {
    release: '100% Vendido',
    title: "Mansão Wildberg",
    subtitle: "Vitória neighborhood",
    rooms: "2 a 3",
    area: "138m² a 168m²",
    garages: "1 a 2",
    value: 500000.0,
    id: 8
  },
  {
    release: 'Lançamento',
    title: "Mansão Wildberg",
    subtitle: "Vitória neighborhood",
    rooms: "2 a 3",
    area: "138m² a 168m²",
    garages: "1 a 2",
    value: 500000.0,
    id: 9
  },
  {
    release: 'Lançamento',
    title: "Mansão Wildberg",
    subtitle: "Vitória neighborhood",
    rooms: "2 a 3",
    area: "138m² a 168m²",
    garages: "1 a 2",
    value: 500000.0,
    id: 10
  },
  {
    release: 'Lançamento',
    title: "Mansão Wildberg",
    subtitle: "Vitória neighborhood",
    rooms: "2 a 3",
    area: "138m² a 168m²",
    garages: "1 a 2",
    value: 500000.0,
    id: 11
  },
];



export const ContentWrapper = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  width: '100%',

  variants: {
    size: {
      mobile: {
        padding: '40px 40px 32px 40px',
      },
      desktop: {
        padding: '44px 50px'
      },
      mobileHorizontal: {
        padding: '40px 40px 0 40px',
      },
      mobileDesktop: {
        padding: '40px 50px 0 50px'
      },
    },
    alignment: {
      horizontal: {
        justifyContent: 'space-between'
      }
    }
  }
})

interface IImovelProps {
  section: ThemeSection;
  corretor_data: Corretor;
}

export const Imovel = ({corretor_data, section}:IImovelProps) => {
  const active_components = ThemeHelper.getActiveComponents(section.componentes);

  //Title Section
  const title_section = useMemo(() => filter_component_by_name(active_components,"title-section"),[]);
  const get_section_title_styles = get_component_styles(title_section);

  //Title
  const title = useMemo(() =>filter_component_by_name(active_components, "title"),[]);
  const get_title_styles = get_component_styles(title);

  //Total Imoveis
  const total_imoveis = useMemo(() =>filter_component_by_name(active_components, "total-imoveis"),[]);
  const get_total_imoveis_styles = get_component_styles(total_imoveis);

  //Filter
  const filter = useMemo(() =>filter_component_by_name(active_components, "filter"),[]);
  const get_filter_styles = get_component_styles(filter);

  //Card Image
  const card_image = useMemo(() =>filter_component_by_name(active_components, "card-image"),[]);
  const get_card_image_styles = get_component_styles(card_image);

  //Card tag
  const card_tag = useMemo(() =>filter_component_by_name(active_components, "card-tag"),[]);
  const get_card_tag_styles = get_component_styles(card_tag);

  //Card Title
  const card_title = useMemo(() =>filter_component_by_name(active_components, "card-title"),[]);
  const get_card_title_styles = get_component_styles(card_title);

  //Card Subtitle
  const card_subtitle = useMemo(() =>filter_component_by_name(active_components, "card-subtitle"),[]);
  const get_card_subtitle_styles = get_component_styles(card_subtitle);

  //Card Rooms and Area
  const card_suites = useMemo(() =>filter_component_by_name(active_components, "card-suites"),[]);
  const get_card_suites_styles = get_component_styles(card_suites);

  //Card Garage
  const card_garage = useMemo(() =>filter_component_by_name(active_components, "card-garage"),[]);
  const get_card_garage_styles = get_component_styles(card_garage);

  //Content Value
  const card_value = useMemo(() => filter_component_by_name(active_components, "card-value"), []);
  const get_card_value_styles = get_component_styles(card_value);
  
  const totalImmobiles = imoveis.length + 1;
  
  const ImovelCard = ({
    release,
    title,
    subtitle,
    rooms,
    area,
    garages,
    value,
  }: IImovelCardProps) => {
    return (
      <ImovelCardWrapper >
        <ImageComponent
          css={{...get_card_image_styles}}
          size={{'@initial': 'borderTop'}}
          src="https://cury.net/storage/images_webp/products/gallery/62c5d00a1ddbd.jpeg.webp"
          height={180}
          style={{ width: "100%" }}
        />
        <ImovelCardInfosWrapper>
          <ImovelReleaseTag css={{...get_card_tag_styles}}>
            {release}
          </ImovelReleaseTag>
          <ImovelInfoWrapper gapSize={{'@initial': 'sm'}}>
            <DepoimentText size={{'@initial': 'bold'}} css={{...get_card_title_styles}}>
              {title}
            </DepoimentText>
            <DepoimentText size={{'@initial': 'sm'}} css={{...get_card_subtitle_styles}}>
              {subtitle}
            </DepoimentText>
          </ImovelInfoWrapper>
          <ImovelInfoWrapper gapSize={{'@initial': 'md'}}>
            <ImovelInfo gapSize={{'@initial': 'sm'}} css={{...get_card_suites_styles}}>
              <IconDormStyled fontSize={24} />
               <DepoimentText size={{'@initial': 'sm'}}>{rooms} suítes - {area}</DepoimentText>
            </ImovelInfo>
            <ImovelInfo gapSize={{'@initial': 'sm'}} css={{...get_card_garage_styles}}>
              <IconCarStyled fontSize={24} />
              {garages} vagas
            </ImovelInfo>
          </ImovelInfoWrapper>
  
          <ImovelInfoWrapper alignment={{'@initial': 'horizontal'}}>
            <ImovelInfoWrapper gapSize={{'@initial': 'sm'}}>
              <DepoimentText size={{'@initial': 'sm'}} css={{...get_card_value_styles}}>
                Valor do imóvel 
              </DepoimentText>
              <DepoimentText size={{'@initial': 'bold'}} css={{...get_card_value_styles}}>
                {toBrCurrency(value)}
              </DepoimentText>
            </ImovelInfoWrapper>
            <IconShareStyled fontSize={24} />
          </ImovelInfoWrapper>
        </ImovelCardInfosWrapper>
      </ImovelCardWrapper>
    );
  };

  return (
    <NoStyleWrapper size={{'@initial':'vertical'}} css={{ ...section.styles }} style={{marginTop: "50px"}}>
        <ContentWrapper size={{'@initial': 'mobile', '@desktop': 'desktop'}} css={{ ...get_section_title_styles }}>
          <div className={style.content__wrapper}>
            <DepoimentText
              size={{ "@initial": "lightXl" }}
              css={{ ...get_title_styles }}>
              O imóvel dos seus sonhos
            </DepoimentText>
          </div>
        </ContentWrapper>
        <ContentWrapper size={{'@initial': 'mobileHorizontal', '@desktop': 'mobileDesktop'}}>
          <div className={style.content__wrapper}>
            <div className={style.content__header}>
              <DepoimentText size={{'@initial': 'sm'}} css={{...get_total_imoveis_styles}}>
                <strong>{totalImmobiles}</strong> imóveis listados
              </DepoimentText>
              <DepoimentText css={{...get_filter_styles}} size={{'@initial': 'sm'}} style={{display: 'flex', alignContent: 'center', gap: '0 20px'}}>
                Filtros <IconFilterStyled fontSize={24}/>
              </DepoimentText>
            </div>
          </div>
        </ContentWrapper>
        <ContentWrapper size={{'@initial': 'mobile', '@desktop': 'desktop'}}>
          <div className={style.content__wrapper}>
            <div className={style.content__cards}>
              {imoveis.map((imovel) => 
              <LinkComponent href="/imoveis/guedala-park" key={imovel.id}>
                <ImovelCard
                  area={imovel.area} 
                  garages={imovel.garages}
                  release={imovel.release}
                  rooms={imovel.rooms}
                  subtitle={imovel.subtitle}
                  title={imovel.title}
                  value={imovel.value}
                />
              </LinkComponent>
              )}
            </div>
          </div>
        </ContentWrapper>
    </NoStyleWrapper>
  );
};
