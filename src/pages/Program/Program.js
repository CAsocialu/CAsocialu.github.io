import './Program.css';
import { Helmet } from 'react-helmet-async';
import Title from '../../components/Title/Title';


export default function Program() {
    const programEntries = [
        (<>Snížit ministerstvo na jedno – Ministerstvo Předstírání Práce</>),
        (<>O nových zákonech by rozhodovala hra v <i>Člověče, nezlob se!</i></>),
        (<>Manželství pouze pro jednu osobu</>),
        (<>Povolit všechny drogy</>),
        (<>Řešení bytové krize žitím v jeskyních</>),
        (<>Podpora ekonomické recese, protože sranda musí být</>),
        (<>Převedeme hlavní město zpět do Levého Hradce</>),
        (<>Zrušíme hlavní město</>),
        (<>Digitalizujeme stát. Úřad bude <i>Discord</i> server, stavební řízení přes <i>Minecraft</i></>),
        (<>Snížit počet krajů na jeden - Liberecký</>),
        (<>Snížení počtu obcí na jednu</>),
        (<>Každá budova bude svoje vlastní obec</>),
        (<>Zrušíme stáří</>),
        (<>Přejmenujeme všechny ulice na „Cimrmanova“</>),
        (<>Peníze budou zdarma</>),
        (<>Zrušíme gravitaci</>),
        (<>Dobytí Slovenska, Podkarpadské Rusi, Lužického Srbska, Královce, Slezska, Jiříkova, Grónska a Dalmácie</>),
        (<>Každou válku vyřešíme hodem mincí</>),
        (<>Pivo poteče z kohoutků</>),
        (<>Znělka z Kouzelné Školky jako státní hymna</>)
    ];
    return (
        <div id="programmeContent">
            <Helmet>
                <title>Program · ČSA</title>
                <meta name="description" content="ČSA je recesistická politická strana, v tento moment chystající se vzniknout a poté začít nabírat členy. Více než strana je ČSA internetová mikrokomunita, kde každý člověk náhodně z internetu může přispět svým dílem." />
                <meta property="og:title" content="Program · ČSA" />
                <meta property="og:description" content="ČSA je recesistická politická strana, v tento moment chystající se vzniknout a poté začít nabírat členy. Více než strana je ČSA internetová mikrokomunita, kde každý člověk náhodně z internetu může přispět svým dílem." />
                <meta property="og:image" content={`${process.env.PUBLIC_URL}/assets/banner.png`} />
                <meta property="og:url" content="https://www.ceskastranaasocialu.cz/#/path" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Program · ČSA" />
                <meta name="twitter:description" content="ČSA je recesistická politická strana, v tento moment chystající se vzniknout a poté začít nabírat členy. Více než strana je ČSA internetová mikrokomunita, kde každý člověk náhodně z internetu může přispět svým dílem." />
                <meta name="twitter:image" content={`${process.env.PUBLIC_URL}/assets/banner.png`} />
            </Helmet>
            <Title>Program</Title>
            <ul>
                {programEntries.map((entry, index) => (
                    <li key={index}>{entry}</li>
                ))}
            </ul>
        </div>
    )
}