import React from 'react'
import Titulo from '../Titulo'
import Tag from './Tags'
import Populares from './Populares'
import styled from 'styled-components'
import Imagen from './Imagen'

const GaleriaContainer = styled.div`
    display: flex;
`

const SeccionFluida = styled.section`
    flex-grow: 1;
`

const SectionGaleria =styled.section`
    display: grid;
    gap: 40px;
    grid-template-columns: repeat(3,1fr);
`

function Galeria({ fotos = [] }) {
    return (
        <>
            <Tag />
            <GaleriaContainer>
                <SeccionFluida>
                    <Titulo>
                        Navegue por la galeria
                    </Titulo>
                    <SectionGaleria>
                        {fotos.map(foto => {
                            return <Imagen key={foto.id}>{foto.titulo}</Imagen>
                        })}
                    </SectionGaleria>
                </SeccionFluida>
                <Populares />
            </GaleriaContainer>
        </>
    )
}

export default Galeria