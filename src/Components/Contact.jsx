const Contact = () => {
    return (
        <div id="Contact" className="p-4 my-8 lg:p-20 flex flex-col items-center justify-center">
            <h2 data-aos="fade-down" className="text-[52px] font-semibold mb-20 leading-normal uppercase text-center">Contact Me</h2>
            <form data-aos="fade-down" action="" className="flex flex-col gap-2 lg:w-1/2 w-full mx-auto">
                <div className="lg:flex gap-6">
                    <input className="w-full my-3 rounded-lg bg-white p-4 border-4 border-x-red-200" type="text" placeholder="Enter your name"/>
                    <input className="w-full my-3 rounded-lg bg-white p-4 border-4 border-x-red-200" type="text" placeholder="Enter your email"/>
                </div>
                <textarea name="" id="" cols="30" rows="10" className="my-3 rounded-lg p-4 border-2 border-x-red-200" placeholder="Write your message"></textarea>
                <a href="mailto:sofiiabovyan@gmail.com">
                    <button className="neno-button shadow-x1 hover:shadow-red-300 text-black border-2 hover:bg-red-200 border-red-200 rounded-lg py-4 px-8 uppercase overflow-hidden mx-auto" type="submit">Submit</button>
                </a>
            </form>
        </div>
    );
}

export default Contact;