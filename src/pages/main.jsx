import foto from "../imgs/foto_gabi_3.png";
import bordet1 from "../imgs/BORDE-T1.png"
import bordenombre from "../imgs/borde-nombre.png"

export default function Main() {
    return (
        <>
            <img src={bordet1} alt="borde_titulo1" className="mx-auto h-10 md:h-auto rotate-180 mt-20"/>
            <h1 className="font-dancing-script font-bold text-5xl text-center mt-4 mb-4 mx-12 md:mx-auto">
            INVITACION A MIS 15 AÑOS
            </h1>
            <img src={bordet1} alt="borde_titulo1" className="mx-auto md:mb-20 mb-12 h-10 md:h-auto"/>
            
            <img src={foto} alt="gabi" className="md:w-1/3 mx-auto w-96 drop-shadow-custom"/>
            <h1 className="font-dancing-script text-center font-bold text-3xl md:text-5xl m-2 mb-4 md:mb-32 hidden md:block">
            Maria Victoria Gaviria Bolaños
</h1>
<h1 className="font-dancing-script text-center font-bold text-3xl md:text-5xl m-2 mb-0 md:mb-32 block md:hidden">
    Maria Victoria
</h1>
<h1 className="font-dancing-script text-center font-bold text-3xl md:text-5xl m-2 md:mb-32 block md:hidden">
    Gaviria Bolaños
</h1>
            <img src={bordenombre} alt="borde_nombre" className="mx-auto mb-20 md:hidden w-1/2"/>
            <div className="block md:hidden font-dancing-script font-bold text-center mt-12">
                {/* Contenido solo visible en móviles */}
                <p className="my- font-bold text-3xl mx-24">"Con gran emoción y alegría, dejo atrás la niñez para iniciar una nueva etapa como mujer y te invito a formar parte de mi celebración de 15 años y compartir este momento tan especial."</p>
            </div>
        </>
    );
}
