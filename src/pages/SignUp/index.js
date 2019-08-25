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

  function handleSignUp(e) {
    e.preventDefault();
    if (!username || !email || !cpf || !ra || course || !whatsapp) {
      setError("Preencha todos os dados para se cadastrar");
    } else {
      props.history.push("/home");
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
          type="email"
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
