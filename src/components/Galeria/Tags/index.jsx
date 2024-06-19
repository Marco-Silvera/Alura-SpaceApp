import React from 'react'
import tag from './tags.json'
import styled from 'styled-components'

const TagContainer = styled.section`
    display: flex;
    align-items: center;
    gap: 64px;
    padding: 20px 0;
`

const TagTitulo = styled.h3`
    color: #D9D9D9;
    font-size: 24px;
    margin: 0;
`

const BotonesContainer = styled.div`
    display: flex;
    gap: 24px;
    justify-content: end;
`

const BotonesEstilizados = styled.button`
    font-size: 24px;
    padding: 10px;
    background-color: rgba(217, 217, 217, 0.3);
    color: white;
    border-radius: 10px;
    cursor: pointer;
    border: 2px solid transparent;
    &:hover{
        border-color: #C98CF1;
    }
`

function Tag() {
    return <>
        <TagContainer>
            <TagTitulo>Buscar por tags:</TagTitulo>
            <BotonesContainer>
                {tag.map(tag => {
                    return <BotonesEstilizados key={tag.id}>{tag.titulo}</BotonesEstilizados>
                })}
            </BotonesContainer>
        </TagContainer>
    </>

}

export default Tag