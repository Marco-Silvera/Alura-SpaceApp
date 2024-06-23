import styled from "styled-components"
import Titulo from "../Titulo"
import Populares from "./Populares"
import Tag from "./Tags"
import Imagen from "./Imagen"
import Cargando from "../Cargando"
import { useContext } from "react"
import { GlobalContext } from "../../context/GlobalContext"

const GaleriaContainer = styled.div`
    display: flex;
    gap: 24px;
`

const SeccionFluida = styled.section`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    gap: 20px;
`
const ImagenesContainer = styled.section`
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;

    @media (min-width: 480px) {
        grid-template-columns: 1fr 1fr;
    }

    @media (min-width: 1440px) {
        grid-template-columns: 1fr 1fr 1fr;
    }

    @media (min-width: 2000px) {
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
`


const Galeria = () => {

    const { consulta, fotosDeGaleria, alAlternarFavorito, setFotoSeleccionada } = useContext(GlobalContext)

    return (

        fotosDeGaleria.length == 0 ?
            <Cargando></Cargando> :
            <>
                <Tag />
                <GaleriaContainer>
                    <SeccionFluida>
                        <Titulo>Navegue por la galería</Titulo>
                        <ImagenesContainer>
                            {fotosDeGaleria.filter(foto => {
                                return consulta == '' || foto.titulo.toLocaleLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "").includes(consulta.toLocaleLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, ""))
                            })
                                .map(foto => <Imagen
                                    alAlternarFavorito={alAlternarFavorito}
                                    alSolicitarZoom={foto => setFotoSeleccionada(foto)}
                                    key={foto.id}
                                    foto={foto} />)
                            }
                        </ImagenesContainer>
                    </SeccionFluida>
                    <Populares />

                </GaleriaContainer>
            </>
    )
}

export default Galeria