import React, { useLayoutEffect, useRef } from "react";
import "./Title.css";
import Šmuha from "./smuha.png"
import ŠmuhaAleAsociální from "./smuhaaleasociální.png"

export default function Title({ children, small }) {
    const title = useRef(null), titleSpan = useRef(null);
    useLayoutEffect(() => {
        if (titleSpan) {
            const textWidth = titleSpan.current.offsetWidth;
            if (textWidth) title.current.style.backgroundSize = `${(small ? 1.5 : 2.5) * textWidth}px ${small ? "150%" : "333%"}`;
        }
    }, [children, small]);
    return small ? (
        <h3 className="nadpis" ref={title} style={{
            backgroundImage: `url(${ŠmuhaAleAsociální})`,
            backgroundRepeat: "no-repeat",
            backgroundPositionX: "center",
            backgroundPositionY: "calc(50% + 5px)",
            backgroundSize: "contain",
            padding: "16px 0",
        }}><span ref={titleSpan}>{children}</span></h3>
    ) : (
            <h1 className="nadpis" ref={title} style={{
            backgroundImage: `url(${Šmuha})`,
            backgroundRepeat: "no-repeat",
            backgroundPositionX: "center",
            backgroundPositionY: "calc(50% + 2.5px)",
        }}>
            <span ref={titleSpan}>{children}</span>
        </h1>
    )
}