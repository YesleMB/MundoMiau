import React from "react";
import { ConteinerHome } from "./home";
import Header from "../header";
import { ConteinerMain } from "../conteudo/principal"
import { Cards } from "../conteudo/se";
import { BuscaImagens } from "../conteudo/se/UnsplashImage";
import { ConteinerPrincipal } from "../../App"
import styled from "styled-components";
import { Outlet } from "react-router-dom";


const ConteinerGaleria = styled.div`
display: flex;
width: 100%;
height: 100%;
margin: 0;
padding: 0;
justify-content: center;
align-items: center;
flex-wrap: wrap;

`





function Galeria() {
    return (
        <ConteinerPrincipal>
            <ConteinerGaleria>
            <Outlet/>
                <Header />
                <ConteinerMain>
                    <ConteinerGaleria>

                        <Cards >
                            <BuscaImagens />

                        </Cards>
                    </ConteinerGaleria>
                </ConteinerMain>
            </ConteinerGaleria>

        </ConteinerPrincipal>
    )

}
export default Galeria