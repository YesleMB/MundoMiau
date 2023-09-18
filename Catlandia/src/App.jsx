import React from "react";
import styled from "styled-components"
import {GlobalStyled} from "./componentes/GlobalStyled"
import Header from "./componentes/header";
import Main from "./componentes/conteudo/principal";
import main from "./main.css";
import { corDeFundo } from "./componentes/UI";
import { Outlet } from "react-router-dom";

export const ConteinerPrincipal = styled.div`
display: flex;
align-items: center;
background-color:${corDeFundo} ;
height: 100%;
width: 100%;
margin: 0;
padding: 0;
`

function App() {

    return ( 
        <>  
         <GlobalStyled/>
        <Outlet/>
        </>
    )
}

export default App;