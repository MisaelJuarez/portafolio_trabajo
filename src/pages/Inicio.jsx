import Hero from "../assets/components/Hero";
import SobreMi from "../assets/components/SobreMi";
import Habilidades from "../assets/components/Habilidades";
import Proyectos from "../assets/components/Proyectos";
import Contactame from "../assets/components/Contactame";

const Inicio = () => {
    return(
        <div className="">
            <Hero />
            <SobreMi />
            <Habilidades />
            <Proyectos />
            <Contactame />
        </div>
    )
}

export default Inicio;