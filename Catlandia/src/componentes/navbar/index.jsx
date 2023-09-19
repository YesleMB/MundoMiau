import React from "react";
import { Link } from "react-router-dom"
import { styled } from "styled-components";
import { Conteiner, Lista, Li } from "../header/componentes/menu"

const Nav = styled.nav`
display: flex;
justify-content: center;
align-items: center;
height: 100%;
width: 100%;`

const StyledLink = styled(Link)`
text-decoration: none;
color: #000000;
transition: color 0.3s ease; 

`;


function Navbar() {
    return (
        <Conteiner>
            <Nav>
                <Lista>
                    <Li>  <StyledLink to="/">Home</StyledLink>   </Li>
                    <Li>  <StyledLink to="galeria" >Galeria</StyledLink>  </Li>
                </Lista>
            </Nav>
        </Conteiner>

    )

    
} 
export default Navbar;