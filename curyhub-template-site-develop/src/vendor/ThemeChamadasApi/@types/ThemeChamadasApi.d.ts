// Api Messages
type ApiStatusMessage = {
  status: string;
  message: string;
};

type ApiStatusMessageInstallTemplate = {
  status: string;
  message: string;
  template: ThemeChamadasApiTemplateByUserData;
};

type ApiStatusErrors = {
  status: string;
  errors: string;
};

type ApiUnprocessableEntityMessage = {
  status: string;
  message: {
    user_id?: Array<string>;
    template?: Array<string>;
    name?: Array<string>;
  };
};

// Color Palette
type ThemeChamadasApiUpdateColorPaletteBody = {
  name: string;
  thumbnail: string;
  color_palette: ColorPalette;
};

type ThemeChamadasApiStoreColorPaletteBody = {
  name: string;
  thumbnail: string;
  color_palette: ColorPalette;
};

type ThemeChamadasApiListColorPalette = {
  current_page: number;
  data: Array<ColorPalette>;
  first_page_url: string;
  from: number;
  next_page_url: string;
  path: string;
  per_page: number;
  prev_page_url: string;
  to: number;
};

// Template

type ThemeChamadasApiGetTemplateByDomain = {
  template: Theme;
  corretor: Corretor;
};

type ThemeChamadasApiGetTemplateById = {
  id: number;
  name: string;
  thumbnail: string;
  is_active: number;
  template: ThemeTemplate;
};

type ThemeChamadasApiUpdateTemplateBody = {
  name: string;
  thumbnail: string;
  template: ThemeTemplate;
};

type ThemeChamadasApiListTemplates = {
  current_page: number;
  data: Array<Theme>;
  first_page_url: string;
  from: number;
  next_page_url: string;
  path: string;
  per_page: number;
  prev_page_url: null;
  to: number;
};

// User

type ThemeChamadasApiUserDomain = {
  id: number;
  user_id: number;
  preview_domain: string;
  public_domain: string;
  NS1: string;
  NS2: string;
  created_at: string;
  updated_at: string;
};

type ThemeChamadasApiUpdateUserTemplateBody = {
  template: Theme;
};

type ThemeChamadasApiTemplateByUserData = {
  template: Theme;
  corretor: Corretor;
};

type ThemeChamadasApiListTemplateByUser = {
  id: number;
  default_template_id: number;
  name: string;
  thumbnail: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
};

// Meu dominio

type ThemeChamadasApiMyDomainBody = {
  preview_domain?: string;
  public_domain?: string;
};
