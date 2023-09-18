import { config } from "../../../../../../theme/stitches.config";

const { white, primaria, secundaria, apoio, h1secundario, h2, h3 } = config.theme.colors;

export const components_section_header: ThemeComponent[] = [
  {
    id: 1,
    component_name: "foto-corretor",
    is_active: true,
    styles: {},
  },
  {
    id: 2,
    component_name: "nome-corretor",
    is_active: true,
    styles: { fontSize: "22px", color: h1secundario },
  },
  {
    id: 3,
    component_name: "creci-corretor",
    is_active: true,
    styles: { fontSize: "10px", color: h1secundario },
  },
  {
    id: 4,
    component_name: "tel-corretor",
    is_active: true,
    styles: { fontSize: "14px", color: h1secundario },
  },
  {
    id: 5,
    component_name: "icon-tel-corretor",
    is_active: true,
    styles: {},
  },
];
