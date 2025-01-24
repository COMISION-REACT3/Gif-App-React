import './App.css'
import { Buscador, GridGifs } from './components'
import { useSearchGifs } from './hooks/useSearchGifs'

function App() {

const {valorInput, onChangeInput, handleOnSubmit, gifs, cargando} = useSearchGifs();


  return (
    <>
        <div>
          <Buscador
          valorInput={valorInput}
          onChangeInput={onChangeInput}
          handleOnSubmit={handleOnSubmit}
          />
           {cargando ? (
          <div className="loader">
          <div className="spinner"></div>
        </div>
        ) : (
          <GridGifs gifs={gifs} />
        )}
        </div>
    </>
  )
}

export default App
