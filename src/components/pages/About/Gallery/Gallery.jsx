import React, {useState, useEffect} from 'react';
import './Gallery.css';
import ImageSlider from './ImageSlider/ImageSlider';
import Certificado1 from './assets/Certificado1.png';
import Certificado2 from './assets/Certificado2.png';
import Certificado3 from './assets/Certificado3.png';
import Certificado4 from './assets/Certificado4.png';
import Certificado5 from './assets/Certificado5.png';
import Certificado6 from './assets/Certificado6.png';
import Certificado7 from './assets/Certificado7.png';

const Gallery = () => {
  const slides = [    
    {url: Certificado4, title:'Full-Stack'},
    {url: Certificado3, title:'Front-End'},
    {url: Certificado1, title:'Desarrollo Web '},
    {url: Certificado2, title:'Backend'},
    {url: Certificado5, title:'JavaScript'},
    {url: Certificado6, title:'Raect'},
    {url: Certificado7, title:'Solidity'}
  ]

  const [screenSize, setScreenSize] = useState(getCurrentDimension());

  function getCurrentDimension(){
    return {
      windowWidth: window.innerWidth,
    }
  }
  
  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension())
    }
    window.addEventListener('resize', updateDimension);
    
    return(() => {
        window.removeEventListener('resize', updateDimension);
    })
  }, [screenSize])

  if(screenSize.windowWidth > 700){
    return (
      <section id='gallery'>
          <h1>Certificados</h1>
          <div className='gallery'>
              <ImageSlider slides={slides} parentWidth={screenSize.windowWidth * 0.5} />
          </div>
      </section>
    )
  }else {
    return (
      <section id='gallery'>
          <h1>Certificados</h1>
          <div className='gallery'>
              <ImageSlider slides={slides} parentWidth={screenSize.windowWidth * 0.9} />
          </div>
      </section>
    )
  }
  
}

export default Gallery