import './App.css';
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <div className="app">
      <div className="app-container">
        <Header />
        <AboutMe />
      </div>
    </div>
  );
}

export default App;
