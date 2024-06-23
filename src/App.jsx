import styled from "styled-components"
import GlobalStyles from "./components/GlobalStyles"
import Cabecera from "./components/Cabecera"
import BarraLateral from "./components/BarraLateral"
import Banner from "./components/Banner"
import banner from "./assets/banner.png"
import Galeria from "./components/Galeria"
import ModalZoom from "./components/ModalZoom"
import Footer from "./components/Footer"
import Cargando from "./components/Cargando"
import GlobalContextProvider from "./context/GlobalContext"


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

  return (
    <>
      <FondoGradiente>
        <GlobalStyles />
        <GlobalContextProvider>
          <AppContainer>
            <Cabecera />
            <MainContainer>
              <BarraLateral />
              <ContenidoGaleria>
                <Banner texto='La galería más completa de todo el espacio' backgroundImage={banner} />
                <Galeria />
              </ContenidoGaleria>
            </MainContainer>
          </AppContainer>
          <ModalZoom />
          <Footer />
        </GlobalContextProvider>
      </FondoGradiente>
    </>
  )
}

export default App
