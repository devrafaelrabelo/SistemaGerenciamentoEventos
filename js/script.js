import LocalizacaoModal from "./auxiliar/localizacaoModal.js";
import Localizacao from "./services/localizacao.js";
import LogOff from "./services/logoff-user.js";

import ValidarLogin from "./services/validacao-login.js";


new ValidarLogin().init()

new LocalizacaoModal().init()

new Localizacao().init()

new LogOff().init()
