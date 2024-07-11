export default function confirmar() {
    return(
        <>
            <div className="text-center font-bold">
                <h1 className="font-bold mx-20 text-4xl md:text-5xl text-center mt-12 mb-32">ESPERAMOS TU CONFIRMACION</h1>
                <div className="mx-20">
                    <h1 className="my-8 text-xl">La asistencia de la confirmacion se tomara en la entrada con Nombre y Apellido</h1>
                    <h1 className="my-8 text-xl">Cada persona tendra una mesa y puesto asignado ademas de su comida incluida</h1>
                    <h1 className="my-8 text-xl">En caso de tener dudas por favor contactar en el mismo boton siguiente y/o para confirmar</h1>
                </div>
                    <button
                    class="border-[3px] border-black my-24 px-8 z-30 py-4 bg-blue-400 rounded-md text-white relative font-semibold font-sans after:-z-20 after:absolute after:h-1 after:w-1 after:bg-blue-800 after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 [text-shadow:3px_3px_2px_#121212;] hover:[text-shadow:2px_2px_2px_#121212] text-2xl"
                    >
                    CONFIRMAR
                    </button>
            </div>
        </>
    )
}