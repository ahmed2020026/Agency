import { projects } from "../assets/assets"
import Cart from "./Cart"
import HeaderSec from "./HeaderSec"

const Projects = () => {
    return (
        <div className="container">
            <div className="flex flex-col items-center">
                <HeaderSec head="Our latest work" disc="From strategy to execution, we craft digital solutions that move your business forward." />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 mb-10">
                {projects.map((project,index) => (
                    <div key={index} data-aos="zoom-in"
                        data-aos-delay={`${index*200}`}>
                        <Cart project={project} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects