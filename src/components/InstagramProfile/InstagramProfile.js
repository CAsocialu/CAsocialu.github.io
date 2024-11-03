import { useState } from "react";
import "./InstagramProfile.css"

export default function InstagramProfile() {
    const [clickedFollowed, setClickedFollowed] = useState(false), handleFollow = () => setClickedFollowed(true);
    return (
        <header className="igprofile-header">
            <div className="igprofile-profile-picture">
                <img src="/assets/pfpCAsocialu.jpg" alt="" draggable="false" />
            </div>
            <div className="igprofile-info">
                <h2 className="igprofile-username">
                    ceska_strana_asocialu
                    <div className="igprofile-actions">
                        <a className="igprofile-follow-btn" href="https://www.instagram.com/ceska_strana_asocialu/" target="_blank" rel="noreferrer" onClick={handleFollow} style={{ padding: clickedFollowed ? "5px 12.5px 5px 15px" : "5px 15px" }}>{ clickedFollowed ? "Děkujeme! 🤍" : "Sledujte nás!" }</a>
                    </div>
                </h2>
                <div className="igprofile-details">
                    <h1 className="igprofile-full-name">Česká strana asociálů</h1>
                    <p className="igprofile-category">Political Party</p>
                    <p className="igprofile-bio">
                        Největší recesistická strana v ČR!<br />
                        Vznikneme již v roce 2025<br />
                        NE socializaci!<br />
                        NE gravitaci!<br />
                        NE důchodcům!<br />
                        NE socialismu!<br />
                        ANO mikrovlnkám!<br />
                        MÁME LINKTREE
                    </p>
                    <a href="https://linktr.ee/ceska_strana_asocialu" target="_blank" rel="noopener noreferrer" className="igprofile-link">
                        <svg aria-label="Link icon" fill="currentColor" height="12" role="img" viewBox="0 0 24 24" width="12">
                            <title>Link icon</title>
                            <path d="m9.726 5.123 1.228-1.228a6.47 6.47 0 0 1 9.15 9.152l-1.227 1.227m-4.603 4.603-1.228 1.228a6.47 6.47 0 0 1-9.15-9.152l1.227-1.227" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                            <line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="8.471" x2="15.529" y1="15.529" y2="8.471"></line>
                        </svg>
                        linktr.ee/ceska_strana_asocialu
                    </a>
                </div>
            </div>
        </header>
    )
}