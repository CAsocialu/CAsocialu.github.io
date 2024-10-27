import "./Fotogalerie.css";
import { Helmet } from "react-helmet";
import Title from "../../components/Title/Title.js";

export default function Fotogalerie() {
    return (
        <div id="galleryContent">
            <Helmet>
                <title>Fotogalerie · ČSA</title>
            </Helmet>
            <Title>Sisinina Galerie Slávy</Title>
            <h3>Kaming sůn :3</h3>
        </div>
    )
}