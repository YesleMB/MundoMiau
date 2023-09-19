import React from "react";
import styled from "styled-components"
import { CarouselPaginaInicial } from "./Carrosel";
import { Cards, CardList } from "../se"
import { letraTitulo } from "../../UI";

export const ConteinerMain = styled.main`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
height: 100%;
width: 100%;
margin: 0;
padding: 0;

`

export const Conteiner = styled.div`
display: flex;
flex-direction: column;
height: 100%;
width: 100%;
overflow-wrap:normal;
margin: 0;
padding: 0;

  


`
export const ConteinerConteudo = styled.div`
display: flex;
flex-direction: row;
height: 15rem;
width: 100%;
max-width: 100%;
justify-content: center;
padding: 0;
margin: 0;
`
export const Imagem = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
border-radius: 1rem;



`
export const Titulo = styled.h1`
display: flex;
justify-content: center;
overflow-wrap: normal;
font-size: 80px;
width: 85%;
margin: 0;
padding: 0;
color: ${letraTitulo};
@media(max-width:300px ){
  font-size: 50px;
  position: relative;
  inset: 10px  10px 10px 30px;
}@media(min-width:200px ){
  font-size: 50px;
  position: relative;
  inset: 10px  10px 10px 50px;
}
`
export const SubTitulo = styled.h3`
display:flex ;
font-size:30px;
width: 85%;
justify-content: center;
align-items: center;
overflow-wrap: normal;
@media(max-width:400px ){
  font-size: 25px;
  position: relative;
  inset: 10px  9px 10px 30px;
}@media(min-width:200px ){
  font-size: 25px;
  position: relative;
  inset: 10px  10px 10px 50px;
}
`
export const Texto = styled.p`
display: inline-flex;
display: flex;
justify-content: center;
width: 100%;
height: 100%;
font-size: 30px;
@media(max-width:450px ){
  font-size: 25px;
  position: relative;
  inset: 10px  10px 10px 10px;
}


`

function Main() {
  return (
    <ConteinerMain>
      <Conteiner>
        <Titulo> Bem vindo
          ao MundoMiau</Titulo>
        <SubTitulo> Aqui você ira encontrar as melhores e mais fofas fotos de gatinho que podem existir  </SubTitulo>
        <ConteinerConteudo>
          <CarouselPaginaInicial />
        </ConteinerConteudo>
        <Texto> O que você ira encontrar aqui? </Texto>
        <Cards>
          <CardList />

        </Cards>



      </Conteiner>
    </ConteinerMain>

  )

}
export default Main;