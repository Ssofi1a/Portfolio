const Favourite = () => {
    return (
        <div id="Favourite" className="">
            <h2 data-aos="fade-down" className="text-[52px] font-semibold mb-20 leading-normal uppercase text-center"> My Favourites</h2>
            <div className="mb-12">
                <h3 className="text-2xl font-semibold mb-4 text-gray-700 text-center">Favourite Music</h3>
                    <audio controls className="w-full md:w-2/3 mx-auto block">
                        <source src="/public/Perfect.mp3" type="audio/mpeg"/>
                    </audio>
            </div>
            <div data-aos="fade-down" className="mb-12">
                <h3 className="text-2xl font-semibold mb-4 text-gray-700 text-center">Favourite Quote</h3>
                    <blockquote className="italic border-l-4 border-red-400 pl-4 text-gray-700 md:w-2/3 mx-auto text-[25px]">
                        "The best preparation for good work tomorrow is to do good work today" – Elbert Hubbard
                    </blockquote>
            </div>
            <div data-aos="fade-down" className="mb-12">
                <h3 className="text-2xl font-semibold mb-4 text-gray-700 text-center">Favourite TV-Series</h3>
                <div className="relative max-w-md mx-auto rounded-lg overflow-hidden shadow-lg border border-gray-300">
                    <video controls className="w-full h-auto">
                        <source src="/GOT.mp4" type="video/mp4" />
                    </video>
                </div>
                <p className="text-center text-gray-600 mt-4">The "Game of Thrones" intro is one of my favorite parts of the show. As soon as the iconic music begins, I get swept up into the world of Westeros.</p>
            </div>
            <div data-aos="fade-down" className="mb-12">
                <h3 className="text-2xl font-semibold mb-4 text-gray-700 text-center">Favourite Book</h3>
                <div className="bg-gray-100 p-6 rounded-lg shadow-md md:w-2/3 mx-auto">
                <p className="text-black"><strong>Title:</strong>The Count of Monte Cristo</p>
                <p className="text-black mt-2">A book that changed my perspective on life.</p>
            </div>
            </div>
        </div>
    );
}
export default Favourite;