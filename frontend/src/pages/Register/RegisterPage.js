import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NotificationManager } from 'react-notifications';
import DateTimePicker from "react-datetime-picker";
import axios from "axios";

import TextInput from "../../../components/textInput/textInput";
import Textbox from "../../../components/textbox/textbox";
import Title from "../../../components/title/title";
import Dropdown from "../../../components/dropdown/dropdown";

import { rolesValues } from "../../../utils/utils";
import urls from "../../../utils/urls";

import './RegisterPage.css'
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-clock/dist/Clock.css";

function RegisterPage() {
  const navigate = useNavigate();

  const [ registerData, setRegisterData ] = useState({role: rolesValues.patient});

  const handleChange = (e) => {
    const { value, name } = e.target;

    setRegisterData({
      ...registerData,
      [name]: value
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    await axios.post(
      `${urls.baseURL}/register/`,
      registerData,
      {headers: {'Content-Type': 'application/json'}},
    )
    .then(() => {
      NotificationManager.success("Cadastro realizado");

      navigate("/login")
      })
    .catch((error) => {
      NotificationManager.error("Erro", "Verifique os campos e tente novamente");
    });
  }

  return (
    <form className="register page" onSubmit={onSubmit}>
      <Title head="Cadastro" />
      <div className="register-content">
        <TextInput
          title="Nome"
          placeholder="Insira seu nome"
          name="first_name"
          value={registerData.first_name}
          handleTextInput={handleChange}
        />
        <TextInput
          title="Sobrenome"
          placeholder="Insira seu sobrenome"
          name="last_name"
          value={registerData.last_name}
          handleTextInput={handleChange}
        />
        <TextInput
          title="CPF"
          placeholder="Insira seu CPF"
          type="number"
          name="cpf"
          value={registerData.cpf}
          handleTextInput={handleChange}
        />
        <TextInput
          title="Email"
          placeholder="Insira seu email"
          type="email"
          name="email"
          value={registerData.email}
          handleTextInput={handleChange}
        />
        <TextInput
          title="Senha"
          placeholder="Insira sua senha"
          type="password"
          name="password"
          value={registerData.password}
          handleTextInput={handleChange}
        />
        <TextInput
          title="Confirmação de senha"
          placeholder="Confirme sua senha"
          type="password"
          name="password_confirmation"
          value={registerData.password_confirmation}
          handleTextInput={handleChange}
        />
      </div>
      <button className="register-button" type="submit">
        Cadastrar
      </button>
    </form>
  );
}

export default RegisterPage;
