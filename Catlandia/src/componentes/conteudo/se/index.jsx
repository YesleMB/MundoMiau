import React from "react";
import styled from "styled-components";
import { UnsplashImage} from "./UnsplashImage";

export const Cards = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 100%;
  margin: 0;
  padding: 0;
  gap: 10px;

`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #ffffff;
  height: 23rem;
  width: 30rem;
  border-radius: 8px;
  margin: 16px;
    overflow: hidden;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
  color: #666666;
`;
const TItleComponent = styled.h1`
position: relative;
bottom: 60px;
margin: 0;
padding: 0;
`
export const adicionarCard = () => {
  const novoCard = {
    imageUrl: "url_da_nova_imagem.jpg",
    imageAlt: "Descrição da nova imagem",
  };

  setCards([...cards, novoCard]);
};

export const CardList = () => {
  const cardSets = [
    {
      title: <TItleComponent>Incriveis imagens de gatos marrom</TItleComponent>,
      gatoType: "gato marrom",
    },
    {
      title:  <TItleComponent>Caso goste,temos fotos de filhote.</TItleComponent>,
      gatoType: "gato filhote",
    },
    {
      title:  <TItleComponent>incriveos imagens de gatos pretos</TItleComponent>,
      gatoType: "gato preto",
    },
    {
      title:  <TItleComponent>incriveos imagens de gatos branco</TItleComponent>,
      gatoType: "gato branco",
    },
  ];

  

  return (
    <Cards>
      {cardSets.map((card, index) => (
        <CardContainer key={index}>
          <CardContent>{card.title}</CardContent>
          <UnsplashImage query={card.gatoType} />
        </CardContainer>
      ))}
    </Cards>
  );
};
