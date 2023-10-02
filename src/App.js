import { useEffect } from 'react';
import './App.scss';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Destinations from './Components/Destinations/Destinations';
import Footer from './Components/Footer/Footer';
import Middle from './Components/Middle/Middle';
import Portfolio from './Components/Portfolio/Portfolio';
import Questions from './Components/Questions/Questions';
import Reviews from './Components/Reviews/Reviews';
import Aos from "aos";
import "aos/dist/aos.css"


function App() {
  useEffect(() => {
    Aos.init({duration:2000})
  },[])
  return (
    <>
    <header>
      <Navbar/>
    </header>
    <main>
      <Home/>
      <Middle/>
      <Destinations/>
      <Portfolio/>
      <Reviews/>
      <Questions/>
    </main>
      <Footer/>
    </>
  );
}

export default App;
