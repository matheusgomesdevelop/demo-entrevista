type ThemePagesName = "ficha-de-produto" | "home" | "imoveis" | "depoimentos" | "blog";

type ThemeSectionsName =
  | "header"
  | "secao-principal"
  | "secao-plantas"
  | "secao-conheca-bairro"
  | "secao-financie"
  | "secao-visita-virtual"
  | "secao-conheca-imovel"
  | "secao-diferenciais-imovel"
  | "secao-diferenciais-proximidades"
  | "secao-receba-alertas"
  | "secao-similares"
  | "secao-contato"
  | "secao-imovel"
  | "secao-imoveis-similares"
  | "secao-video"
  | "secao-video-carrossel"
  | "secao-depoimentos"
  | "secao-especialista"
  | "secao-sonho"
  | "secao-blog-post"
  | "secao-posts"
  | "secao-titulo"
  | "secao-blog";

// Root

type ColorPalette = {
  id: number;
  name: string;
  thumbnail: string;
  is_active: boolean;
  color_palette: ThemeColorPallete;
  created_at: string;
  updated_at: string;
};

type Corretor = {
  name: string;
  email: string;
  nickname: string;
  regional_slug: string;
  creci: string;
  user_active: boolean;
};

// Theme

type Theme = {
  id: number;
  default_template_id: number;
  name: string;
  thumbnail: string;
  is_active: boolean;
  template: ThemeTemplate;
  created_at: string;
  updated_at: string;
};

type ThemeColorPallete = {
  h2: string;
  h3: string;
  apoio: string;
  white: string;
  primaria: string;
  secundaria: string;
  h1secundario: string;
};

type ThemeTemplate = {
  color_palette: ThemeColorPallete;
  color_palette_default: ThemeColorPallete;
  pages: Array<ThemePages>;
};

type ThemePages = {
  id: number;
  page_name: string;
  is_active: boolean;
  section: Array<ThemeSection>;
};

type ThemeSection = {
  id: number;
  section_name: ThemeSectionsName;
  is_active: boolean;
  order?: number;
  styles: ThemeStyles;
  componentes: Array<ThemeComponent>;
};

type ThemeColorPallete = {
  h2: string;
  h3: string;
  apoio: string;
  white: string;
  primaria: string;
  secundaria: string;
  h1secundario: string;
};

type ThemeStyles = {
  fontSize?: string;
  color?: string;
  backgroundColor?: string;
  fontWeight?: string;
  border?: string;
  height?: string;
  borderRadius?: string;
  borderColor?: string;
  fontFamily?: string;
};

type ThemeComponent = {
  id: number;
  component_name: string;
  styles: ThemeStyles;
  is_active: boolean;
  // type: EComponentTypes;
};

// enum EComponentTypes {
//   h1 = "title",
//   h2 = "sub_title",
//   h3 = "apoio",
//   lyt = "layout",
// }
