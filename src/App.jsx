import styled from "styled-components"
import GlobalStyles from "./components/GlobalStyles"
import Cabecera from "./components/Cabecera"
import BarraLateral from "./components/BarraLateral"
import Banner from "./components/Banner"
import banner from "./assets/banner.png"
import Galeria from "./components/Galeria"
import { useEffect, useState } from "react"
import ModalZoom from "./components/ModalZoom"
import Footer from "./components/Footer"
import Cargando from "./components/Cargando"


const FondoGradiente = styled.div`
  background: linear-gradient(175deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`
const AppContainer = styled.div`
  width: 100%;
  padding: 0 40px;
  flex: 1;
`

const MainContainer = styled.main`
  width: 100%;
  flex: 1;
  display: flex;
  gap: 24px;
`

const ContenidoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  gap: 50px;
  flex-grow: 1;
`

function App() {

  const [consulta, setConsulta] = useState('')
  const [fotosDeGaleria, setFotosDeGaleria] = useState([])
  const [fotoSeleccionada, setFotoSeleccionada] = useState(null)
  const alAlternarFavorito = (foto) => {

    if (foto.id === fotoSeleccionada?.id) {
      setFotoSeleccionada({
        ...fotoSeleccionada,
        favorita: !foto.favorita
      })
    }
    setFotosDeGaleria(fotosDeGaleria.map(fotoDeGaleria => {
      return {
        ...fotoDeGaleria,
        favorita: fotoDeGaleria.id === foto.id ? !foto.favorita : fotoDeGaleria.favorita
      }
    }))
  }

  useEffect(() => {

    const getData = async () => {
      const rest = await fetch('http://localhost:3000/fotos')
      const data = await rest.json()
      setFotosDeGaleria([...data])
    }

    setTimeout(() => getData(), 500)
  }, [])

  return (
    <>
      <FondoGradiente>
        <GlobalStyles />
        <AppContainer>
          <Cabecera setConsulta={setConsulta} />
          <MainContainer>
            <BarraLateral />
            <ContenidoGaleria>
              <Banner texto='La galería más completa de todo el espacio' backgroundImage={banner} />
              {
                fotosDeGaleria.length === 0 ?
                  <Cargando /> :
                  <Galeria alSeleccionarFoto={foto => setFotoSeleccionada(foto)} fotos={fotosDeGaleria} alAlternarFavorito={alAlternarFavorito} consulta={consulta} />
              }
            </ContenidoGaleria>
          </MainContainer>
        </AppContainer>
        <ModalZoom foto={fotoSeleccionada} alCerrar={() => setFotoSeleccionada(null)} alAlternarFavorito={alAlternarFavorito} />
        <Footer />
      </FondoGradiente>
    </>
  )
}

export default App
