import { useState } from "react";
import { Helmet } from "react-helmet-async";
import "./Členové.css";
import Konrád from "../../images/members/web_clenove_komrd-cervena.png";
import Karel from "../../images/members/web_clenove_kaja-cervena.png";
import Tomáš from "../../images/members/web_clenove_tomas-cervena.png";
import InstagramLogo from "../../images/instagramLogo.svg";
import MailLogo from "../../images/MailLogo.svg"
import clenoveTitle from "../../images/Titles/web_clenove_nadpis.png";
import Martin from '../../images/members/Tabulka/Martin_M.png'
import Tom from '../../images/members/Tabulka/Tom_S.png'
import Jan from '../../images/members/Tabulka/jan_pesek.jpg'
import Matěj from '../../images/members/Tabulka/Matej_Kaderabek.jpg'
import Martin_H from '../../images/members/Tabulka/Martin_Hublar.jpg'
import JanPr from '../../images/members/Tabulka/Jan_Prokeš.jpg'
import Dan from '../../images/members/Tabulka/Dan.png'
import Tonda from '../../images/members/Tabulka/Tonda.png'
import Ezi from '../../images/members/Tabulka/Ezi.png'
import Michaela from '../../images/members/Tabulka/Michaela.jpg'
import Vladimir from '../../images/members/Tabulka/Vladimir.jpg'
import Natalie from '../../images/members/Tabulka/Natalie.jpg'
import Matěj_W from '../../images/members/Tabulka/Matěj_W.png'
import Daniel from '../../images/members/Tabulka/Daniel.jpg'
import pepa2 from '../../images/members/Tabulka/pepa2.png'
import Selucký from '../../images/members/Tabulka/Selucky.png'
import Mojmír from '../../images/members/Tabulka/matous_trefil.jpg'
import Sysel from '../../images/members/Tabulka/Sysel.png'
import Hugo from '../../images/members/Tabulka/Hugo.webp'
import Tomáš_sv from '../../images/members/Tabulka/Tomas_Svojanovsky.jpg'

import Neni from '../../images/logo-white.png'

const members = [
    { img: Konrád, name: "Konrád Koulemastník", description: ["předseda strany", "student zdravotnické školy", "pastafarián", "správce stranického instagramu", "zajímá se o politiku, psychologii, filozofii a fotbal"], sns: { ig: "konrad_z_csa", email: "konrad@asocialove.cz" } },
    { img: Karel, name: "Karel Hrubián", description: ["první místopředseda", "student průmyslové školy (nenávidí svoji školu)", "nemá personalitu, jen posílá obrázky kočky", "správce stranického twitteru", "reálně nic neumí"], sns: { ig: "karel_hrubian", email: "karelhrubian@asocialove.cz" } },
    { img: Tomáš, name: "Tomáš Novák", description: ["druhý místopředseda", "student IT", "vyskytuje se všude jen ne ve svém domě", "hrdý uživatel Fabie 1.2 HTP 2006", "umí udělat prdel z čehokoliv a z kohokoliv"], sns: { ig: "tomas_z_csa", email: "tomasnovak@asocialove.cz" } },
];

