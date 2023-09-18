import React from "react";
import styled from "styled-components";
import Navbar from "../../navbar";

export const Conteiner = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100%;
width: 100%;`

export const Lista = styled.ul`
display: flex;
list-style: none;
font-size: 20px;
`;

export const Li = styled.li`
margin:8rem;
display: flex; 
align-items: center;
justify-content: center;

 :hover{
    color: rgb(122, 53, 187);
 }
 @media (max-width: 500PX){
  margin:1rem;
 }
 @media (min-width: 250px){
 margin:3rem;}
`


const Opcoes = () => {
  return (
    <Conteiner>
      <Navbar />
    </Conteiner>
  );
};

export default Opcoes;
