import React, { useState } from "react";

function useErrors(validations) {
  const initialState = createInitialState(validations);
  const [errors, setErrors] = useState(initialState);
  function validateFields(event) {
    const { name, value } = event.target;
    const newState = { ...errors };
    newState[name] = validations[name](value);
    setErrors(newState);
  }

  function doSend() {
    for (let field in errors) {
      if (!errors[field].valid) {
        return false;
      }
    }
    return true;
  }

  return [errors, validateFields, doSend];

  //Para cada campo dentro dos meus erros em erros vou ter que fazer uma verificação. Para cada campo dos meus erros vou validar. Esse campo, essa maneira de fazer o array vai me trazer só o nome das chaves que tenho dentro desse objeto. Se quero pegar o valor daquela chave tenho que falar que meus erros para o campo que peguei válido, se for válido, deixo passar. Se não for válido quero retornar, return, false, quer dizer que não posso.
}

function createInitialState(validations) {
  const initialState = {};
  for (let field in validations) {
    initialState[field] = { valid: true, text: "" };
  }

  return initialState;
}

export default useErrors;
