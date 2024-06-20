import React from 'react'
import styled from 'styled-components'

const FooterGlobal = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #001634;
    margin-top: 40px;
    padding: 20px 0;
    color: #D9D9D9;
`

function Footer() {
    return <FooterGlobal>
        Coded by Marco Silvera
    </FooterGlobal>
}

export default Footer