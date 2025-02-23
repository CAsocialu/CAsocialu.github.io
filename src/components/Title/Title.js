import "./Title.css";

export default function Title({ children, small }) {
    return small ? (
        <h3 className="nadpis"><div className="nadpisPozadi"><span>{children}</span></div><span>{children}</span></h3>
    ) : (
        <h1 className="nadpis"><div className="nadpisPozadi"><span>{children}</span></div><span>{children}</span></h1>
    )
}