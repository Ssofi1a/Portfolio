import img1 from '../assets/ft_libft.png';
import img2 from '../assets/ft_printf.png';
import img3 from '../assets/get.png';
import img4 from '../assets/crud.png';

const Projects = () => {
    return (
        <div id="Projects" className="p-20 flex flex-col items-center justify-center">
            <h1 className="text-[52px] font-semibold mb-20 leading-normal uppercase">Projects</h1>
            <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 justify-around gap-20">
                <img height={600} width={250} data-aos="fade-up" className="rounded-2xl h-36 w-44 border-2 border-black b-glow" src={img1} alt="Project 1" />
                <img height={600} width={250} data-aos="fade-up" className="rounded-2xl h-36 w-44 border-2 border-black b-glow" src={img2} alt="Project 2" />
                <img height={600} width={250} data-aos="fade-up" className="rounded-2xl h-36 w-44 border-2 border-black b-glow" src={img3} alt="Project 3" />
                <img height={600} width={250} data-aos="fade-up" className="rounded-2xl h-36 w-44 border-2 border-black b-glow" src={img4} alt="Project 4" />
            </div>
        </div>
    );
}

export default Projects;
