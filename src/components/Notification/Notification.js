import { Link } from "react-router-dom";
import "./Notification.css";

export default function Notification({ title, message, link, isLinkInternal, style, contentStyle }) {
    return link ? (
        isLinkInternal ? (
            <Link to={link} className="notificationContainer" style={style}>
                <div className="notificationBanner" style={contentStyle}>
                    <h1>{title}</h1>
                    <p>{message}</p>
                </div>
            </Link>
        ) : (
            <a href={link} className="notificationContainer" target="_blank" rel="noopener noreferrer" style={style}>
                <div className="notificationBanner" style={contentStyle}>
                    <h1>{title}</h1>
                    <p>{message}</p>
                </div>
            </a>
        )
    ) : (
        <div className="notificationBanner notificationContainer" style={{ ...style, ...contentStyle }}>
            <h1>{title}</h1>
            <p>{message}</p>
        </div>
    );
}
