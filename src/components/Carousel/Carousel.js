import React, { useState, useEffect } from 'react';
import "./Carousel.css"

export default function Carousel(props) {
    const { children, show } = props;

    // ...
    const [currentIndex, setCurrentIndex] = useState(0)
    const [length, setLength] = useState(children.length)

    const [touchPosition, setTouchPosition] = useState(null)
    // ...
    const handleTouchStart = (e) => {
        const touchDown = e.touches[0].clientX
        setTouchPosition(touchDown)
    }

    const handleTouchMove = (e) => {
        const touchDown = touchPosition
    
        if(touchDown === null) {
            return
        }
    
        const currentTouch = e.touches[0].clientX
        const diff = touchDown - currentTouch
    
        if (diff > 5) {
            next()
        }
    
        if (diff < -5) {
            prev()
        }
    
        setTouchPosition(null)
    }

    const next = () => {
        if (currentIndex < (length - 1)) {
            setCurrentIndex(prevState => prevState + 1)
        } else {
            setCurrentIndex(0)
        }
    }
    
    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevState => prevState - 1)
        } else {
            setCurrentIndex(length - 1)
        }
    }

    // Set the length to match current children from props
    useEffect(() => {
        setLength(children.length)
    }, [children])
    // ...

    return (
        <div className='carousel-container'>
            <div className="carousel-wrapper">
                {/* You can alwas change the content of the button to other things */}
                <button className="left-arrow" onClick={prev}>
                    &lt;
                </button>
                <div className="carousel-content-wrapper" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
                    <div
                        className="carousel-content"
                        style={{ transform: `translateX(-${currentIndex * 100 / show}%)`, "--show": show }}
                    > 
                        {children.map((child, index) => (
                            <div key={index} className="carousel-content-package">
                                {child}
                            </div>
                        ))}
                    </div>
                </div>
                {/* You can alwas change the content of the button to other things */}
                <button className="right-arrow" onClick={next}>
                    &gt;
                </button>
            </div>
        </div>
    )
}