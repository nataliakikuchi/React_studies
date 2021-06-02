function validateCPF(cpf) {
  if (cpf.length !== 11) {
    return { valid: false, text: "CPF deve conter 11 dígitos" };
  } else {
    return { valid: true, text: "" };
  }
}

function validatePassword(password) {
  if (password.length < 4 || password.length > 60) {
    return { valid: false, text: "Campo deve ter 4 e 60 dígitos" };
  } else {
    return { valid: true, text: "" };
  }
}

export { validateCPF, validatePassword };

//na model ficam as regras de negócio
