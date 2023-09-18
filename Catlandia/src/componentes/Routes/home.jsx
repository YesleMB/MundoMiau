import React from "react";
import styled from "styled-components"
import Header from "../header"
import Main from "../conteudo/principal";
import { corDeFundo } from "../UI";
import { Outlet } from "react-router-dom";
import { ConteinerPrincipal } from "../../App"

export const ConteinerHome = styled.div`
display: inline-flex;
flex-direction: column;
background-color:${corDeFundo} ;
height: 100%;
width: 100%;
margin: 0;
padding: 0;
`

function Home() {
    return (
        <ConteinerPrincipal>
            <ConteinerHome>
                <Outlet />
                <Header />
                <Main />
            </ConteinerHome>
        </ConteinerPrincipal>

    )

}
export default Home;