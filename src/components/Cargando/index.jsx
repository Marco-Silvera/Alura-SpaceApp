import React, { Component } from 'react'
import styled from 'styled-components'

const ContainerCargando = styled.div`
    display: flex;
    justify-content: center;
`

const GifCargando = styled.img`
    width: 10vw;
`

export class Cargando extends Component {
    render() {
        return (
            <ContainerCargando>
                <GifCargando src="img/Loading.gif" alt="Cargando..." />
            </ContainerCargando>
        )
    }
}

export default Cargando