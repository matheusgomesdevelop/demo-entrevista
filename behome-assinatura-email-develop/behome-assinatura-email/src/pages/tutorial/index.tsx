import { useState } from "react";

// Components
import Main from "../../components/main";
import Header from "../../components/header";

// Templates
import TPLTutorialStepOne from "../../template/tutorial/step-one";
import TPLTutorialStepTwo from "../../template/tutorial/step-two";
import TPLTutorialStepTree from "../../template/tutorial/step-tree";
import TPLTutorialStepFour from "../../template/tutorial/step-four";
import TPLTutorialStepFinal from "../../template/tutorial/step-final";

export default function PageTutorial() {
  const [etapa, setEtapa] = useState(0);

  return (
    <>
      <Header />
      <Main clearMarginBottom={true}>
        {etapa === 0 ? (
          <TPLTutorialStepOne etapa={etapa} setEtapa={setEtapa} />
        ) : etapa === 1 ? (
          <TPLTutorialStepTwo etapa={etapa} setEtapa={setEtapa} />
        ) : etapa === 2 ? (
          <TPLTutorialStepTree etapa={etapa} setEtapa={setEtapa} />
        ) : etapa === 3 ? (
          <TPLTutorialStepFour etapa={etapa} setEtapa={setEtapa} />
        ) : etapa === 4 ? (
          <TPLTutorialStepFinal />
        ) : null}
      </Main>
    </>
  );
}
