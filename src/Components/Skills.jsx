const Skills = () => {
    return (
        <div id="Skills" className="p-20 flex flex-col items-center justify-center">
            <h1 className="text-[52px] font-semibold mb-20 leading-normal uppercase text"><span>Skills</span></h1>
            <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 justify-around gap-20 ">
                <h2 data-aos="fade-up" className="text-[20px] flex items-center justify-center font-serif text rounded-2xl h-36 w-44 border-2 border-red-300 b-glow">Python</h2>
                <h2 data-aos="fade-down" className="text-[20px] flex items-center justify-center font-serif text rounded-2xl h-36 w-44 border-2 border-red-300 b-glow">C</h2>
                <h2 data-aos="fade-up" className="text-[20px] flex items-center justify-center font-serif text rounded-2xl h-36 w-44 border-2 border-red-300 b-glow">JavaScript</h2>
                <h2 data-aos="fade-down" className="text-[20px] flex items-center justify-center font-serif text rounded-2xl h-36 w-44 border-2 border-red-300 b-glow">HTML</h2>
                <h2 data-aos="fade-up" className="text-[20px] flex items-center justify-center font-serif text rounded-2xl h-36 w-44 border-2 border-red-300 b-glow">CSS</h2>
            </div>
        </div>
    );
}

export default Skills;