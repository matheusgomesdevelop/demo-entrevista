export default class ThemeManager {
  private theme: Theme;

  constructor(theme: Theme) {
    this.theme = theme;
  }

  // Theme
  getTheme() {
    return this.theme;
  }

  getTemplate() {
    return this.theme.template;
  }

  // =============================================================================

  // Color palette

  getColorPalette() {
    return this.theme.template.color_palette;
  }

  setColorPalette(palette: ThemeColorPallete) {
    this.theme.template.color_palette = palette;
  }

  // =============================================================================

  // Pages

  getPages() {
    return this.theme.template.pages;
  }

  updatePages(pages: ThemePages[]) {
    //  this.theme.template.pages.splice(0, 1, pages[0]);
  }

  getPageByName(pages: Array<ThemePages>, name: string) {
    if (pages.length > 0) {
      console.log(pages);
      const page_filter = pages.filter((page) => page.page_name === name);

      return page_filter[0];
    }
  }

  getAllSectionByActivePage(pages: Array<ThemePages>, name: ThemePagesName) {
    const pages_active = pages.filter((page) => page.is_active);

    if (pages_active.length > 0) {
      const pages_by_name = pages_active.filter((page) => page.page_name === name);

      if (pages_by_name.length > 0) {
        const page_sections: ThemeSection[] = [];

        pages_by_name.forEach((page) => page_sections.push(...page.section));

        return page_sections;
      }
    }
  }

  // =============================================================================

  // Section

  getSectionByName(sections: Array<ThemeSection>, name: ThemeSectionsName) {
    if (sections.length > 0) {
      const section_filter = sections.filter((section) => section.section_name === name);

      return section_filter;
    }
  }

  // =============================================================================

  // Section: Atualiza as seçôes de uma pagina (reordenar).
  updateSections(section: ThemeSection[], pageName: string) {
    const filter_page = this.getPageByName(this.getPages(), pageName);

    if (filter_page) {
      let original_pages_collection = Array.from(this.getPages());

      if (filter_page) {
        original_pages_collection.map((original, key) => {
          if (original.page_name === filter_page.page_name) {
            const alter_section = { ...original_pages_collection[key], section };
            original_pages_collection[key] = alter_section;
          }
        });
      }

      const new_pages_collection = original_pages_collection;

      return new_pages_collection;
    }
  }
}
