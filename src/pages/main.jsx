import foto from "../imgs/foto_gabi_1.png"

export default function main() {
    return(
        <>
            <h1 className="font-dancing-script font-bold text-5xl text-center pt-16 pb-12">INVITACION A MIS 15 AÑOS</h1>
            <div className="relative flex items-center justify-center">
            <img src={foto} alt="gabi" className="w-1/2"/>
            <h1 className="absolute bottom-8 text-center font-bold text-5xl p-2">
                MARIA VICTORIA GAVIRIA BOLAÑOS
            </h1>
            </div>
        </>
    )
}