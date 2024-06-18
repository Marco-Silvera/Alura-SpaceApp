import React from 'react'
import styled from 'styled-components'

const FigureEstilizada = styled.figure`
    background-image: ${props => `url(${props.$backgroundImage})`};
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    border-radius: 20px;
    display: flex;
    align-items: center;
`

const TituloEstilizado = styled.h1`
    font-weight: 400;
    font-size: 40px;
    line-height: 48px;
    color:white;
    max-width: 400px;
    padding: 0 64px;
`

function Banner({ texto, backgroundImage }) {
    return (
        <FigureEstilizada $backgroundImage={backgroundImage}>
            <TituloEstilizado>{texto}</TituloEstilizado>
        </FigureEstilizada>
    )
}

export default Banner
