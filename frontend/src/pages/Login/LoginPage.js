import { React, useState } from "react";
import { NotificationManager } from 'react-notifications';
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";

import urls from "../../../utils/urls";
import TextInput from "../../../components/textInput/textInput";
import Title from "../../../components/title/title";

import './LoginPage.css'

function LoginPage() {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const navigate = useNavigate();

    const onSubmit = async (e) => {
      e.preventDefault();

      const credentials = {
        email: email,
        password: password
      };

      await axios.post(
        `${urls.baseURL}/login/`,
        credentials,
        {headers: {'Content-Type': 'application/json'}},
      )
      .then((data) => {
        Cookies.set('access_token', data.access);
        Cookies.set('refresh_token', data.refresh);

        axios.defaults.headers.common['Authorization'] = `Bearer ${data.access}`;

        NotificationManager.success("Login realizado");

        navigate("/")
      })
      .catch((error) => {
        NotificationManager.error(error);
      });
    }

    return (
      <>
        <form className="login page" onSubmit={onSubmit}>
          <Title head="Login" />
          <TextInput
            className="horizontal"
            title="Email"
            placeholder="Insira seu e-mail"
            handleTextInput={e => setEmail(e.target.value)}
            type="email"
          />
          <TextInput
            className="horizontal"
            title="Senha"
            placeholder="Insira sua senha"
            handleTextInput={e => setPassword(e.target.value)}
            type="password"
          />
          <button className="login-button" type="submit">
            Entrar
          </button>
        </form>
      </>
    );
}

export default LoginPage;
