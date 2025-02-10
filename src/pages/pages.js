import Domov from './Domov/Domov.js';
import Členové from './Členové/Členové.js';
import Kontakty from './Kontakty/Kontakty.js';
import Fotogalerie from './Fotogalerie/Fotogalerie.js';
import Historie from './Historie/Historie.js';
import Pomoc from './Pomoc/Pomoc.js';
import Zbírka, { ZbírkaTitle, ZbírkaNotifikace } from './Pomoc/Zbírka/Zbírka.js';
import Podpisy, { PodpisyTitle, PodpisyNotifikace } from './Pomoc/Podpisy/Podpisy.js';
import Zdroj from './Zdroj/Zdroj.js';   
import Program from './Program/Program.js';

const ZbírkaPack = { Page: Zbírka, Title: ZbírkaTitle, NotificationsStack: ZbírkaNotifikace }
const PodpisyPack = { Page: Podpisy, Title: PodpisyTitle, NotificationsStack: PodpisyNotifikace }

export { Domov, Členové, Kontakty, Fotogalerie, Historie, Pomoc, ZbírkaPack, PodpisyPack, Zdroj, Program }