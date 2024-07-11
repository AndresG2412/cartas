import foto from "../imgs/foto_gabi_1.png";

export default function Main() {
    return (
        <>
            <h1 className="font-dancing-script font-bold md:text-5xl text-center pt-16 pb-12 sm:hidden mx-24 text-4xl">
            INVITACION A MIS 15 AÑOS
            </h1>
            <h1 className="font-dancing-script font-bold text-5xl text-center pt-16 pb-12 hidden sm:block">
            INVITACION A MIS 15 AÑOS
            </h1>

            <div className="relative flex items-center justify-center">
                <img src={foto} alt="gabi" className="md:w-1/2"/>
                <h1 className="absolute bottom-0 text-center font-bold text-4xl mx-20 md:text-5xl p-2">
                    MARIA VICTORIA GAVIRIA BOLAÑOS
                </h1>
            </div>
            <div className="block md:hidden text-center mt-12">
                {/* Contenido solo visible en móviles */}
                <p className="my- font-bold text-3xl mx-24">"El agua pa' las matas</p>
                <p className="my- font-bold text-3xl mx-24">y el jabon pa' la ropa"</p>
            </div>
        </>
    );
}
