import './App.scss';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Destinations from './Components/Destinations/Destinations';
import Footer from './Components/Footer/Footer';
import Middle from './Components/Middle/Middle';
import Portfolio from './Components/Portfolio/Portfolio';
import Questions from './Components/Questions/Questions';
import Reviews from './Components/Reviews/Reviews';


function App() {
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
