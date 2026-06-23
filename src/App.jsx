import Navbar from "./components/Navbar.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Socials from "./components/Socials.jsx";
import Footer from "./components/Footer.jsx";
import Hero from "./components/Hero.jsx";
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main-layout">
        <div className="left-panel">
          <Hero />
        </div>
        <div className="right-panel">
          <div className="breadcrumb">
            <span className="breadcrumb-active">Media</span>
            <span className="breadcrumb-separator">Lagos, Nigeria</span>
          </div>
          <About />
          <Contact />
          <Socials />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App