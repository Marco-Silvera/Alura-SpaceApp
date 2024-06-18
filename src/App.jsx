import styled from "styled-components"
import GlobalStyles from "./components/GlobalStyles"
import Cabecera from "./components/Cabecera"
import BarraLateral from "./components/BarraLateral"
import Banner from "./components/Banner"
import banner from './assets/banner.png'


const FondoGradiente = styled.div`
  background: linear-gradient(175deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`
const AppContainer = styled.div`
  width: 100%;
  padding: 0 40px;
`

const MainContainer = styled.main`
  width: 100%;
  display: flex;
  gap: 24px;
`

function App() {

  return (
    <>
      <FondoGradiente>
        <GlobalStyles />
        <AppContainer>
          <Cabecera />
          <MainContainer>
            <BarraLateral />
            <Banner texto='La galería más completa de todo el espacio' backgroundImage={banner} />

          </MainContainer>

        </AppContainer>
      </FondoGradiente>
    </>
  )
}

export default App
