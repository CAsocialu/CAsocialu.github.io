import './Pomoc.css'
import { Helmet } from 'react-helmet-async'
import Title from "../../components/Title/Title"
import Carousel from '../../components/Carousel/Carousel'
import StartovacPanel from '../../components/StartovacPanel/StartovacPanel'
import StartovacTier from '../../components/StartovacTier/StartovacTier'
import Představení from '../../images/help/Carousel/představení.jpg'
import Odměny from '../../images/help/Carousel/odměny.jpg'
import Peníze from '../../images/help/Carousel/peníze.jpg'
import Šance from '../../images/help/Carousel/šance.jpg'
import PRACHY from '../../images/help/Carousel/DEJTENÁMPRACHY.jpg'
import tier0 from '../../images/help/Tiers/tier0.jpg'
import tier1 from '../../images/help/Tiers/tier1.jpg'
import tier2 from '../../images/help/Tiers/tier2.jpg'
import tier3 from '../../images/help/Tiers/tier3.jpg'
import Konference from '../../images/help/Konference.jpg'
import KonrádSNovourVlajkouČeska from '../../images/help/Konrád na Filipínách.jpg'
import ImageWithText from '../../components/ImageWithText/ImageWithText';
import Notification from '../../components/Notification/Notification'

export default function Pomoc() {

    const STARTOVAC_TIERS = [
        {
            price: 1,
            reward: "Dobrý pocit",
            description: "Pokud přispějete jakoukoli částku, dostanete dobrý pocit! Výrobci antidepresiv ho nenávidí! Tito mladíci vytvořili levný způsob na vyléčení smutku! Takové moderní odpustky, jen místo pro zalíbení se bohu to posíláte pro zalíbení se kočičce.",
            link: "https://www.startovac.cz/projekty/ceskastranaasocialu-2/prispet/gJDzZe8rZ",
            image: tier0
        },
        {
            price: 200,
            reward: "4 karty, 4 samolepky a 1 placka",
            description: "Karty na způsob hry Pokémon nebo Magic: The Gathering. Pošleme vám náhodné karty, přičemž to, kolik přispějete určuje to, kolik jich dostanete. O kartách vás budeme informovat až po skončení sbírky, pouze až budeme mít peníze a budeme vědět počet karet, které budeme vyrábět. Způsob doručení pořešíme po sbírce, tudíž zachovejte si své potvrzení o platbě.\nS těmito kartami se bude moct skutečně hrát, ovšem my víme, že jste praví asociálové a s nikým to hrát nebudete. Karty jsou automatický repelent na kamarády.",
            link: "https://www.startovac.cz/projekty/ceskastranaasocialu-2/prispet/XKbz7DaGJ",
            image: tier1
        },
        {
            price: 600,
            reward: "7 karet, 7 samolepek, a 2 placky",
            description: "Krásné nádherné zbrusunové samolepky s tak moc zbrusunovým designem, že jsme je ještě ani nestihli navrhnout. Respektive máme jeden design a mnoho dalších nás čeká.",
            link: "https://www.startovac.cz/projekty/ceskastranaasocialu-2/prispet/GQg9WR81e",
            image: tier2
        },
        {
            price: 1000,
            reward: "10 karet, 10 samolepek, a 3 placky",
            description: "Staré dobré placky. Rozdávali jsme je na ČSA srazu a rozdáváme je i teď! No nejsme my prostě skvělí lidé, které byste měli volit?",
            link: "https://www.startovac.cz/projekty/ceskastranaasocialu-2/prispet/jYLMxDOEz",
            image: tier3
        }
    ];

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
            <Title>Chci pomoci</Title>
            <Notification title="Sbíráme podpisy!" message="Proč, jak, a za co pomoct se dovíte tady!" link="/pomoc/podpisy" isLinkInternal={true} />
            <div id="helpContentWrapper">
                <div id="helpContentColOne">
                    <div id="help-page-carousel">
                        <Carousel>
                            <img src={Představení} alt="" draggable="false" />
                            <img src={Odměny} alt="" draggable="false" />
                            <img src={Peníze} alt="" draggable="false" />
                            <img src={Šance} alt="" draggable="false" />
                            <img src={PRACHY} alt="" draggable="false" />
                        </Carousel>
                    </div>
                    <p><strong>Česká Strana Asociálů</strong> je rozhodně existující strana, která ještě neexistuje. A proto potřebujeme vaše peníze na pomoc se založením první naprosto smysl nedávající strany! Zní to skutečně věrohodně? Ne! Ale můžete si užít ten uspokojivý gambling. 50% šance, že peníze půjdou na lidi zakládající vtipostranu, 50% na to, že peníze půjdou pirátům do Somálska. A to se vyplatí, Horste!</p>
                    <ImageWithText src={Konference} alt="Předsedové ČSA na ČSA Srazu" draggable="false" />
                    <h3>Co je ČSA?</h3>
                    <p>ČSA je projekt tří autistů do politiky, který si po několika letech získal oblibu jiných autistů do politiky. Po dvou letech tvrdé dřiny, občasného vycházení ze sklepa pro mraženou pizzu, koukání na reddit a dělání rádoby vtipnejch příspěvků na sociální sítě, jsme se dostali do bodu, kdy skutečně vznikáme!</p>
                    <p>Vše začalo dvěma deváťáky. Neúspěšný sportovec Konrád a rozdavač letáků Karel, se jako nejúspěšnější část elity národa rozhodli založit stranu. Jenže nevěděli jak, a tak se prostě rozhodli založit účet na Instagramu a Twitteru, až po půl roce zjistili, že takto se strana nezakládá. Pořádali po celé republice křížem krážem, v Liberci a Praze, akce s povinným dvoumetrovým odstupem.</p>
                    <p>Své založení oznámila strana na své tiskové konferenci, na kterou nedorazil jediný novinář a nikdo o ní nenapsal, i když strana pracně bombardovala e-mailové schránky asi 80 novinářům.</p>
                    <ImageWithText src={KonrádSNovourVlajkouČeska} alt="Konrád s novou vlajkou Česka (a určitě ne vlajkou Filipín)" draggable="false" />
                    <h3>Na co vybrané peníze půjdou?</h3>
                    <p>Za prvé: Doslova se podívej na ten obrázek, co jsme tam dali.</p>
                    <p>Za třetí: Na tisk papírů, finanční audit, transport (ČSA je LGBT friendly, podporujeme TRANSportní vozidla), stánek a tvorbu odměn za to, že jste nám poslali své peníze, abychom tím, že pošlete víc peněz získali méně peněz.</p>
                    <p>Za c) Čím více peněz dáte, tím méně odměn k poměru k ceně dostanete! (podívej se na odměny) Exekucí máme už dost, nemusíme dělat Řecko speedrun.</p>
                    <p>Za LXIX: Strana si vymezuje právo na koupení zámku u města Mouigns na jihu Flancie v případě, že získáme 5 milionů a více.</p>
                    <p><strong>DÁVEJTE NÁM POUZE PENÍZE, KTERÉ NEPOTŘEBUJETE. V ŽÁDNÉM PŘÍPADĚ NÁM NEPOSÍLEJTE VÍCE PENĚZ JEN PROTO, ŽE CHCETE VÍC ODMĚN POKUD BY TO PRO VÁS ZNAMENALO JAKÉKOLI FINANČNÍ RIZIKO. NEJLEPŠÍ ODMĚNA BY PRO VÁS MĚL BÝT DOBRÝ POCIT! Ale pokud se vám zrovna chce dát všechny vaše úspory nám, zlobit se nebudeme.</strong></p>
                    <p><strong>Děkujeme za podporu.</strong></p>
                    <p>ČSA &lt;3</p>
                </div>
                <div id="helpContentColTwo">
                    <StartovacPanel />
                    {STARTOVAC_TIERS.map((tier, index) => (
                        <StartovacTier key={index} {...tier} />
                    ))}
                </div>
            </div>
        </div>
    )
}