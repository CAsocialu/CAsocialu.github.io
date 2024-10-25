import './ImageWithText.css'
export default function ImageWithText({ alt, src, style }) {
    return (
        <div className="image-container" data-alt={alt} style={style}>
            <img src={src} alt={alt} style={style} />
        </div>
    )
}