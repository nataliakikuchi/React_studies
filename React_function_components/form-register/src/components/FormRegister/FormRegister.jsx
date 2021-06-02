import React, { useEffect, useState } from "react";
import PersonalData from "./PersonalData";
import UserData from "./UserData";
import DeliveryData from "./DeliveryData";
import { Typography, Stepper, Step, StepLabel } from "@material-ui/core";

function FormRegister({ onSubmit }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [collectedData, setCollectedData] = useState({});

  useEffect(() => {
    if (currentStep == forms.length - 1) {
      onSubmit(collectedData);
    }
  });

  const forms = [
    <UserData onSubmit={collectData} />,
    <PersonalData onSubmit={collectData} />,
    <DeliveryData onSubmit={collectData} />,
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

// por causa do nosso contexto, nosso context provider, ele não precisa saber de informações que ele não quer, por exemplo, o que vai ser validado e como vai ser validado, porque para ele não interessa esse formulário de cadastro, é só um componente que faz o gerenciamento de renderização. Ele é como se fosse uma máquina de estados para o nosso formulário. Ele vai definir o que está sendo renderizado e quando está sendo renderizado, a partir de um estado dele que é uma etapa atual.

// Além disso, ele vai coletando os dados e vai juntando, agregando eles para no final quando a gente estiver pronto para enviar esses dados chamar a propriedade de ao enviar que quem passou para mim foi meu app.js e esse app.js, ou quem quer que crie esse formulário pode decidir o que vai fazer com os dados que ele mesmo coletou.
