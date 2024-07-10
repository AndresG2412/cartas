import Principal from "./pages/main.jsx"
import Lugar from "./pages/lugar.jsx"
import Confirmar from "./pages/confirmar.jsx"

function App() {

  return (
    <>
      <div className="mt-18 mb-24">
        <Principal/>
      </div>
      <div className="mb-26">
        <Lugar/>
      </div>
      <div className="mb-10">
        <Confirmar/>
      </div>
    </>
  )
}

export default App
