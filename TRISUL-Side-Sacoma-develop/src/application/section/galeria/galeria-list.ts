import PISCINAINFANTIL from "../../../../public/images/galeria/desktop/piscina.png";
import PISCINAADULTA from "../../../../public/images/galeria/desktop/Complexo_Piscina.png";
import churrasqueira from "../../../../public/images/galeria/desktop/Churrasqueira.png";
import churrasqueira2 from "../../../../public/images/galeria/desktop/Churrasqueira_2.png";
import ESPAÇOLUAL from "../../../../public/images/galeria/desktop/ESPACO_LUAU_SUBSOLO.png";
import PLAYBABY from "../../../../public/images/galeria/desktop/Play_Baby.png";
import BRINQUEDOTECA from "../../../../public/images/galeria/desktop/Brinquedoteca.png";
import SALÃODEJOGOSADOLESCENTE from "../../../../public/images/galeria/desktop/Sala_jogos_adolescente.png";
import PLAYGROUND from "../../../../public/images/galeria/desktop/playground_subsolo.png";
import COWORKING from "../../../../public/images/galeria/desktop/Coworking_1.png";
import COWORKING2 from "../../../../public/images/galeria/desktop/Coworking_2.png";
import BICICLETÁRIO from "../../../../public/images/galeria/desktop/Bicicletario_Oficina_Subsolo.png";
import ATELIER from "../../../../public/images/galeria/desktop/Atelier_Subsolo.png";
import DECORADO from "../../../../public/images/galeria/desktop/Decorado.png";
import DELIVERY from "../../../../public/images/galeria/desktop/DELIVERY.png";
import ESPAÇOBEMESTAR from "../../../../public/images/galeria/desktop/Espaço bem-estar.png";
import FACHADA from "../../../../public/images/galeria/desktop/fachada.png";
import LAVANDERIAOMO from "../../../../public/images/galeria/desktop/Lavanderia_Omo.png";
import MINIMERCADO from "../../../../public/images/galeria/desktop/MINI_MERCADO.png";
import PORTARIA from "../../../../public/images/galeria/desktop/portaria.png";
import PRAÇADEESTAR from "../../../../public/images/galeria/desktop/pracaDeEstar.png";
import PRAÇADEESTAR2 from "../../../../public/images/galeria/desktop/pracaDeEstar2.png";
import SALADESESTAR from "../../../../public/images/galeria/desktop/sala_de_estar.png";
import SALAODESFESTA from "../../../../public/images/galeria/desktop/salao_de_festas.png";
import SALAODESFESTA2 from "../../../../public/images/galeria/desktop/Salão de festas.png";
import SALAODESFESTAGOURMET from "../../../../public/images/galeria/desktop/Salão de festas Gourmet.png";
import SPORTSBAR from "../../../../public/images/galeria/desktop/Sports_Bar.png";
import SUITEMASTER from "../../../../public/images/galeria/desktop/suite_master_do_apto.png";
import TERRACO from "../../../../public/images/galeria/desktop/Terraco_Ampliado.png";
import TIKTOKSTUDIO from "../../../../public/images/galeria/desktop/Tiktoker_Studio.png";

//MOBILE
import PISCINAINFANTILMOBILE from "../../../../public/images/galeria/mobile/piscina.png";
import PISCINAADULTAMOBILE from "../../../../public/images/galeria/mobile/Complexo_Piscina.png";
import churrasqueiraMOBILE from "../../../../public/images/galeria/mobile/Churrasqueira.png";
import churrasqueira2MOBILE from "../../../../public/images/galeria/mobile/Churrasqueira_2.png";
import ESPAÇOLUALMOBILE from "../../../../public/images/galeria/mobile/ESPACO_LUAU_SUBSOLO.png";
import PLAYBABYMOBILE from "../../../../public/images/galeria/mobile/Play_Baby.png";
import BRINQUEDOTECAMOBILE from "../../../../public/images/galeria/mobile/Brinquedoteca.png";
import SALÃODEJOGOSADOLESCENTEMOBILE from "../../../../public/images/galeria/mobile/Sala_jogos_adolescente.png";
import PLAYGROUNDMOBILE from "../../../../public/images/galeria/mobile/playground_subsolo.png";
import COWORKINGMOBILE from "../../../../public/images/galeria/mobile/Coworking_1.png";
import COWORKING2MOBILE from "../../../../public/images/galeria/mobile/Coworking_2.png";
import BICICLETÁRIOMOBILE from "../../../../public/images/galeria/mobile/Bicicletario_Oficina_Subsolo.png";
import ATELIERMOBILE from "../../../../public/images/galeria/mobile/Atelier_Subsolo.png";
import DECORADOMOBILE from "../../../../public/images/galeria/mobile/Decorado.png";
import DELIVERYMOBILE from "../../../../public/images/galeria/mobile/DELIVERY.png";
import ESPAÇOBEMESTARMOBILE from "../../../../public/images/galeria/mobile/Espaço bem-estar.png";
import FACHADAMOBILE from "../../../../public/images/galeria/mobile/fachada.png";
import LAVANDERIAOMOMOBILE from "../../../../public/images/galeria/mobile/Lavanderia_Omo.png";
import MINIMERCADOMOBILE from "../../../../public/images/galeria/mobile/MINI_MERCADO.png";
import PORTARIAMOBILE from "../../../../public/images/galeria/mobile/portaria.png";
import PRAÇADEESTARMOBILE from "../../../../public/images/galeria/mobile/pracaDeEstar.png";
import PRAÇADEESTAR2MOBILE from "../../../../public/images/galeria/mobile/pracaDeEstar2.png";
import SALADESESTARMOBILE from "../../../../public/images/galeria/mobile/sala_de_estar.png";
import SALAODESFESTAMOBILE from "../../../../public/images/galeria/mobile/salao_de_festas.png";
import SALAODESFESTA2MOBILE from "../../../../public/images/galeria/mobile/Salão de festas.png";
import SALAODESFESTAGOURMETMOBILE from "../../../../public/images/galeria/mobile/Salão de festas Gourmet.png";
import SPORTSBARMOBILE from "../../../../public/images/galeria/mobile/Sports_Bar.png";
import SUITEMASTERMOBILE from "../../../../public/images/galeria/mobile/suite_master_do_apto.png";
import TERRACOMOBILE from "../../../../public/images/galeria/mobile/Terraco_Ampliado.png";
import TIKTOKSTUDIOMOBILE from "../../../../public/images/galeria/mobile/Tiktoker_Studio.png";

