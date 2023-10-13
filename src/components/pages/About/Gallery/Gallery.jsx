import React, {useState, useEffect} from 'react';
import './Gallery.css';
import ImageSlider from './ImageSlider/ImageSlider';
import Certficado1 from './assets/desarrolloWebCertificado.png';
import Certficado2 from './assets/JSCertificado.png';
import Certficado3 from './assets/ReactCertificado.png';
import Certficado4 from './assets/platziCertificado.png';

const Gallery = () => {
  const slides = [
    {url: Certficado1, title:'Desarrollo Web Certificate'},
    {url: Certficado2, title:'JavaScript Certificate'},
    {url: Certficado3, title:'React Certificate'},
    {url: Certficado4, title:'Solidity Certificate'}
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