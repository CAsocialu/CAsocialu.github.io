import React, { useEffect } from "react";
import "./Title.css";
import Šmuha from "./smuha.png"

export default function Title({children}) {
    useEffect(() => {
        const h1 = document.querySelector('div#content h1');
        const h1Span = h1.querySelector('span');
        console.log(h1, h1Span, h1.style.backgroundSizeX)
        if (h1Span) {
            const textWidth = h1Span.offsetWidth;
            if (textWidth) h1.style.backgroundSize = `${(2.5) * textWidth}px 333%`;
        }
    }, [children]);
    return (
        <h1 className="nadpis" style={{
            backgroundImage: `url(${Šmuha})`,
            backgroundRepeat: "no-repeat",
            backgroundPositionX: "center",
            backgroundPositionY: "calc(50% + 2.5px)",
        }}>
            <span>{children}</span>
        </h1>
    )
}