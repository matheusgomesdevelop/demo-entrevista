import { ReactNode } from "react";
import { styled } from "../../../../../theme/stitches.config";

const Menu = styled("nav", {
  background: "$azul",
  width: "100%",
  height: "70px",
  display: "flex",
});

interface IMenu {
  children: ReactNode;
}

export function MenuComponent({ children }: IMenu) {
  return <Menu className={""}>{children}</Menu>;
}