export interface IImagesGaleriaModal {
  id: number;
  nome: string,
  src: string,
  legenda: string,
  is_fachada?: boolean;
}

export const galeriaList = () => {
  return [
    {
      id: 0,
      nome: "PISCINA1",
      src: PISCINAINFANTIL,
      thumbSrc: PISCINAINFANTILMOBILE,
      legenda: "PISCINA INFANTIL",
    },
    {
      id: 1,
      nome: "PISCINA2",
      src: PISCINAADULTA,
      thumbSrc: PISCINAADULTAMOBILE,
      legenda: "PISCINA ADULTO",
    },
    {
      id: 2,
      nome: "churrasqueira1",
      src: churrasqueira,
      thumbSrc: churrasqueiraMOBILE,
      legenda: "CHURRASQUEIRA TÉRREO",
    },
    {
      id: 3,
      nome: "churrasqueira2",
      src: churrasqueira2,
      thumbSrc: churrasqueira2MOBILE,
      legenda: "CHURRASQUEIRA SUBSOLO",
    },
    {
      id: 4,
      nome: "espaçoLual",
      src: ESPAÇOLUAL,
      thumbSrc: ESPAÇOLUALMOBILE,
      legenda: "ESPAÇO LUAU E QUADRA RECREATIVA",
    },
    {
      id: 5,
      nome: "playBaby",
      src: PLAYBABY,
      thumbSrc: PLAYBABYMOBILE,
      legenda: "PLAYGROUND BABY",
    },
    {
      id: 6,
      nome: "brinquedoteca",
      src: BRINQUEDOTECA,
      thumbSrc: BRINQUEDOTECAMOBILE,
      legenda: "BRINQUEDOTECA",
    },
    {
      id: 7,
      nome: "salaDeJogosAdolecente",
      src: SALÃODEJOGOSADOLESCENTE,
      thumbSrc: SALÃODEJOGOSADOLESCENTEMOBILE,
      legenda: "SALA DE JOGOS",
    },
    {
      id: 8,
      nome: "playground",
      src: PLAYGROUND,
      thumbSrc: PLAYGROUNDMOBILE,
      legenda: "PLAYGROUND",
    },
    {
      id: 9,
      nome: "COWORKING_1",
      src: COWORKING,
      thumbSrc: COWORKINGMOBILE,
      legenda: "COWORKING ESTUDOS",
    },
    {
      id: 10,
      nome: "COWORKING_2",
      src: COWORKING2,
      thumbSrc: COWORKING2MOBILE,
      legenda: "COWORKING",
    },
    {
      id: 11,
      nome: "bicicletario",
      src: BICICLETÁRIO,
      thumbSrc: BICICLETÁRIOMOBILE,
      legenda: "BICICLETÁRIO",
    },
    {
      id: 12,
      nome: "Atelier",
      src: ATELIER,
      thumbSrc: ATELIERMOBILE,
      legenda: "ATELIER",
    },
   
    {
      id: 19,
      nome: "portaria",
      src: PORTARIA,
      thumbSrc: PORTARIAMOBILE,
      legenda: "PORTARIA",
    },
    {
      id: 20,
      nome: "pracaDeEstar",
      src: PRAÇADEESTAR,
      thumbSrc: PRAÇADEESTARMOBILE,
      legenda: "BOULEVARD",
    },
    {
      id: 21,
      nome: "pracaDeEstar2",
      src: PRAÇADEESTAR2,
      thumbSrc: PRAÇADEESTAR2MOBILE,
      legenda: "BOULEVARD",
    },
   
  ];
};
