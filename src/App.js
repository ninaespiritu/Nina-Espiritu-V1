import './App.css';
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  return (
    <div className="app">
      <div className="app-container">
        <Header />
        <AboutMe />
        <Portfolio />
        <Contact />
      </div>
    </div>
  );
}

export default App;
