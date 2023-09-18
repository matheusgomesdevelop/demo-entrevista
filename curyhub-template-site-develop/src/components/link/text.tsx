import { ReactNode } from "react";
import { styled } from "../../../theme/stitches.config";

const Text = styled("p", {});

interface IText {
  children: ReactNode;
}

export default function TextLink({ children }: IText) {
  return <Text>{children}</Text>;
}
