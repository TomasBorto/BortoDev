import React,{useState, useEffect} from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import Home from './components/pages/Home/Home.jsx';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Proyectos from './components/pages/Proyectos/Proyectos';
import Service from './components/pages/Service/Service';
import About from './components/pages/About/About';
import Footer from './components/Footer/Footer';

function App() {

  // const [currentPath, setCurrentPath] = useState(getCurrentPath());

  // function getCurrentPath(){
  //   return {
  //     currentPath: window.location.pathname,
  //   }
  // }

  // useEffect(() => {

  //   window.addEventListener('click', updatePath);

  //   return(() => {
  //       window.removeEventListener('click', updatePath);
  //   })
  // }, [currentPath])

  // const updatePath = () => {
  //   setCurrentPath(getCurrentPath())
  // }

  const currentPath = window.location.pathname;

  // const backgroundRef = useRef()

  if(currentPath === '/' || currentPath === '/about'){
    console.log('hola')
    document.body.classList.add('background-earth')
  }else if(currentPath === '/proyectos' || currentPath === '/servicios'){
    document.body.classList.add('background-mars')
  }

  return(
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/proyectos' component={Proyectos} />
        <Route path='/servicios' component={Service} />
        <Route path='/about' component={About} />
      </Switch>
      <Footer />
    </Router>
  )
}

export default App;
