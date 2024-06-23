import styled from "styled-components"
import search from '../../../public/iconos/search.png'
import { useContext, useRef } from "react"
import { GlobalContext } from '../../context/GlobalContext'

const ContainerEstilizado = styled.div`
    position: relative;
    display: inline-block;
`

const CampoTextoEstilizado = styled.input`
    height: 56px;
    padding: 12px 16px;
    border-radius: 10px;
    border: 2px solid;
    border-color: #C98CF1;
    background: transparent;
    width: 566px;
    color: #D9D9D9;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
    outline: none;
`

const IconoLupa = styled.img`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 38px !important;
    height: 38px;
    cursor: pointer;
`

function CampoTexto() {

    const cajaConsulta = useRef(null)
    const { dispatch } = useContext(GlobalContext)

    return (
        <ContainerEstilizado>
            <CampoTextoEstilizado ref={cajaConsulta} type="text" placeholder="¿Qué estas buscando?" />
            <IconoLupa src={search} alt="Icono de lupa" onClick={() => { dispatch({ type: 'SET_CONSULTA', payload: cajaConsulta.current.value }) }} />
        </ContainerEstilizado>
    )
}

export default CampoTexto