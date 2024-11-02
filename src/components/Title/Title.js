import React, { useLayoutEffect } from "react";
import "./Title.css";
import Šmuha from "./smuha.png"
import ŠmuhaAleAsociální from "./smuhaaleasociální.png"

export default function Title({ children, small }) {
    const TitleID = "title-" + Math.round(Math.random() * 1000000000000000).toString(36);
    useLayoutEffect(() => {
        const title = document.querySelector(`#${TitleID}`);
        const titleSpan = title.querySelector('span');
        if (titleSpan) {
            const textWidth = titleSpan.offsetWidth;
            if (textWidth) title.style.backgroundSize = `${(small ? 1.5 : 2.5) * textWidth}px ${small ? "150%" : "333%"}`;
        }
    }, [children, small, TitleID]);
    return small ? (
        <h3 className="nadpis" id={ TitleID } style={{
            backgroundImage: `url(${ŠmuhaAleAsociální})`,
            backgroundRepeat: "no-repeat",
            backgroundPositionX: "center",
            backgroundPositionY: "calc(50% + 5px)",
            backgroundSize: "contain",
            padding: "16px 0",
        }}><span>{children}</span></h3>
    ) : (
            <h1 className="nadpis" id={ TitleID } style={{
            backgroundImage: `url(${Šmuha})`,
            backgroundRepeat: "no-repeat",
            backgroundPositionX: "center",
            backgroundPositionY: "calc(50% + 2.5px)",
        }}>
            <span>{children}</span>
        </h1>
    )
}