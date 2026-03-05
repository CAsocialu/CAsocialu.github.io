import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import './Členové.css'
import Konrád from '../../images/members/web_clenove_komrd-cervena.png'
import Karel from '../../images/members/web_clenove_kaja-cervena.png'
import Tomáš from '../../images/members/web_clenove_tomas-cervena.png'
import pepa from '../../images/members/Tabulka/pepa2.png'
import InstagramLogo from '../../images/instagramLogo.svg'
import clenoveTitle from '../../images/Titles/web_clenove_nadpis.png'
import Martin from '../../images/members/Tabulka/Martin_M.png'
import Tom from '../../images/members/Tabulka/Tom_S.png'
import Jan from '../../images/members/Tabulka/jan_pesek.jpg'
import Matěj from '../../images/members/Tabulka/Matej_Kaderabek.jpg'
import Martin_H from '../../images/members/Tabulka/Martin_Hublar.jpg'
import JanPr from '../../images/members/Tabulka/Jan_Prokeš.jpg'
import Dan from '../../images/members/Tabulka/Dan.png'
import Tonda from '../../images/members/Tabulka/Tonda.png'

const members = [
    {
        img: Konrád,
        name: "Konrád Koulemastník",
        description: [
            "předseda strany",
            "student zdravotnické školy",
            "pastafarián",
            "správce stranického instagramu",
            "zajímá se o politiku, psychologii, filozofii a fotbal"
        ],
        sns: { ig: "konrad_z_csa" }
    },
    {
        img: Karel,
        name: "Karel Hrubián",
        description: [
            "první místopředseda",
            "student průmyslové školy (nenávidí svoji školu)",
            "nemá personalitu, jen posílá obrázky kočky",
            "správce stranického twitteru",
            "reálně nic neumí"
        ],
        sns: { ig: "karel_hrubian" }
    },
    {
        img: Tomáš,
        name: "Tomáš Novák",
        description: [
            "druhý místopředseda",
            "student IT",
            "vyskytuje se všude jen ne ve svém domě",
            "hrdý uživatel Fabie 1.2 HTP 2006",
            "umí udělat prdel z čehokoliv a z kohokoliv"
        ],
        sns: { ig: "tomas_z_csa" }
    },
];

function Člen({ img, name, sns, description }) {
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => setIsOpen((prev) => !prev);
    return (
        <div className={`člen ${isOpen ? 'open' : ''}`}>
            {!isOpen && <img src={img} alt="" onClick={toggleOpen} draggable="false" />}
            {isOpen && <div className="backdrop" onClick={toggleOpen} />}
            {isOpen &&
                <div className='členContent'>
                    <img src={img} alt="" onClick={toggleOpen} draggable="false" />
                    <div className="členInfo">
                        <ul>
                            {description.map((item, index) => <li key={index}>{item}</li>)}
                        </ul>
                        <div className="sns">
                            {sns.ig && <a href={`https://instagram.com/${sns.ig}`} target="_blank" rel="noopener noreferrer"><img src={InstagramLogo} alt="Instagram Logo" />@{sns.ig}</a>}
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}

const clenove = [
    [Martin, "Martin", "Minařík", "Jihomoravský", "šílený síťař, PC enthusiast, CPU dealer", "řadový člen"],
    [pepa, "pepa", "troska", "Liberecký", "Neúspěšný kandidát na prezidenta \n bývalý potapěč do fazolí a řezač motorovou pilou \n vyřešil světovou plotovou krizi \n jeho jméno se píše s malými písmeny \n důchodce", "zbytečný starec" ],
    [Tom, "Tomáš", "Satsunský", "Plzeňeský", "Programuji - Je to geniální výmluva, proč na nikoho nemluvit a jen zírat do monitoru. \n Formule 1 – Fascinuje mě rychlost monopostů. Ideálně takovou rychlostí zmizím ze všech společenských akcí. \n Nejde mi učit se novým jazykům, ale jsem docela expert v používání Google překladače. \n Pracuji jako elektrikář - V práci izoluji dráty, ve volném čase izoluji sám sebe od zbytku společnosti.  ", "řadový člen"],
    [Jan, "Jan", "Pešek", "Jihočeský", "Užívač nikotinu, Strojař, Užívač najíždění do cyklozmrdů, Kofeinový závislák, Metalák", "řadový člen"],
    [Matěj, "Matěj", "Kadeřábek", "Středočeský", "introvert, asociál, zajímám se o hudbu, taky píšu, věnuju se taky game designu, bydlim pod kamenem, rád cestuju", "řadový člen"],
    [Martin_H, "Martin", "Hublar", "Olomoucký", "Linux uživatel, mám rád procházky a tůry, občas stříhám videa a dělám memy", "řadový člen"],
    [null, "Daniel", "Skalka", "Jihočeský", "", "řadový člen"],
    [null, "Ezi", "Herman", "Pardubický", "", "řadový člen"],
    [null, "Matěj", "Wied", "Ústecký", "", "řadový člen"],
    [null, "Natálie", "Lokvencová", "Královéhradecký", "", "řadový člen"],
    [null, "Petr", "Juráň", "Zlínský", "", "řadový člen"],
    [null, "Svatoslav", "Selucký", "Liberecký", "", "řadový člen"],
    [null, "Vladimír", "Škaroupka", "Jihomoravský", "", "řadový člen"],
    [null, "Daniel", "Peuker", "Liberecký", "", "řadový člen"],
    [JanPr, "Jan", "Prokeš", "Liberecký", "Instuktor lyžování, chudý student(beru úplatky) podporovatel federativní EU", "řadový člen"],
    [Dan, "Dan", "Peuker", "Liberecký", "Nejmenší člen strany, Budete znát spíše jeho psa, Čím hloupější nápad, tím spíše se v něm bude angažovat", "řadový člen"],
    [Tonda, "Tonda", "Baťa", "Pardubický", "Král Suméru a Akkadu, Pardubice>Mechov, Profesionální kráječ rajčat", "řadový člen" ],
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
            <div className='clenoveTitle'>
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