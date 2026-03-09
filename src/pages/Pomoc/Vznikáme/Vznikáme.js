import "./Vznikáme.css";
import { useLayoutEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import begginingtitle from "../../../images/Titles/web_soucast_nadpis.png";

export function VznikámeTitle() {
    return <></>;
}

export function VznikámeNotifikace() {
    return <></>;
}

export default function Vznikáme() {
    const iframeRef = useRef(null);

    useLayoutEffect(() => {
        const handleMessage = (event) => {
            if (event.origin !== "https://socializace.asocialove.cz") return;
            if (event.data?.type === "SET_HEIGHT") {
                iframeRef.current.style.height = event.data.height + "px";
            }
        };

        window.addEventListener("message", handleMessage);

        const sendGetHeight = () => {
            if (iframeRef.current?.contentWindow) {
                iframeRef.current.contentWindow.postMessage({ type: "GET_HEIGHT" }, "https://socializace.asocialove.cz");
            }
        };

        sendGetHeight();
        window.addEventListener("resize", sendGetHeight);

        const intervalId = setInterval(sendGetHeight, 1000);

        return () => {
            window.removeEventListener("resize", sendGetHeight);
            window.removeEventListener("message", handleMessage);
            clearInterval(intervalId);
        };
    }, []);

    return (
        <div id="beginningContent">
            <Helmet>
                <title>Chci být součástí! · ČSA</title>
                <meta name="description" content="ČSA je recesistická politická strana, v tento moment chystající se vzniknout a poté začít nabírat členy. Více než strana je ČSA internetová mikrokomunita, kde každý člověk náhodně z internetu může přispět svým dílem." />
                <meta property="og:title" content="Chci být součástí! · ČSA" />
                <meta property="og:description" content="ČSA je recesistická politická strana, v tento moment chystající se vzniknout a poté začít nabírat členy. Více než strana je ČSA internetová mikrokomunita, kde každý člověk náhodně z internetu může přispět svým dílem." />
                <meta property="og:image" content={`${process.env.PUBLIC_URL}/assets/bannerNECHCETEMIPODEPSATPETICI.png`} />
                <meta property="og:url" content="https://www.ceskastranaasocialu.cz/pomoc/vznikame" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Chci být součástí! · ČSA" />
                <meta name="twitter:description" content="ČSA je recesistická politická strana, v tento moment chystající se vzniknout a poté začít nabírat členy. Více než strana je ČSA internetová mikrokomunita, kde každý člověk náhodně z internetu může přispět svým dílem." />
                <meta name="twitter:image" content={`${process.env.PUBLIC_URL}/assets/bannerNECHCETEMIPODEPSATPETICI.png`} />
            </Helmet>
            <div className="begginingTitle">
                <img src={begginingtitle} alt="" draggable="false"></img>
            </div>
            <div id="beginningContentWrapper">
                <span className="sectionTitle">Přihláška do Strany</span>
                <iframe ref={iframeRef} src="https://socializace.asocialove.cz/embed/membership" allowtransparency="true" title="Přihlašovací formulář do České Strany Asociálů" />
            </div>
        </div>
    );
}
