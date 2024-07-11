import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Nav from './components/Nav';
import Banner from './components/Banner';
import Photo from './components/Photo'
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Nav />
      <Banner />
      <Photo/>
      <About/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
