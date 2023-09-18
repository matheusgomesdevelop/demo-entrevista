export const ThemeHelper = {
  // Components
  getActiveComponents: (component_list: ThemeComponent[]) => {
    if (component_list.length > 0) {
      const active_components = component_list.filter((component) => component.is_active);

      return active_components;
    }

    return [];
  },
};
