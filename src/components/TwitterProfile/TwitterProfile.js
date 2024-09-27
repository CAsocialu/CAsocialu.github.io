import React from 'react';
import './TwitterProfile.css'

function TwitterProfile() {
    return (
        <div className="twtprofile-profile-container">
            <div className="twtprofile-profile-header">
                <img
                    src="https://pbs.twimg.com/profile_images/1808894731323068418/FuzEA1mW_200x200.jpg"
                    alt="PFP"
                    className="twtprofile-profile-photo" />
                <div className="twtprofile-profile-actions">
                    <a className="twtprofile-follow-btn" href="https://x.com/CAsocialu" target='_blank' rel='noreferrer' onClick={() => document.querySelector("input#twitterFollowButton").checked = true}><input type='radio' hidden id='twitterFollowButton'/></a>
                </div>
            </div>
            <div className="twtprofile-profile-info">
                <h1>Česká Strana Asociálů</h1>
                <p className="twtprofile-username">@CAsocialu</p>
                <p className="twtprofile-description">
                    Česká Strana Asociálů je rozhodně existující stranou, která chce pro česko jen to dobré. Třeba zrušit gravitaci či vystoupení z r/2vysegrad4you
                </p>
                <div className="twtprofile-profile-details">
                    <span>
                        <svg viewBox="0 0 24 24">
                            <path d="M12 7c-1.93 0-3.5 1.57-3.5 3.5S10.07 14 12 14s3.5-1.57 3.5-3.5S13.93 7 12 7zm0 5c-.827 0-1.5-.673-1.5-1.5S11.173 9 12 9s1.5.673 1.5 1.5S12.827 12 12 12zm0-10c-4.687 0-8.5 3.813-8.5 8.5 0 5.967 7.621 11.116 7.945 11.332l.555.37.555-.37c.324-.216 7.945-5.365 7.945-11.332C20.5 5.813 16.687 2 12 2zm0 17.77c-1.665-1.241-6.5-5.196-6.5-9.27C5.5 6.916 8.416 4 12 4s6.5 2.916 6.5 6.5c0 4.073-4.835 8.028-6.5 9.27z"></path>
                        </svg> Bratislavice nad Hnisou
                    </span>
                    <a href="https://linktr.ee/ceska_strana_asocialu" target="_blank" rel="noopener noreferrer">
                        <svg viewBox="0 0 24 24">
                            <path d="M18.36 5.64c-1.95-1.96-5.11-1.96-7.07 0L9.88 7.05 8.46 5.64l1.42-1.42c2.73-2.73 7.16-2.73 9.9 0 2.73 2.74 2.73 7.17 0 9.9l-1.42 1.42-1.41-1.42 1.41-1.41c1.96-1.96 1.96-5.12 0-7.07zm-2.12 3.53l-7.07 7.07-1.41-1.41 7.07-7.07 1.41 1.41zm-12.02.71l1.42-1.42 1.41 1.42-1.41 1.41c-1.96 1.96-1.96 5.12 0 7.07 1.95 1.96 5.11 1.96 7.07 0l1.41-1.41 1.42 1.41-1.42 1.42c-2.73 2.73-7.16 2.73-9.9 0-2.73-2.74-2.73-7.17 0-9.9z"></path>
                        </svg> linktr.ee/ceska_strana_asocialu
                    </a>
                    <span>
                        <svg viewBox="0 0 24 24">
                            <path d="M7 4V3h2v1h6V3h2v1h1.5C19.89 4 21 5.12 21 6.5v12c0 1.38-1.11 2.5-2.5 2.5h-13C4.12 21 3 19.88 3 18.5v-12C3 5.12 4.12 4 5.5 4H7zm0 2H5.5c-.27 0-.5.22-.5.5v12c0 .28.23.5.5.5h13c.28 0 .5-.22.5-.5v-12c0-.28-.22-.5-.5-.5H17v1h-2V6H9v1H7V6zm0 6h2v-2H7v2zm0 4h2v-2H7v2zm4-4h2v-2h-2v2zm0 4h2v-2h-2v2zm4-4h2v-2h-2v2z"></path>
                        </svg> Joined May 2022
                    </span>
                </div>
            </div>
        </div>
    );
}

export default TwitterProfile;
