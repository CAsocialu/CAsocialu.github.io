import "./Program.css";
import { Helmet } from "react-helmet-async";
import Title from "../../components/Title/Title";

import programmeTitle from "../../images/Titles/web_program_nadpis.png";

export default function Program() {
    const programEntries = {
        2022: ["Zrušení senátu", "Zrušení posranecké sněmovny", "Zrušení gravitace", "Vystoupení z EU", "Vystoupení z V4", "Vystoupení z NATO", "Vystoupení z r/2visegrad4you", "Zavedení trestní odpovědnosti pro Smrt", "Celkové zrušení smrti", "Podpora Evropské unie ve zrušení českého jazyku", "Zavedení minimálního smrtelného záření pro mikrovlnky", "Boj proti socialismu", "Podpora ANO a SPD ve zrušení demokracie", "Odkolonizování země", "Popravy extrovertů", "Náboženství On-line", "Odnětí svobody za psychické nemoci (Zvláště pak schizofrenie)"],

        2023: ["ČR bude jediná země v EU a NATO", "Uděláme z visegrádské čtyřky visegrádskou jedničku", "Vývoj atomové zbraně velký krtkus", "Připojení Královce, Slezska, Slovenska, Lužického Srbska a Podkarpatské Rusi k ČR", "Zrušení gravitace (stále)", "Zrušení České republiky", "Převelení celé armády do world of tanks", "Zavést odstup 2 metry již napořád", "Szuszený czeskí gramatyki", "Domácí vězení pro krajně pravicové politiky v mešitě", "Zavedení jemného domácího produktu", "Výměna vody z kohoutku za pivo z kohoutku díky výstavbě beer streem 1", "Zestátní výrobců plotů", "Genocida generace alfa", "Dotování české reprezentace v potápění do fazolí", "Maximální počet wattů v elektronice: 1"],

        2024: ["Asocializace České republiky", "Zrušení gravitace", "Pokus konkurovat iluminátům v soukromém sektoru založením tajné aspolečnosti.", "Rozmnožování dinosaurů v českých ZOO, a pomocí mikrovlnek vytvoření napůl železných, napůl živých dinosauřích zbraní hromadného ničení.", "Povolení ještě nenarozeným dětem vraždit své matky. Ať se děti při potratu mohou bránit.", "Vytopení Rakouska.", "Nasazení Českého lva do maid oblečku.", "Znovuobnovení purismu. (Např. Femboy = ženoch, Cringe = poklonkování, operační systém = používací řád)", "Donucení Blanických rytířů platit nájem.", "Legalizace jakýchkoli drog co mohou člověka zabít.", "Vyhlášení války mrtkům", "Vyhlášení státního svátku na narozeniny Járy Cimrmana", "Přejmenování minimálně je jedné ulice v každém městě na ulici Járy Cimrmana", "Navrácení tradičního života v jeskyni a žraní šutrů.", "Sleva na cigarety pro lidi s rakovinou plic.", "Dokončení Benešovského odsouvání odsunutím naprosto všech.", "Vrácení hlavního města do Levého Hradce", "Dožít se roku 2025", 'Vánočního kapra změnit na vánoční kuře z kuchařky Jiřího Babici "Ich bin ein gamer".', "Zavedení manželství pro nikoho."],

        2025: ["Snížit ministerstvo na jedno – ministerstvo předstírání práce.", "O nových zákonech by rozhodovala hra v člověče nezlob se.", "Manželství pouze pro jednu osobu.", "Povolit všechny drogy.", "Řešení bytové krize žitím v jeskyních.", "Podpora ekonomické recese, protože sranda musí být.", "Převedeme hlavní město zpět do Levého Hradce.", "Zrušíme hlavní město.", "Digitalizujeme stát. Úřad bude discord server, stavební řízení přes minecraft.", "Snížit počet krajů na jeden - Liberecký.", "Snížení počtu obcí na jednu.", "Každá budova bude svoje vlastní obec.", "Zrušíme stáří.", 'Přejmenujeme všechny ulice na "Cimrmanova".', "Peníze budou zdarma.", "Zrušíme gravitaci.", "Dobytí Slovenska, Podkarpadské rusi, Lužického srbska, Královce, Slezska, Jiříkova, Grónska a Dalmácie.", "Každou válku vyřešíme hodem mincí.", "Pivo poteče z kohoutků.", "Znělka z kouzelné školky jako státní hymna."],

        2026: ["Snížit počet senátorů na 67.", "Řešit volební program.", "Navrátíme klimatickou krizi.", "Pošleme děti do bitcoinových dolů v Turově.", "Podpora agentů KGB a GRU (potřebujeme porazit Petra Cibulku).", "Zavedeme groše jako měnu.", "Budeme podporovat ekonomickou recesi, protože sranda musí být.", "Přijmeme co nejvíce migrantů, hlavně zločinců, aby se lidé báli chodit ven (absolutní asocializace).", "Zrušíme pravopis, posílíme svobodu slova.", "Zregulujeme věk dožití na 31 let (po třicítce jsme všichni chodící mrtvoly + 31 je turecký symbol pro masturbaci).", "Jsme pro migraci, protože nám migranti seberou p#áci a my nebudeme muset p#acovat.", "Necháme vyvinout nové druhy zvířat, abychom je mohli nechat vyhynout.", "Uděláme revizi státních znaků.", "Změníme hlavní město na Aš, ať jsme co nejdál od Zlováků.", "Vyměníme Kundu za Havířov, tím získáme přístup k moři. #ceskojevkunde", "Snížíme počet názorů na 4.", "Uděláme asociální síť Ř.", "Napadneme Vatikán kvůli nerostným surovinám.", "Osvobodíme Moravu od krutovlády Slezska.", "Osvobodíme Slezsko od krutovlády Moravy."]
    };

    return (
        <div id="programmeContent">
            <Helmet>
                <title>Program · ČSA</title>
                <meta name="description" content="ČSA je recesistická politická strana, v tento moment chystající se vzniknout a poté začít nabírat členy. Více než strana je ČSA internetová mikrokomunita, kde každý člověk náhodně z internetu může přispět svým dílem." />
                <meta property="og:title" content="Program · ČSA" />
            </Helmet>

            <div className="programmeTitle">
                <img src={programmeTitle} draggable="false" alt="" />
            </div>

            <div className="nadrokovybox">
                Klikni na rok, abys zjistil program pro daný rok. Strana si totiž tyčí
                <br />
                nové cíle každý rok. Zvládneš kliknout na obdélníček, ne..?
            </div>

            <div className="rokyContainer">
                {Object.entries(programEntries).map(([year, entries]) => (
                    <label className="rokKarta" key={year}>
                        <input type="checkbox" className="rokKartaTrigger" />

                        <div className="rokFront">{year}</div>
                        <div className="rokKartaBackdrop"></div>

                        <div className="rokBack">
                            <Title small>Program na rok {year}</Title>

                            <ol className="programmeSeznam">
                                {entries.map((entry, index) => (
                                    <li key={index}>{entry}</li>
                                ))}
                            </ol>
                        </div>
                    </label>
                ))}
            </div>
        </div>
    );
}
