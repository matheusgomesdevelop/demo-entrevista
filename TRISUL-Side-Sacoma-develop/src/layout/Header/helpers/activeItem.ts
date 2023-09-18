export function removeIdActive(links: NodeListOf<HTMLLIElement>) {
  // Remover os active
  links.forEach((link) => link.removeAttribute("id"));
}

export function setActiveItem(links: NodeListOf<HTMLLIElement>, targetEl: HTMLLIElement) {
  // Remover os active
  removeIdActive(links);

  // Setar active
  targetEl.setAttribute("id", "active");
}

export function activeItem(links: NodeListOf<HTMLLIElement>) {
  if (links.length > 0) {
    links.forEach((link) => {
      console.log(link);
      setActiveItem(links, link);
    });
  }
}
