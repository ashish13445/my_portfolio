import React,{useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { Route } from 'react-router-dom';
import Home from './home';
import About from './about';
import Experience from './experience';
import Skills from './skills';
import Projects from './projects';
import Footer from './footer';


import './App.css';

function App() {

  useEffect(()=> {
    AOS.init(
      {
        duration: 1000
      }
    )

  },[])

  return (
    <div className="App ">
      <Route path='/' exact={true}>
        <Home />
        <About />
        <Experience />
        <Skills />
        <Projects/>
        <Footer />
      </Route>

      <Route path='/about' >
        <About />
      </Route>

      <Route path='/experience' >
        <Experience />
      </Route>

      <Route path='/skills' >
        <Skills />
      </Route>









      <Route path='/projects' >
        <Projects />
      </Route>

      <Route path='/footer' >
        <Footer />
      </Route>







    </div>

















  );
}

export default App;
