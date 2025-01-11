import './StartovacTier.css';

export default function StartovacTier({ reward, price, description, link, image, finished }) {
    const openStartovacPopup = (e) => {
        e.preventDefault();
        const width = (window.outerWidth / 2);
        const height = (window.outerHeight / 2);
        const left = (window.outerWidth - width) / 2;
        const top = (window.outerHeight - height) / 2;

        window.open(
            link,
            'StartovacWindow',
            `width=${width},height=${height},left=${left},top=${top},scrollbars=1,resizable=1`
        );
    };

    return (
        <div className="startovac-tier">
            <div className="tier-header" style={{backgroundImage: `url(${image})`, backgroundSize: '100% 100%', backgroundPosition: 'center'}}>
                <img src={image} alt={reward} />
                <div className="tier-header-content">
                    <div className="tier-price">{price} Kč</div>
                    <div className="tier-title">{reward}</div>
                </div>
            </div>
            <div className="tier-content">
                <p className="tier-description">{description}</p>
                <div className="tier-footer">
                    <span className="tier-footer-notice">Počet odměn není omezen</span>
                    {!finished && <a href={link} className="tier-button" onClick={openStartovacPopup}>Zvolit odměnu</a>}
                </div>
            </div>
        </div>
    );
}
