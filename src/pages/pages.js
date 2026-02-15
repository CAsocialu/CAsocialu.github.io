import Domov from "./Domov/Domov.js";
import Členové from "./Členové/Členové.js";
import Kontakty from "./Kontakty/Kontakty.js";
import Fotogalerie from "./Fotogalerie/Fotogalerie.js";
import Historie from "./Historie/Historie.js";
import Pomoc from "./Pomoc/Pomoc.js";
import Zbírka, { ZbírkaTitle, ZbírkaNotifikace } from "./Pomoc/Zbírka/Zbírka.js";
import Podpisy, { PodpisyTitle, PodpisyNotifikace } from "./Pomoc/Podpisy/Podpisy.js";
import Vznikáme, { VznikámeTitle, VznikámeNotifikace } from "./Pomoc/Vznikáme/Vznikáme.js";
import Zdroj from "./Zdroj/Zdroj.js";
import Program from "./Program/Program.js";
import Sraz2025, { Sraz2025Title, Sraz2025Notification } from "./Sraz2025/Sraz2025.js";

const ZbírkaPack = { Page: Zbírka, Title: ZbírkaTitle, NotificationsStack: ZbírkaNotifikace };
const PodpisyPack = { Page: Podpisy, Title: PodpisyTitle, NotificationsStack: PodpisyNotifikace };
const Sraz2025Pack = { Page: Sraz2025, Title: Sraz2025Title, NotificationsStack: Sraz2025Notification };
const VznikámePack = { Page: Vznikáme, Title: VznikámeTitle, NotificationsStack: VznikámeNotifikace };

export { Domov, Členové, Kontakty, Fotogalerie, Historie, Pomoc, ZbírkaPack, PodpisyPack, Sraz2025Pack, VznikámePack, Zdroj, Program };
