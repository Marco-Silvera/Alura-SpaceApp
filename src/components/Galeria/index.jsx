import React from 'react'
import Titulo from '../Titulo'
import Tag from './Tags'
import Populares from './Populares'
import styled from 'styled-components'

const GaleriaContainer = styled.div`
    display: flex;
`

const SeccionFluida = styled.section`
    flex-grow: 1;
`


function Galeria() {
    return (
        <>
            <Tag />
            <GaleriaContainer>
                <SeccionFluida>
                    <Titulo>
                        Navegue por la galeria
                    </Titulo>
                </SeccionFluida>
                <Populares />
            </GaleriaContainer>
        </>
    )
}

export default Galeria