// Repository (dados)
import { ColorPalleteRepository } from "../repository/theme/ColorPalleteRepository";
import { PagesRepository } from "../repository/theme/PagesRepository";


const createTheme = (id: number, name: string, thumbnail: string, is_active: boolean, template: ThemeTemplate) => {
  const theme: Theme = {
    id,
    default_template_id: id,
    name,
    thumbnail,
    is_active,
    template,
    created_at: "",
    updated_at: "",
  };

  return theme;
};

// Para cada novo template que será gerado, deverá ir no stiches e também mudar o indice da respectiva paleta de cor.
// Assim as seções irão ser pintadas de acordo com a paletta.
// Por enquanto nao possui vinculo entre paletta e secoes do tema.
// As seções estão pegando as variaveis das cores diretamente do stitches


export const template1 = createTheme(1, "template-01", "/media/configurar-tema/template-01.png", true, {
  color_palette: ColorPalleteRepository[0].color_palette,
  color_palette_default: ColorPalleteRepository[0].color_palette,
  pages: PagesRepository,
});

