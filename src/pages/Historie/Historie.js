import './Historie.css';
import { Helmet } from 'react-helmet-async';
import Title from '../../components/Title/Title';
import Argonaut from "../../images/history/argonautmemory.png"

export default function Historie() {
    const historyEntries = {
        main: [
            { date: "13. 5. 2022", text: "Vznik strany založením účtů na Twitteru a Instagramu. Zprvu byly koláže graficky jednoduché ale nápady geniální. Tím získalo ČSA kousek po kousku úspěch." },
            { date: "14. 7. 2022", text: "Vznik Discordu ČSA, který se stal prakticky ihned chronicky aktivní minimálně 5, někdy i 10 hodin denně. Za historii Discordu se stalo několik kontroverzí, včetně podpory antisemitismu od některých členů, za což se nestydíme, ovšem tyto problémy řešíme rychle. Discord se skládá z modů, neboli ministrů, kteří dohlíží na chod strany a jsou demokraticky voleni." },
            { date: "18. 9. 2022", text: "První video na YouTube kanále ze srazu SPD v Liberci. I přestože členy ČSA ochranka vyhodila, video jsme zveřejnili. Tento moment rozhodl o druhé hlavní činnosti ČSA, po kolážové politické satiře, a to satirické rozhovory s politiky. Za tu dobu byly natáčeny rozhovory například s Adamem Hankou, Václavem Láskou, Martinem Uzou, Matějem Ondřejem Havlem, Mladými monarchisty a spoustou dalších…" },
            { date: "22. 7. 2023", text: "V Liberci proběhl první ČSA sraz, neboli setkání fanoušků ČSA a politické satiry, proběhl v podniku Argonaut na Chrastavské ulici v Liberci a setkalo se spolu asi 12 lidí." },
            { date: "9. 2. 2024", text: "Vyšel první rozhovor s předsedy ČSA. Byli hosty Jana Pantálka v pravicovém pokecu." },
            { date: "20. 7. 2024", text: "Druhý ČSA sraz který proběhl tentokrát v Praze. Strana dala prostor prezentaci NAFO a Česko+. Přišlo kolem dvaceti lidí. O měsíc a den později (21. srpna) se konal stejný sraz jen v menším počtu. Ti, kteří měli mít vlastní přednášku, ani nedorazili, za to však srazu přečítal Igor Seman svou knihu Geňogén dokorán." },
            { date: "2024", text: "Začátek plánování vzniku strany" },
            { date: "2025", text: "Plánované založení strany a sbírání podpisů potřebných na vznik." }
        ],
        extras: [
            { date: "2022 - 2024", text: "Projekt ČSA Mod do hry Mafia který se bohužel nedočkal zdárného konce a nikdy nebyl dokončen" },
            { date: "2024", text: "Takzvaná válka proti důchodcům" }
        ]
    };
    return (
        <div id="historyContent">
            <Helmet>
                <title>Historie · ČSA</title>
                <meta name="description" content="ČSA je recesistická politická strana, v tento moment chystající se vzniknout a poté začít nabírat členy. Více než strana je ČSA internetová mikrokomunita, kde každý člověk náhodně z internetu může přispět svým dílem." />
                <meta property="og:title" content="Historie · ČSA" />
                <meta property="og:description" content="ČSA je recesistická politická strana, v tento moment chystající se vzniknout a poté začít nabírat členy. Více než strana je ČSA internetová mikrokomunita, kde každý člověk náhodně z internetu může přispět svým dílem." />
                <meta property="og:image" content={`${process.env.PUBLIC_URL}/assets/banner.png`} />
                <meta property="og:url" content="https://www.ceskastranaasocialu.cz/#/path" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Historie · ČSA" />
                <meta name="twitter:description" content="ČSA je recesistická politická strana, v tento moment chystající se vzniknout a poté začít nabírat členy. Více než strana je ČSA internetová mikrokomunita, kde každý člověk náhodně z internetu může přispět svým dílem." />
                <meta name="twitter:image" content={`${process.env.PUBLIC_URL}/assets/banner.png`} />
            </Helmet>
            <Title>Historie</Title>
            <ol>
                {historyEntries.main.map((entry, index) => (
                    <li key={index} data-date={entry.date}>{entry.text}</li>
                ))}
            </ol>
            <Title small>Zajímavosti z Historie</Title>
            <ol>
                {historyEntries.extras.map((entry, index) => (
                    <li key={index} data-date={entry.date}>{entry.text}</li>
                ))}
            </ol>
            <img src={ Argonaut } id='argonaut' alt="Hospoda Argonaut, 24. Srpna '24" draggable="false" />
        </div>
    )
}