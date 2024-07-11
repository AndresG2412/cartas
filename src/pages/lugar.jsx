import centro from "../imgs/lugar.png";

export default function Lugar() {
    return (
        <>
            <h1 className="font-bold text-4xl mx-24 md:text-5xl text-center mt-12 mb-20 md:mb-28">FECHA Y LUGAR DEL EVENTO</h1>
            <div className="md:flex mb-24 justify-center text-center">
                <a href="https://maps.app.goo.gl/SGqs9NUgvuU49Vw26" target="_blank" rel="noopener noreferrer" className="flex justify-center w-full">
                    <img src={centro} alt="img_lugar" className="border-4 border-black rounded-2xl cursor-pointer w-1/2"/>
                </a>
                <div className="md:ml-40">
                    <p className="my-12 font-bold text-2xl md:text-3xl">Pitalito - Huila</p>
                    <p className="my-12 font-bold text-2xl md:text-3xl">17 de Agosto a las 06:00 PM</p>
                    <p className="my-12 font-bold text-2xl md:text-3xl">Lugar de eventos 828</p>
                    <p className="my-12 font-bold text-2xl md:text-3xl">Lluvia de sobres</p>
                </div>
            </div>
        </>
    );
}
