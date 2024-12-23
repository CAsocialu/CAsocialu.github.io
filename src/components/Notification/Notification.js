import { Link } from 'react-router-dom';
import './Notification.css';

export default function Notification({ title, message, link, isLinkInternal }) {
    return link ?
        isLinkInternal ? (
            <Link to={link}>
                <div className="notificationBanner">
                    <h1>{title}</h1>
                    <p>{message}</p>
                </div>
            </Link>
        ) : (
            <a href={link} target="_blank" rel="noopener noreferrer">
                <div className="notificationBanner">
                    <h1>{title}</h1>
                    <p>{message}</p>
                </div>
            </a>
        ) : (
            <div className="notificationBanner">
                <h1>{title}</h1>
                <p>{message}</p>
            </div>
        )
}