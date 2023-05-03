import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import ERouter from "./router";

function App() {
  return (
    <div className="App">
      
      <NavBar />
      <Banner />
      <Projects />
      <Skills />
      {/* <Contact /> */}
      {/* <ERouter /> */}

      <Footer />
    </div>
  );
}

export default App;