function Člen({ img, name, sns, description }) {
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => setIsOpen((prev) => !prev);

    return (
        <div className={`člen ${isOpen ? "open" : ""}`}>
            {!isOpen && <img src={img} alt="" onClick={toggleOpen} draggable="false" />}
            {isOpen && <div className="backdrop" onClick={toggleOpen} />}
            {isOpen && (
                <div className="členContent">
                    <img src={img} alt="" onClick={toggleOpen} draggable="false" />
                    <div className="členInfo">
                        <ul>
                            {description.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                        <div className="sns">
                            {sns.ig && (
                                <a href={`https://instagram.com/${sns.ig}`} target="_blank" rel="noopener noreferrer">
                                    <img src={InstagramLogo} alt="" />
                                </a>
                            )}
                            {sns.email && (
                                <a href={`mailto:${sns.email}`}>
                                    <img src={MailLogo} alt="" />
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

const clenove = [
    [Martin, "Martin", "Minařík", "Jihomoravský", "šílený síťař, PC enthusiast, CPU dealer", "řadový člen"],
    [pepa, "pepa", "troska", "Liberecký", "Neúspěšný kandidát na prezidenta \n bývalý potapěč do fazolí a řezač motorovou pilou \n vyřešil světovou plotovou krizi \n jeho jméno se píše s malými písmeny \n důchodce", "zbytečný starec"],
    [Tom, "Tomáš", "Satsunský", "Plzeňeský", "Programuji - Je to geniální výmluva, proč na nikoho nemluvit a jen zírat do monitoru. \n Formule 1 – Fascinuje mě rychlost monopostů. Ideálně takovou rychlostí zmizím ze všech společenských akcí. \n Nejde mi učit se novým jazykům, ale jsem docela expert v používání Google překladače. \n Pracuji jako elektrikář - V práci izoluji dráty, ve volném čase izoluji sám sebe od zbytku společnosti.", "řadový člen"],
    [Jan, "Jan", "Pešek", "Jihočeský", "Užívač nikotinu, Strojař, Užívač najíždění do cyklozmrdů, Kofeinový závislák, Metalák", "řadový člen"],
    [Matěj, "Matěj", "Kadeřábek", "Středočeský", "introvert, asociál, zajímám se o hudbu, taky píšu, věnuju se taky game designu, bydlim pod kamenem, rád cestuju", "řadový člen"],
    [Martin_H, "Martin", "Hublar", "Olomoucký", "Linux uživatel, mám rád procházky a tůry, občas stříhám videa a dělám memy", "řadový člen"],
    [Daniel, "Daniel", "Skalka", "Jihočeský", "Amatérský fotograf, Společenské tance enjoyer @starttabor, Postižený gymplák syndrom, Meme it till you make it, Buglej Děda je real!", "řadový člen"],
    [Ezi, "Ezi", "Herman", "Pardubický", "milovník umění a majitel videoher, literární fyzika brainrot, nic jiného neumím a neznám, haf já štěkám (part-time furry), jak kamarádka říká: handsum funny inspiring captivating intelligent", "řadový člen"],
    [Matěj_W, "Matěj", "Wied", "Ústecký", "Básník, Vědec, Chomutovský rodák, kandidát, umí anglicky", "řadový člen"],
    [Natalie, "Natálie", "Lokvencová", "Královéhradecký", "Zmizela do Irska protože proč dělat malé změny, když můžeš rovnou změnit celou zemi, Dokážu mít existenciální krizi a zárověň se u toho učit nový jazyk. Multitasking, Kombinace empatie + analytického myšlení + ADHD ze mě dělá zvláštní mix: trochu filozof, trochu stratég, trochu chaos, Navštěvuji public speakers club ikdyž mě to šileně stresuje - což je v podstatě hardcore mód osobního rozvoje.", "řadový člen"],
    [Neni, "Petr", "Juráň", "Zlínský", "nebyl schopen o sobě cokoli napsat", "řadový člen"],
    [Neni, "Svatoslav", "Selucký", "Liberecký", "nebyl schopen o sobě cokoli napsat", "řadový člen"],
    [Vladimir, "Vladimír", "Škaroupka IV.", "Jihomoravský", "Filozof (bytoslovec, záskutečník a amatérský teolog), Spisovatel, který se snaží dostat do TOP 10 - TOP 10 důvodů, proč se zabít, Jediný člověk, který uznává Ladislava Klímu jako svého Pána a Spasitele, Životní motto: Když posloucháš lidem pod okny, leccos slyšíš, Debilobijec.", "řadový člen"],
    [JanPr, "Jan", "Prokeš", "Liberecký", "Instuktor lyžování, chudý student(beru úplatky) podporovatel federativní EU", "řadový člen"],
    [Dan, "Dan", "Peuker", "Liberecký", "Nejmenší člen strany, Budete znát spíše jeho psa, Čím hloupější nápad, tím spíše se v něm bude angažovat", "řadový člen"],
    [Tonda, "Tonda", "Baťa", "Pardubický", "Král Suméru a Akkadu, Pardubice>Mechov, Profesionální kráječ rajčat", "řadový člen" ],
    [Michaela, "Michaela Kristýna", "Máchová", "Liberecký", "Profesionální moderátorka a odbornice na maďarsko", "řadový člen" ],
    [Selucký, "S.A", "Selucký", "Liberecký", "Historik, Amaterský meteorolog a milovník filmů ", "řadový člen"],
    [Mojmír, "Mojmír", "Trávníček", "Zlínský", "Mám rád vláčky 🚂 🚂 🚂 🚂 🚂, Antisociál snažící se posunout tuhle stranu dál od socializace, Moje oblíbená lokomotiva je Union Pacific Big Boy, Osobně mám nejradši stožár vysokého napětí: kočka, Chci dostat do programu ČSA vytvoření maglevové dráhy mezi Seninkou a Novou Vsí v Horách.", "řadový člen"],
    [Sysel, "Vojtěch Svysel", "Seč", "Plzeňský", "Aktivně prosazuji práva hlodavců, profesionální F1/MotoGP yapper, občas dokážu strávit 21 hodin sledováním čínských animovaných pohádek, mým snem je stát se (ne)vládním zmocněncem pro výzkum anime kočkoholek s ocasem", "řadový člen" ],
    [Hugo, "Hugo", "Štolba", "Praha", "Elektrotechnik, Pyrotechnik, Alkoholik, už je to 5 bodů?", "řadový člen"],
    [Tomáš_sv, "Tomáš", "Svojan ze Svojanova", "Jihomoravský", "Myslitel (ale moc mi to nejde), Vysoký široký a bystrozraký v jednom, Chronické ADHD, Student IT, (Mimochodem používám Linux)", "řadový člen"],
]

function ČlenovéTabulka() {
    const [sloupecŘaz, setSloupecŘaz] = useState(1);
    const [sloupecVzes, setSloupecVzes] = useState(true);

    const zmenaŘazení = (col) => {
        if (sloupecŘaz === col) {
            setSloupecVzes((prev) => !prev);
        } else {
            setSloupecŘaz(col);
            setSloupecVzes(true);
        }
    };

    const pole = [...clenove].sort((a, b) => {
        const valA = a[sloupecŘaz] ?? "";
        const valB = b[sloupecŘaz] ?? "";
        return sloupecVzes ? valA.localeCompare(valB, "cs") : valB.localeCompare(valA, "cs");
    });

    const šipky = (col) => sloupecŘaz === col ? <span>{sloupecVzes ? " ▲" : " ▼"}</span> : "";

    const header = (label, col) => (
        <th onClick={() => zmenaŘazení(col)} style={{ cursor: "pointer", userSelect: "none" }}>
            {label}{šipky(col)}
        </th>
    );

    return (
        <div className="členováTabulka" style={{ overflowX: "auto", marginTop: "2rem" }}>
            <table border="1" cellPadding="6" cellSpacing="0">
                <thead>
                    <tr>
                        <th>Fotka</th>
                        {header("Jméno", 1)}
                        {header("Příjmení", 2)}
                        {header("Kraj", 3)}
                        <th>Něco málo o mne</th>
                        {header("Funkce", 4)}
                    </tr>
                </thead>
                <tbody>
                    {pole.map((r, i) => (
                        <tr key={i}>
                            <td><img src={r[0]} alt="" style={{ width: "50px" }} /></td>
                            <td>{r[1]}</td>
                            <td>{r[2]}</td>
                            <td>{r[3]}</td>
                            <td>{r[4]}</td>
                            <td>{r[5]}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default function Členové() {
    return (
        <div id="membersContent">
            <Helmet>
                <title>Členové · ČSA</title>
                <meta name="description" content="ČSA je recesistická politická strana, v tento moment chystající se vzniknout a poté začít nabírat členy. Více než strana je ČSA internetová mikrokomunita, kde každý člověk náhodně z internetu může přispět svým dílem." />
                <meta property="og:title" content="Členové · ČSA" />
                <meta property="og:description" content="ČSA je recesistická politická strana, v tento moment chystající se vzniknout a poté začít nabírat členy. Více než strana je ČSA internetová mikrokomunita, kde každý člověk náhodně z internetu může přispět svým dílem." />
                <meta property="og:image" content={`${process.env.PUBLIC_URL}/assets/banner.png`} />
                <meta property="og:url" content="https://www.ceskastranaasocialu.cz/clenove" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Členové · ČSA" />
                <meta name="twitter:description" content="ČSA je recesistická politická strana, v tento moment chystající se vzniknout a poté začít nabírat členy. Více než strana je ČSA internetová mikrokomunita, kde každý člověk náhodně z internetu může přispět svým dílem." />
                <meta name="twitter:image" content={`${process.env.PUBLIC_URL}/assets/banner.png`} />
            </Helmet>
            <div className="clenoveTitle">
                <img src={clenoveTitle} draggable="false" alt="" />
            </div>
            <p className="nadpis">Předsednictvo</p>
            <div id="členové">
                {members.map((member, index) => (
                    <Člen key={index} {...member} />
                ))}
            </div>
            <p className="nadpis">Ostatní členové</p>
            <ČlenovéTabulka />
        </div>
    );
}