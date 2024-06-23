import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext()

const GlobalContextProvider = ({ children }) => {

    const [consulta, setConsulta] = useState('')
    const [fotosDeGaleria, setFotosDeGaleria] = useState([])
    const [fotoSeleccionada, setFotoSeleccionada] = useState(null)

    useEffect(() => {

        const getData = async () => {
            const rest = await fetch('http://localhost:3000/fotos')
            const data = await rest.json()
            setFotosDeGaleria([...data])
        }

        setTimeout(() => getData(), 500)
    }, [])

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

    return (
        <GlobalContext.Provider value={{ consulta, setConsulta, fotosDeGaleria, fotoSeleccionada, setFotoSeleccionada, alAlternarFavorito }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContextProvider;