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
                        Mas visitados
                    </ItemNavegacion>

                    <ItemNavegacion iconoActivo='../../../public/iconos/mas-vistas-activo.png' iconoInactivo='../../../public/iconos/mas-vistas-inactivo.png'>
                        Mas visitados
                    </ItemNavegacion>

                    <ItemNavegacion iconoActivo='../../../public/iconos/mas-vistas-activo.png' iconoInactivo='../../../public/iconos/mas-vistas-inactivo.png'>
                        Mas visitados
                    </ItemNavegacion>
                </ListaEstilizada>
            </nav>
        </aside>
    )
}

export default BarraLateral