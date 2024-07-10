import Principal from "./pages/main.jsx"
import Lugar from "./pages/lugar.jsx"
import Confirmar from "./pages/confirmar.jsx"

function App() {

  return (
    <>
      <div className="pt-18 pb-24 font-dancing-script">
        <Principal/>
      </div>
      <div className="pb-36 font-dancing-script">
        <Lugar/>
      </div>
      <div className="pb-10 font-dancing-script">
        <Confirmar/>
      </div>
    </>
  )
}

export default App
