import './Historie.css';
import { Helmet } from 'react-helmet-async';
import Title from '../../components/Title/Title';
import Argonaut from "../../images/history/argonautmemory.png"

export default function Historie() {
    return (
        <div id="historyContent">
            <Helmet>
                <title>Historie · ČSA</title>
                <meta name="description" content="ČSA je recesistická politická strana, v tento moment chystající se vzniknout a poté začít nabírat členy. Více než strana je ČSA internetová mikrokomunita, kde každý člověk náhodně z internetu může přispět svým dílem." />
                <meta property="og:title" content="Historie · ČSA" />
                <meta property="og:description" content="ČSA je recesistická politická strana, v tento moment chystající se vzniknout a poté začít nabírat členy. Více než strana je ČSA internetová mikrokomunita, kde každý člověk náhodně z internetu může přispět svým dílem." />
                <meta property="og:image" content="/assets/banner.png" />
                <meta property="og:url" content="https://www.ceskastranaasocialu.cz/#/path" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Historie · ČSA" />
                <meta name="twitter:description" content="ČSA je recesistická politická strana, v tento moment chystající se vzniknout a poté začít nabírat členy. Více než strana je ČSA internetová mikrokomunita, kde každý člověk náhodně z internetu může přispět svým dílem." />
                <meta name="twitter:image" content="/assets/banner.png" />
            </Helmet>
            <Title>Historie</Title>
            <ol>
                <li data-date="13. 5. 2022">Vznik strany založením účtů na Twitteru a Instagramu. Zprvu byly koláže graficky jednoduché ale nápady geniální. Tím získalo ČSA kousek po kousku úspěch.</li>
                <li data-date="14. 7. 2022">Vznik Discordu ČSA, který se stal prakticky ihned chronicky aktivní minimálně 5, někdy i 10 hodin denně. Za historii Discordu se stalo několik kontroverzí, včetně podpory antisemitismu od některých členů, za což se nestydíme, ovšem tyto problémy řešíme rychle. Discord se skládá z modů, neboli ministrů, kteří dohlíží na chod strany a jsou demokraticky voleni.</li>
                <li data-date="16. 9. 2022">První video na YouTube kanále ze srazu SPD v Liberci. I přestože členy ČSA ochranka vyhodila, video jsme zveřejnili. Tento moment rozhodl o druhé hlavní činnosti ČSA, po kolážové politické satiře, a to satirické rozhovory s politiky. Za tu dobu byly natáčeny rozhovory například s Adamem Hankou, Václavem Láskou, Martinem Uzou, Matějem Ondřejem Havlem, Mladými monarchisty a spoustou dalších...</li>
                <li data-date="2022 - 2024">Projekt ČSA mod do hry Mafia který se bohužel nedočkal zdárného konce a nikdy nebyl dokončen.</li>
                <li data-date="22. 7. 2023">První ČSA sraz, neboli setkání fanoušků ČSA a politické satiry, proběhl v podniku Argonaut na Chrastavské ulici v Liberci a setkalo se spolu asi 12 lidí. ČSA sraz byl i rok poté a to v Praze a Liberci. Tehdy v roce 2024, 20. července, dorazilo do Břevnovské hospody Na Hrádku téměř 30 lidí. Přednášky už nebyly jen od ČSA, ale i od organizací jako např. Česko plus a od členů komunity.</li>
                <li data-date="9. 2. 2024">Vyšel první rozhovor s předsedy ČSA. Byli hosty Jana Pantálka v pravicovém pokecu.</li>
                <li data-date="2024">Takzvaná válka proti důchodcům</li>
                <li data-date="2024">Začátek plánování vzniku strany</li>
                <li data-date="14. 8. 2024">Filip Slovan byl zvolen druhým místopředsedou.</li>
                <li data-date="2025">Plánované založení strany a sbírání podpisů potřebných na vznik.</li>
            </ol>
            <img src={ Argonaut } id='argonaut' alt="Hospoda Argonaut, 24. Srpna '24" draggable="false" />
        </div>
    )
}