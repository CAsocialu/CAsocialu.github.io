import React from "react";
import "./Title.css";

export default function Title({ children, small }) {
    return small ? (
        <h3 className="nadpis"><span>{children}</span></h3>
    ) : (
        <h1 className="nadpis"><span>{children}</span></h1>
    )
}