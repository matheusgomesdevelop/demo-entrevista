import { FC, useEffect, useState } from "react";
import { useHypnoboxchatUrl } from "./hook/useHypnoboxchatUrl";

export interface HipnoboxChatProps {
  width?: number;
  height?: number;
  src?: number;
  controle?: string;
  acao?: string;
  produto?: number;
  nome?: string;
  email?: string;
  ddd_residencial?: string;
  tel_residencial?: string;
  midia?: string;
}

import style from "./style.module.scss";

export const HipnoboxChat: FC<HipnoboxChatProps> = ({ width, height, ...rest }) => {
  const [chatUrl, setChatUrl] = useState("");

  useEffect(() => {
    setChatUrl(useHypnoboxchatUrl(rest));
  }, [rest]);

  return (
    <div className={style.container}>
      <iframe src={chatUrl} width={width} height={height}></iframe>
    </div>
  );
};

HipnoboxChat.defaultProps = {
  controle: "Atendimento",
  acao: "index",
  produto: 0,
  nome: "",
  email: "",
  ddd_residencial: "",
  tel_residencial: "",
  midia: "LP-MoP",
};
