import { useState, useEffect } from 'react';
import './App.scss';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Work from './Components/Work/Work';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact'; 

function App() {

  const [show, setShow] = useState(true);
  const [last, setLast] = useState(window.pageYOffset);

  useEffect(() => {
    window.onscroll = function() {
      var currentScrollPos = window.pageYOffset;
        if (last > currentScrollPos) {
          setShow(true)
        } else {
         setShow(false);
        }
        setLast(currentScrollPos);
      }
  })

  return (
    <div>
      <Header show={show} />
      <Hero />
      <About />
      <Work />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
