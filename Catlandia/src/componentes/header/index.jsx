import styled from "styled-components"
import Opcoes from "./componentes/menu";

const ConstHeader = styled.header`
display: inline-flex;
height: 6rem;
width: 100%;
background-color: #cfa1e2bc;
margin: 0;
padding: 0;

`;
const Conteiner = styled.div`
display:inline-flex;
width: 100%;
height: 100%;
margin: 0;
padding: 0;


`
function Header(){
 
    return(
    <ConstHeader>
        <Conteiner>
            <Opcoes/>
        </Conteiner>  
    </ConstHeader>
    
    )
}
export default Header;
