import { VznikámePack } from "../pages";
import './Pomoc.css'
import { Helmet } from "react-helmet-async";
import Title from "../../components/Title/Title";
export default function Pomoc({ page = VznikámePack }) {
    return (
        <div id="helpContent">
            <Helmet>
                <title>Chci pomoci · ČSA</title>
                <meta name="description" content="ČSA je recesistická politická strana, v tento moment chystající se vzniknout a poté začít nabírat členy. Více než strana je ČSA internetová mikrokomunita, kde každý člověk náhodně z internetu může přispět svým dílem." />
                <meta property="og:title" content="Chci pomoci · ČSA" />
                <meta property="og:description" content="ČSA je recesistická politická strana, v tento moment chystající se vzniknout a poté začít nabírat členy. Více než strana je ČSA internetová mikrokomunita, kde každý člověk náhodně z internetu může přispět svým dílem." />
                <meta property="og:image" content={`${process.env.PUBLIC_URL}/assets/bannerDEJTENÁMVŠECHNYVAŠEPRACHY.png`} />
                <meta property="og:url" content="https://www.ceskastranaasocialu.cz/pomoc" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Chci pomoci · ČSA" />
                <meta name="twitter:description" content="ČSA je recesistická politická strana, v tento moment chystající se vzniknout a poté začít nabírat členy. Více než strana je ČSA internetová mikrokomunita, kde každý člověk náhodně z internetu může přispět svým dílem." />
                <meta name="twitter:image" content={`${process.env.PUBLIC_URL}/assets/bannerDEJTENÁMVŠECHNYVAŠEPRACHY.png`} />
            </Helmet>
            {page.Title ? (<page.Title />) : (<Title>Chci pomoci</Title>)}
            {page.NotificationsStack ? (<page.NotificationsStack />) : (<></>)}
            <div id="helpContentWrapper">
                {<page.Page />}
            </div>
        </div>
    )
}
