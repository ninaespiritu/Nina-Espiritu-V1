import './App.css';
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <div className="app-container">
        <Navbar />
        <Header />
        <AboutMe />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
