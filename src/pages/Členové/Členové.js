import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import './Členové.css'
import Konrád from '../../images/members/konrad.webp'
import Karel from '../../images/members/kaja.webp'
import Filip from '../../images/members/filip.webp'
import pepa from '../../images/members/pepa.webp'
import InstagramLogo from '../../images/instagramLogo.svg'
import Title from '../../components/Title/Title'

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
        sns: {
            ig: "konrad_z_csa"
        }
    },
    {
        img: Karel,
        name: "Karel Hrubián",
        description: [
            "první místopředseda",
            "student průmyslové školy (nenávidí svoji školu)",
            "kočkokluk",
            "správce stranického twitteru",
            "zajímá se o filozofii a umění, reálně nic neumí"
        ],
        sns: {
            ig: "karel_hrubian",
        }
    },
    {
        img: Filip,
        name: "Filip Slovan",
        description: [
            "druhý místopředseda",
            "student práva, psychologie a ekonomie",
            "memer",
            "vesničan",
            "ke všemu má poznámku"
        ],
        sns: {
            ig: "filip_slovan",
        }
    },
    {
        img: pepa,
        name: "pepa troska",
        description: [
            "neúspěšný kandidát na prezidenta",
            "bývalý potápěč do fazolí a řezač motorovou pilou",
            "vyřešil světovou plotovou krizi",
            "jeho jméno se píše s malými písmeny",
            "důchodce"
        ],
        sns: {
            ig: "pepa_troska",
        }
    },
];

function Člen({ img, name, sns, description }) {
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => setIsOpen((prev) => !prev);
    return (
        <div className={`člen ${isOpen ? 'open' : ''}`}>
            {!isOpen && <img src={img} alt="" onClick={toggleOpen} draggable="false"/>}
            {isOpen && <div className="backdrop" onClick={toggleOpen} />}
            {isOpen &&
                <div className='členContent'>
                    <img src={img} alt="" onClick={toggleOpen} draggable="false" />
                    <div className="členInfo">
                        {/*<h1>{name}</h1>*/}
                        <ul>
                            {description.map((item, index) => <li key={index}>{item}</li>)}
                        </ul>
                        <div className="sns">
                            {sns.ig && <a href={`https://instagram.com/${sns.ig}`} target="_blank" rel="noopener noreferrer"><img src={InstagramLogo} alt="Instagram Logo" />@{sns.ig}</a> }
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default function Členové() {
    return (
        <div id="membersContent">
            <Helmet>
                <title>Členové · ČSA</title>
                <meta name="description" content="ČSA je recesistická politická strana, v tento moment chystající se vzniknout a poté začít nabírat členy. Více než strana je ČSA internetová mikrokomunita, kde každý člověk náhodně z internetu může přispět svým dílem." />
                <meta property="og:title" content="Page Title · ČSA" />
                <meta property="og:description" content="ČSA je recesistická politická strana, v tento moment chystající se vzniknout a poté začít nabírat členy. Více než strana je ČSA internetová mikrokomunita, kde každý člověk náhodně z internetu může přispět svým dílem." />
                <meta property="og:image" content={`${process.env.PUBLIC_URL}/assets/banner.png`} />
                <meta property="og:url" content="https://www.ceskastranaasocialu.cz/#/path" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Page Title · ČSA" />
                <meta name="twitter:description" content="ČSA je recesistická politická strana, v tento moment chystající se vzniknout a poté začít nabírat členy. Více než strana je ČSA internetová mikrokomunita, kde každý člověk náhodně z internetu může přispět svým dílem." />
                <meta name="twitter:image" content={`${process.env.PUBLIC_URL}/assets/banner.png`} />
            </Helmet>
            <Title>Členové</Title>
            <div id="členové">
                {members.map((member, index) => (
                    <Člen key={index} {...member} />
                ))}
            </div>
        </div>
    );
}