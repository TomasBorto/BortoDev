import React, { useEffect } from 'react';
import './ImageSlider.css';
import { useState, useRef } from 'react';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa6'

const ImageSlider = ({ slides, parentWidth }) => {

    const timeRef = useRef(null);

    const [index, SetIndex] = useState(0)

    const goToPrev = () => {
        const isFirstSlide = index === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : index - 1;
        SetIndex(newIndex);
    }

    const goToNext = () => {
        const isLastSlide = index === slides.length - 1;
        const newIndex = isLastSlide ? 0 : index + 1;
        SetIndex(newIndex);
    }

    const getSlideStylesBackground = (slideIndex) => ({
        backgroundImage: `url(${slides[slideIndex].url})`,
        width:`${parentWidth}px`
    })

    const slideContainer = {
        display: `flex`,
        height: `100%`,
        transition: `transform ease-out 0.3s`,
    }

    const getSlideContainer = {
        ...slideContainer,
        width: parentWidth * slides.length,
        transform :`translateX(${-index * parentWidth}px)`
    }

    const slideContainerOverflow = {
        overflow: "hidden",
        height: "100%",
    }

    useEffect(() => {
        if(timeRef.current){
            clearTimeout(timeRef.current)
        }
        timeRef.current = setTimeout(()=>{
            goToNext();
        }, 3000);

        return() => clearTimeout(timeRef.current);
    }, [goToNext])

    return (
      <div className='slider'>
        <div className={(index == 3) ? "left-arrow-black" : "left-arrow" }   onClick={goToPrev}><FaChevronLeft /></div>
        <div className={(index == 3) ? "right-arrow-black" : "right-arrow" } onClick={goToNext}><FaChevronRight /></div>
        <div style={slideContainerOverflow}>
            <div style={getSlideContainer}>
                {slides.map((_, slideIndex) => (
                    <div key={slideIndex} className='slide' style={getSlideStylesBackground(slideIndex)}></div>
                ))}
            </div>
        </div>
        {/* style={{ backgroundImage: `url(${slides[index].url})`}} */}
      </div>
    )
}

export default ImageSlider