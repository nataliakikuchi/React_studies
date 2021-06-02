import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";

function DeliveryData({ onSubmit }) {
  const [cep, setCep] = useState("");
  const [address, setAddress] = useState("");
  const [num, setNum] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [coupon, setCoupon] = useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit({ cep, address, num, city, state, coupon });
      }}
    >
      <TextField
        value={cep}
        onChange={(event) => {
          setCep(event.target.value);
        }}
        id="cep"
        label="CEP"
        type="number"
        variant="outlined"
        margin="normal"
      />

      <TextField
        value={address}
        onChange={(event) => {
          setAddress(event.target.value);
        }}
        id="address"
        label="Endereço"
        type="text"
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <TextField
        value={num}
        onChange={(event) => {
          setNum(event.target.value);
        }}
        id="num"
        label="Número"
        type="number"
        variant="outlined"
        margin="normal"
      />

      <TextField
        value={city}
        onChange={(event) => {
          setCity(event.target.value);
        }}
        id="city"
        label="Cidade"
        type="text"
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <TextField
        value={state}
        onChange={(event) => {
          setState(event.target.value);
        }}
        id="state"
        label="Estado"
        type="text"
        variant="outlined"
        margin="normal"
      />

      <TextField
        value={coupon}
        onChange={(event) => {
          setCoupon(event.target.value);
        }}
        id="coupon"
        label="Cupom de Desconto"
        type="text"
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <Button type="submit" variant="contained" color="primary" fullWidth>
        Finalizar cadastro
      </Button>
    </form>
  );
}

export default DeliveryData;
