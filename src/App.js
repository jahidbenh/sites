
import React from 'react'
import './App.scss';
import Skills from './components/Skills/Skills';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Navigation from './components/navigation/Navigation';
import Experience from './components/Experience/Experience';
import Zoom from 'react-reveal/Zoom';
import Hobbies from './components/hobbies/Hobbies';
import Hobbies2 from './components/hobbies/Hobbies2';


function App() {
  return (
    <body>
      <div class="relative">
      <div class="sticky top-0 bg-slate-300">
        <Header />
      </div>
      <div id="experience" class="flex flex-col justify-center sticky top-0 bg-slate-200  min-h-screen">
      <Zoom>
        <Skills />
      </Zoom>
      </div>
      <div class="sticky top-0 bg-slate-300 min-h-screen flex flex-col justify-center">
      <Zoom>
        <Experience />
      </Zoom>
      </div>
      <div class="sticky top-0 bg-slate-200">
        <Hobbies2 />
      </div> 
      <div class="sticky top-0">
        <Footer />
      </div> 
      </div>
    </body>
  );
}

export default App;
