import logo from './logo.svg';
import './App.css';
import './small.css'
import {Landing} from './components/Landing'
import { Nav } from './components/Nav';
import { About } from './components/About';
import { Slides } from './components/Slides';
import { Projects } from './components/Projects';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';

function App() {
  return (
    <div>
      <Nav/>
      <Landing/>
      <About/>
      <Projects/>

      <Slides/>
      <Testimonials/>
      <Contact/>

    </div>
  );
}

export default App;
