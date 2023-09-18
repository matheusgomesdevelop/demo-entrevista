import { useState, useRef, FormEvent, useEffect, useMemo } from "react";

import Main from "../../components/main";

// Converter HTML para Imagem
import { toPng } from "html-to-image";
import download from "downloadjs";

// Data
import EtapaPreenchimento from "../../template/etapas/preenchimento/preenchimento";
import TPLAssinaturaGeradaSucesso from "../../template/etapas/assinatura-gerada-sucesso";
import TPLValidandoInformacoes from "../../template/etapas/validando-informacoes";
import TPLDownloadSucesso from "../../template/etapas/download-sucesso";
import TPLSolicitarAssinatura from "../../template/etapas/solicitar-assinatura";

export default function PageSolicitarAssinatura() {
  const assinaturaRef = useRef<HTMLDivElement>();
  const [etapa, setEtapa] = useState<number>(0);

  const [getStorage, setGetStorage] = useState<DadosAssinatura>();

  // Dados do usuário para colocar na assinatura final
  const [dadosAssinatura, setDadosAssinatura] = useState<DadosAssinatura>({
    nome: "",
    departamento: "",
    tel: "",
    creci: "",
    foto: "",
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storage_name = "dados";

      localStorage.setItem(storage_name, JSON.stringify(dadosAssinatura));

      const get_storage = localStorage.getItem(storage_name);

      if (get_storage) {
        setGetStorage(JSON.parse(get_storage));
      }
    }
  }, [dadosAssinatura]);

  // Mensagens de erro dos campos dos formularios
  const [errorNomeMessage, setErrorNomeMessage] = useState<string>("");
  const [errorDepartMessage, setErrorDepartMessage] = useState<string>("");
  const [errorTelMessage, setErrorTelMessage] = useState<string>("");
  const [errorFotoMessage, setErrorFotoMessage] = useState<string>("");

  // Mensagem de erro caso não consiga gerar a assinatura ao gerar assinatura
  const [erroGerarAssinatura, setErroGerarAssinatura] = useState<string>("");
  const [msgEnviando, setMsgEnviando] = useState<string>("");

  // post assinatura
  const handleAssinatura = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const target = event.target as HTMLFormElement;

    const data = {
      nome: null,
      departamento: null,
      tel: null,
      creci: null,
    };

    const form = new FormData(target);

    // Verifica se o telefone é válido
    const regex_tel = /(?:\+?55\s?)?(?:\(?\d{2}\)?[-\s]?)?\d{4,5}[-\s]?\d{4}/;

    const setNome = (value) => {
      let str = value.split(" ");
      let strFinal = `${str[0]} ${str[1]}`.replace(",", " ");

      if (str[2] === "Grande" || str[2] === "grande") {
        strFinal = `${str[0]} ${str[1]} ${str[2]}`.replace(",", " ");
      }
      return strFinal;
    };

    form.forEach((value: string, key: string) => {
      key === "nome" && value !== "" ? (data.nome = setNome(value)) : setErrorNomeMessage("* Campo obrigatório.");
      key === "departamento" && value !== ""
        ? (data.departamento = value)
        : setErrorDepartMessage("* Campo obrigatório.");
      key === "tel" && value === ""
        ? setErrorTelMessage("* Campo obrigatório.")
        : key === "tel" && regex_tel.test(value)
        ? (data.tel = value)
        : key === "tel" && !regex_tel.test(value)
        ? setErrorTelMessage("Telefone inválido.")
        : null;
      key === "creci" ? (data.creci = value) : null;
      key === "foto" && value === "" ? setErrorFotoMessage("* Foto obrigatória.") : null;
    });

    // Limpa as mensagens de erro
    data.nome ? setErrorNomeMessage("") : null;
    data.departamento ? setErrorDepartMessage("") : null;
    data.tel ? setErrorTelMessage("") : null;

    if (target.foto.files.length > 0) {
      setErrorFotoMessage("");
    } else {
      setErrorFotoMessage("* Foto obrigatória.");
    }

    // Enviar os dados e gerar a assinatura
    if (data.nome && data.departamento && data.tel && target.foto.files.length > 0) {
      const croppedImage = document.getElementById("croppedImage");

      if (croppedImage) {
        setDadosAssinatura({
          ...data,
          foto: croppedImage.getAttribute("src"),
          arquivo: target.foto.files,
        });

        // Passa para a etapa de validação
        setEtapa(etapa + 1);

        // Espera a promise gerar a assinatura e passa para etapa final
        setTimeout(() => {
          setEtapa(etapa + 2);
        }, 1000);
      }
    }
  };

  // Gerar uma imagem PNG da assinatura e fazer o download
  async function handleDownload() {
    setMsgEnviando("Aguarde...");

    // Remover a borda antes de baixar
    assinaturaRef.current.style.border = "none";

    toPng(assinaturaRef.current)
      .then((dataUrl) => {
        download(dataUrl, "assinatura-email-behome.png");

        // Redireciona para a tela de sucesso se conseguiu baixar
        setEtapa(4);
      })
      .catch(() => {
        setErroGerarAssinatura(
          "Ocorreu um erro ao gerar a imagem de assinatura, tente preencher o formulário novamente."
        );
      })
      .finally(() => {
        setMsgEnviando("");
      });
  }

  {
  }
  return (
    <Main>
      {etapa === 1 ? (
        <EtapaPreenchimento
          handleAssinatura={handleAssinatura}
          dadosAssinatura={dadosAssinatura}
          errorMessages={{
            errorNomeMessage,
            errorDepartMessage,
            errorTelMessage,
            errorFotoMessage,
          }}
        />
      ) : etapa === 2 ? (
        <TPLValidandoInformacoes />
      ) : etapa === 3 ? (
        <TPLAssinaturaGeradaSucesso
          dadosAssinatura={dadosAssinatura}
          assinaturaRef={assinaturaRef}
          messages={{ erroGerarAssinatura, msgEnviando }}
          setEtapa={setEtapa}
          handleDownload={handleDownload}
        />
      ) : etapa === 4 ? (
        <TPLDownloadSucesso />
      ) : (
        <TPLSolicitarAssinatura etapa={etapa} setEtapa={setEtapa} />
      )}
    </Main>
  );
}
