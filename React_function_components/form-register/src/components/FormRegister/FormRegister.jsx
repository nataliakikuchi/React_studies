import React, { useEffect, useState } from "react";
import PersonalData from "./PersonalData";
import UserData from "./UserData";
import DeliveryData from "./DeliveryData";
import { Typography, Stepper, Step, StepLabel } from "@material-ui/core";

function FormRegister({ onSubmit, validations }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [collectedData, setCollectedData] = useState({});

  useEffect(() => {
    if (currentStep == forms.length - 1) {
      onSubmit(collectedData);
    }
  });

  const forms = [
    <UserData onSubmit={collectData} validations={validations} />,
    <PersonalData onSubmit={collectData} validations={validations} />,
    <DeliveryData onSubmit={collectData} validations={validations} />,
    <Typography variant="h4">Agradecemos o cadastro!</Typography>,
  ];

  function collectData(data) {
    setCollectedData({ ...collectedData, ...data }); //spread operator para abrir, não jogar o objeto inteiro aqui, mas pegar cada atributo e adicionar nesse novo objeto que estou criando, também, faço uma concatenação com os dados recebidos. Vou sempre adicionando dados, todos os dados de todos os campos dentro desses collectedData.
    nextStep();
  }

  function nextStep() {
    setCurrentStep(currentStep + 1);
  }

  return (
    <>
      <Stepper activeStep={currentStep}>
        <Step>
          <StepLabel>Login</StepLabel>
        </Step>

        <Step>
          <StepLabel>Dados pessoais</StepLabel>
        </Step>

        <Step>
          <StepLabel>Endereço</StepLabel>
        </Step>

        <Step>
          <StepLabel>Finalização</StepLabel>
        </Step>
      </Stepper>
      {forms[currentStep]}
    </>
  );
}

export default FormRegister;

//O único problema que a gente tem agora é que a gente tentou renderizar nossa etapa 3 do formulário, nosso index 3, e esse formulário não tem index 3. É agora que a gente vai querer fazer a atualização e chamar, finalizei minha parte de cadastro, finalizei aqui e quero chamar o onSubmit. Vamos fazer isso para ter nosso formulário sendo chamado, enviando as informações de fato quando a gente terminar de preencher inteiro.
