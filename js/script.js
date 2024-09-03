import LocalizacaoModal from "./auxiliar/localizacaoModal.js";
import Eventos from "./services/eventos.js";
import FimdeSemana from "./services/fimdeSemana.js";
import Localizacao from "./services/localizacao.js";
import LogOff from "./services/logoff-user.js";
import MaisVistos from "./services/maisvistos.js";
import ValidarLogin from "./services/validacao-login.js";
import Recente from "./services/vistoRecente.js";


new ValidarLogin().init()

new LocalizacaoModal().init()

new Localizacao().init()

new LogOff().init()

const eventos = new Eventos('./db/eventos.json');
const eventosPrincipal = await eventos.init();

new Recente(eventosPrincipal).init()

new FimdeSemana(eventosPrincipal).init()

new MaisVistos(eventosPrincipal).init()


