import centro from "../imgs/lugar.png";
import bordet1 from "../imgs/BORDE-T1.png"
import borderecto from "../imgs/borde-recto.png"

export default function Lugar() {
    return (
        <>
            <img src={bordet1} alt="borde_titulo1" className="mx-auto h-10 md:h-auto rotate-180 mt-20"/>
            <h1 className="font-dancing-script font-extrabold text-4xl mx-24 md:text-5xl text-center mt-4 mb-4 md:mb-4">FECHA Y LUGAR DEL EVENTO</h1>
            <img src={bordet1} alt="borde_titulo1" className="mx-auto md:mb-28 mb-12 h-10 md:h-auto"/>

            <div className="md:flex mb-24 justify-center text-center">
                <a href="https://maps.app.goo.gl/SGqs9NUgvuU49Vw26" target="_blank" rel="noopener noreferrer">
                    <img src={centro} alt="img_lugar" className="cursor-pointer w-72 md:w-96 h-72 md:h-96 mx-auto mb-16 md:mb-0"/>
                </a>
                <div className="my-auto md:ml-40">
                    <p className="font-dancing-script font-bold text-2xl md:text-3xl">Pitalito - Huila</p>
                    <img src={borderecto} alt="borde_recto1" className="h-4 md:w-96 mx-auto mb-8"/>
                    <p className="font-dancing-script font-bold text-2xl md:text-3xl">17 de Agosto a las 06:00 PM</p>
                    <img src={borderecto} alt="borde_recto1" className="h-4 md:w-96 mx-auto mb-8"/>
                    <p className="font-dancing-script font-bold text-2xl md:text-3xl">Lugar de eventos 828</p>
                    <img src={borderecto} alt="borde_recto1" className="h-4 md:w-96 mx-auto mb-8"/>
                    <p className="font-dancing-script font-bold text-2xl md:text-3xl">Lluvia de sobres</p>
                    <img src={borderecto} alt="borde_recto1" className="h-4 md:w-96 mx-auto mb-8"/>
                </div>
            </div>
        </>
    );
}
