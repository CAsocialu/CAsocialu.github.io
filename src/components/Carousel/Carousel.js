import React, { useState, useEffect } from 'react';
import "./Carousel.css"

export default function Carousel(props) {
    const { children, show } = props;
    const [currentIndex, setCurrentIndex] = useState(0);
    const [length, setLength] = useState(children.filter(child => child !== false).length);
    const [touchPosition, setTouchPosition] = useState(null);
    const [autoScrollEnabled, setAutoScrollEnabled] = useState(true);

    const handleTouchStart = (e) => {
        const touchDown = e.touches[0].clientX;
        setTouchPosition(touchDown);
    }

    const handleTouchMove = (e) => {
        const touchDown = touchPosition;
    
        if (touchDown === null) {
            return;
        }
    
        const currentTouch = e.touches[0].clientX;
        const diff = touchDown - currentTouch;
    
        if (diff > 5) {
            next();
        }
    
        if (diff < -5) {
            prev();
        }
    
        setTouchPosition(null);
        setAutoScrollEnabled(false);
        setTimeout(() => {
            setAutoScrollEnabled(true);
        }, 500);
    }

    const next = () => {
        if (currentIndex < (length - show)) {
            setCurrentIndex(prevState => prevState + 1);
        } else {
            setCurrentIndex(0);
        }
    }
    
    const prev = () => {
        setAutoScrollEnabled(false);
        if (currentIndex > 0) {
            setCurrentIndex(prevState => prevState - 1);
        } else {
            setCurrentIndex(length - show);
        }
        setTimeout(() => {
            setAutoScrollEnabled(true); // re-enable auto scroll after a short delay
          }, 500);
    }

    useEffect(() => {
        setLength(children.filter(child => child !== false).length);
    }, [children]);

    useEffect(() => {
        if (autoScrollEnabled) {
          const intervalId = setInterval(next, 5000);
          return () => {
            clearInterval(intervalId);
          };
        }
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [autoScrollEnabled, currentIndex, length]);

    return (
        <div className='carousel-container'>
            <div className="carousel-wrapper">
                <button className="left-arrow" onClick={prev}>
                    &lt;
                </button>
                <div className="carousel-content-wrapper" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
                    <div
                        className="carousel-content"
                        style={{ transform: `translateX(-${currentIndex * 100 / show}%)`, "--show": show }}
                    > 
                        {children.filter(child => child !== false).map((child, index) => (
                            <div key={index} className="carousel-content-package" style={{ "--carousel-id": index }}>
                                {child}
                            </div>
                        ))}
                    </div>
                </div>
                <button className="right-arrow" onClick={next}>
                    &gt;
                </button>
            </div>
        </div>
    )
}
