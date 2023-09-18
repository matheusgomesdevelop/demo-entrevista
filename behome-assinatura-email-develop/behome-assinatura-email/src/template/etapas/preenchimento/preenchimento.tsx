import { FormEventHandler } from "react";

import styles from "../../../styles/layout/l-solicitar.module.scss";
import stylePreenchimento from "./index.module.scss";

// Components
import Bullet from "../../../components/bullet";
import Button from "../../../components/button";
import Input from "../../../components/input";
import Progress from "../../../components/progress";
import Title from "../../../components/title";
import ErrorMessage from "../../../components/error";
import CropImageFile from "../../../components/crop-image-file/file";

// Dados
import { get_list } from "../../../storage/departamentos";

interface IEtapaPreencimento {
  handleAssinatura: FormEventHandler<HTMLFormElement>;
  errorMessages: {
    errorNomeMessage: string;
    errorDepartMessage: string;
    errorTelMessage: string;
    errorFotoMessage: string;
  };
  dadosAssinatura: DadosAssinatura;
}

export default function EtapaPreenchimento({ handleAssinatura, errorMessages, dadosAssinatura }: IEtapaPreencimento) {
  return (
    <div className={`${styles.l_solicitar} ${stylePreenchimento.preenchimento}`}>
      <Title texto={"Assinatura de e-mail"} textoDestaque={"Be Home"} />

      {/* Solicitar assinatura */}
      <div className={styles.l_solicitar__processo}>
        <div className={`${styles.l_solicitar__processo_etapas} ${styles.l_solicitar__processo_etapas__centered}`}>
          {/* Numeros das etapas (Bullet)*/}
          <Bullet number={1} etapaBullet={true} active={true} />
          <Bullet number={2} etapaBullet={true} inactive={true} />
          <Bullet number={3} etapaBullet={true} inactive={true} />

          {/* Progress bar */}
          <div className={styles.l_solicitar__processo_etapas__progress}>
            <Progress size="0" />
          </div>
        </div>

        <h3>
          <strong>1.</strong> Preencha o formulário abaixo e faça upload de uma foto sua.
        </h3>

        {/* Formulário */}
        <form onSubmit={handleAssinatura} className={stylePreenchimento.preenchimento__form}>
          <div className={stylePreenchimento.preenchimento__form_inline}>
            <div>
              <Input
                type="text"
                name="nome"
                placeholder="Nome e Sobrenome"
                labelText="Nome e Sobrenome"
                required={true}
                errorMessage={errorMessages.errorNomeMessage}
                maxLength={30}
                defaultValue={dadosAssinatura.nome}
              />
              <Input
                name="departamento"
                labelText="Departamento"
                inputSelect={true}
                inputSelectValues={get_list()}
                required={true}
                errorMessage={errorMessages.errorDepartMessage}
                defaultValue={dadosAssinatura.departamento ? dadosAssinatura.departamento : ""}
              />
              <Input
                type="text"
                name="creci"
                placeholder="Número do CRECI"
                labelText="CRECI"
                required={false}
                maxLength={20}
                defaultValue={dadosAssinatura.creci}
              />
              <Input
                type="text"
                name="tel"
                placeholder="Telefone"
                labelText="Telefone"
                required={true}
                errorMessage={errorMessages.errorTelMessage}
                maxLength={20}
                defaultValue={dadosAssinatura.tel}
              />
            </div>

            <div className={stylePreenchimento.preenchimento__form_foto}>
              <CropImageFile name="foto" id="foto" arquivo={dadosAssinatura.arquivo} />
              {errorMessages.errorFotoMessage && <ErrorMessage text={errorMessages.errorFotoMessage} />}
              <Button text="Gerar Assinatura" size="md" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
