import React from "react";
import styled from "styled-components";
import { Texto } from "../conteudo/principal";

const ConteinerFootter = styled.footer`
display: flex;
flex-direction: column;
background-color: #cfa1e2bc;
margin: 0;
padding: 0;



`
const ListaNaoOrdenada = styled.ul`
list-style:none;
margin: 0;
padding: 0;

`

const List = styled.li`
    color: rgb(59, 42, 75);
    margin: 0;
    padding: 0;
`



function Footter() {
    return (
        <ConteinerFootter>
            <ListaNaoOrdenada>
                <List>
                    <Texto style={{ fontSize: '30px', margin: "0px" }}>
                        desenvolvida por:
                    </Texto>
                </List>
                <List>
                    <Texto style={{ fontSize: '25px', margin: "0px" }}>
                        wesley mendes
                    </Texto>
                </List>
                <List>
                    <Texto style={{ fontSize: '30px', margin: "0px" }}>
                        imagens fornecidas por:
                    </Texto>
                </List>
                <List>
                    <Texto style={{ fontSize: '25px' , margin: "0px" }}>
                        Unsplash
                    </Texto>
                </List>
            </ListaNaoOrdenada>
        </ConteinerFootter>
    )

};

export default Footter;