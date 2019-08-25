import React, { useState } from "react";

import Logo from "../../assets/logo_matrix.png";

import { Form, Container } from "./styles";

function SignUp(props) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [ra, setRa] = useState("");
  const [course, setCourse] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [error, setError] = useState("");

  function validators(element, regex, msg) {
    if (!regex.test(String(element).toLocaleLowerCase())) throw msg;
  }

  function handleSignUp(e) {
    e.preventDefault();
    try {
      validators(
        email,
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "email Incorreto"
      );
      validators(
        cpf,
        /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/,
        "CPF Incorreto"
      );
      validators(
        whatsapp,
        /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/,
        "Número de telefone Incorreto"
      );
      validators(ra, /^[0-9]\d{6}$/, "RA Incorreto");
      props.history.push("/home");
    } catch (err) {
      alert(err);
    }
  }
  return (
    <Container>
      <Form onSubmit={handleSignUp}>
        <img src={Logo} alt="Dacomp logo" />
        {error && <p>{error}</p>}
        <input
          type="text"
          placeholder="Nome de usuário"
          onChange={e => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="Endereço de e-mail"
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Cpf"
          onChange={e => setCpf(e.target.value)}
        />
        <input
          type="text"
          placeholder="RA"
          onChange={e => setRa(e.target.value)}
        />
        <select placeholder="Escolha seu curso">
          <option value="engComputacao">Engenharia de computação</option>
          <option value="engSoftware">Engenharia de Software</option>
          <option value="ads">Análise e Desenvolvimento de Sistema</option>
        </select>
        <input
          type="cel"
          placeholder="WhatsApp"
          onChange={e => setWhatsapp(e.target.value)}
        />
        <button type="submit">Próximo</button>
      </Form>
    </Container>
  );
}

export default SignUp;
