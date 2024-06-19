import React from 'react'
import styled from 'styled-components'
import ItemNavegacion from './ItemNavegacion'

const ListaEstilizada = styled.ul`
    width: 236px;
`

function BarraLateral() {
    return (
        <aside>
            <nav>
                <ListaEstilizada>
                    <ItemNavegacion iconoActivo='../../../public/iconos/home-activo.png' iconoInactivo='../../../public/iconos/home-inactivo.png' activo>
                        Inicio
                    </ItemNavegacion>

                    <ItemNavegacion iconoActivo='../../../public/iconos/mas-vistas-activo.png' iconoInactivo='../../../public/iconos/mas-vistas-inactivo.png'>
                        Más vistas
                    </ItemNavegacion>

                    <ItemNavegacion iconoActivo='../../../public/iconos/me-gusta-activo.png' iconoInactivo='../../../public/iconos/me-gusta-inactivo.png'>
                        Más Me Gusta
                    </ItemNavegacion>

                    <ItemNavegacion iconoActivo='../../../public/iconos/nuevas-activo.png' iconoInactivo='../../../public/iconos/nuevas-inactivo.png'>
                        Nuevas
                    </ItemNavegacion>

                    <ItemNavegacion iconoActivo='../../../public/iconos/sorprendeme-activo.png' iconoInactivo='../../../public/iconos/sorprendeme-inactivo.png'>
                        Sorpréndeme
                    </ItemNavegacion>
                </ListaEstilizada>
            </nav>
        </aside>
    )
}

export default BarraLateral