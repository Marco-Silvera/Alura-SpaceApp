import React from 'react'
import fotoejemplo from '../../../assets/imagenes/galeria/foto-1.png'
import styled from 'styled-components'
import favorito from '../../../../public/iconos/favorito.png'
import expandir from '../../../../public/iconos/expandir.png'

const FigureEstilizado = styled.figure`
    display: flex;
    flex-direction: column;
    color: #D9D9D9;
    border-radius: 16px;
    overflow: hidden;
    h3 {
        font-size: 24px;
    }
`

const FigCaptionEstilizado = styled.figcaption`
    display: flex;
    flex-direction: column;
    background-color: #333333;
    padding: 10px;
`

const FooterEstilizado = styled.footer`
    display: flex;
    justify-content: space-between;
`

const ContainerBotones = styled.div`
    display: flex;
    gap: 20px;
    button {
        background-color: transparent;
        border: none;
        cursor: pointer;
        img{
            width: 20px;
        }
    }
`

function Imagen() {
    return <FigureEstilizado>
        <img src={fotoejemplo} alt="Imagen 1" />
        <FigCaptionEstilizado>
            <h3>Nombre de la foto</h3>
            <FooterEstilizado>
                <p>Fuente de la foto</p>
                <ContainerBotones>
                    <button>
                        <img src={favorito} alt="Favorito" />
                    </button>
                    <button>
                    <img src={expandir} alt="Favorito" />
                    </button>
                </ContainerBotones>
            </FooterEstilizado>
        </FigCaptionEstilizado>
    </FigureEstilizado>
}

export default Imagen
