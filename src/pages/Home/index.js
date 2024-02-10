import React from "react";
import Screen from "../../components/Screen";
import Title from "../../components/Title";
import personagens from "../../data";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const onClickCard = (personagem) => {
    console.log("clicouuu");
    navigate("/details", { state: { personagem } });
  };

  return (
    <Screen>
      <Title>Minha pagina inicial</Title>

      {personagens.map((personagem) => {
        return (
          <div key={personagem.nome} onClick={() => onClickCard(personagem)}>
            <h4>{personagem.nome}</h4>
            <img src={personagem.imagem} width={200} height={120} />
            <h6>Tipo: {personagem.tipo}</h6>
          </div>
        );
      })}
    </Screen>
  );
};

export default HomePage;
