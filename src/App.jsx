import Banner from "./Components/Banner/Banner";
import Nav from "./Components/Nav/Nav";
import About from './Components/About/About';
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Favourite from "./Components/Favourite/Favourite";
import { useEffect, useState } from "react";
import { FallingLines } from 'react-loader-spinner';



const App = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  },[])
  return (
    <>
      {
  loading ?
    <div className="bg-red-100 h-[100vh] flex justify-center items-center">
    <FallingLines
      color="#fca5a5"
      width="100"
      visible={true}
      ariaLabel="falling-circles-loading"
    />
  </div>
  :
  <div className="bg-red-100">
    <Nav />
    <Banner />
    <About />
    <Skills />
    <Projects />
    <Favourite />
    <Contact />
    <Footer />
  </div>
}
  </>
  );
}

export default App;