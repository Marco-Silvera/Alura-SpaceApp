import styled from "styled-components";

const HeaderEstilizado = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 60px 0;
    form {
        input{
            border: 3px solid;
            border-image: linear-gradient(90deg, #C98CF1 0%, #7B78E5 100%) 1;
            border-radius: 100px;
            background: transparent;
            color: white;
        }
    }
`

const Cabecera = ()=> {
    return <HeaderEstilizado>
        <img src="img/logo.png" alt="Logo de Space App" />
        <form action="">
            <input type="text" placeholder="Que estas buscando" />
        </form>
    </HeaderEstilizado>
}

export default Cabecera