import React from "react";
import Title from "../../components/Title";
import Screen from "../../components/Screen";
import { useLocation, Link } from "react-router-dom";

const DetailsPage = () => {
  const location = useLocation();
  console.log(location);
  const personagem = location.state.personagem;
  return (
    <Screen>
      <Link to="/">Voltar</Link>
      <Title>Pagina de detalhes</Title>

      <h3>{personagem.nome}</h3>
    </Screen>
  );
};

export default DetailsPage;
