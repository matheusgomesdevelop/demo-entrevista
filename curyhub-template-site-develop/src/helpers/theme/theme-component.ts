export const filter_component_by_name = (componentList: ThemeComponent[], name: string): ThemeComponent[] | [] => {
  if (componentList.length > 0) {
    const components: ThemeComponent[] = componentList.filter((component) => component.component_name === name);

    return components;
  }

  return [];
};

export const get_component_styles = (component: ThemeComponent[]) => {
  if (component.length > 0) {
    return component[0].styles;
  }
  return null;
};
