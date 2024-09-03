import LogIn from "../services/login-user.js";

export default class LogInModal {
  constructor() {
    this.btnLogar = document.querySelector('.btn_logar')

    this.eventModalLogIn = this.eventModalLogIn.bind(this)
    this.eventFecharModalLogIn = this.eventFecharModalLogIn.bind(this)
    this.eventCliqueFora = this.eventCliqueFora.bind(this)
    this.eventFecharModalLogInEsc = this.eventFecharModalLogInEsc.bind(this)

    this.eventLogar = this.eventLogar.bind(this)
  }

  modalLogIn() {
    const body = document.querySelector('body')
    let node = document.createElement('div')
    node.classList.add('modal_login')
    node.innerHTML += `
    <div class="modal_login_img">
      <figure>
        <img src="img/assets/logo.png" alt="LOGO">
      </figure>
    </div>
    <div class="modal_login_tela">
      <h2>Log In</h2>      
      <form action="" class="modal_login_form">      
        <label for="usuario">Usuario:</label>
        <input type="text" name="usuario" id="usuario">
        <label for="passwd">Password:</label>
        <input type="password" name="passwd" id="passwd">
        <div class="modal_login_form_btn">
          <button class="btn_login">ENTRAR</button>
          <button class="btn_cancelar">SAIR</button>
        </div>
      </form>
    </div>
    `
    body.appendChild(node)

    this.addEvents()
  }

  fecharModalLogIn(tecla) {
    const body = document.querySelector('body')

    body.removeChild(this.modal)
    document.removeEventListener('keydown', this.eventFecharModalLogInEsc)
  }

  eventFecharModalLogIn(e) {
    e.preventDefault()
    const tecla = e.keyCode;
    this.fecharModalLogIn(tecla)
  }

  eventFecharModalLogInEsc(e) {
    const tecla = e.keyCode;
    if (tecla === 27) {
      this.fecharModalLogIn()
    }
  }

  eventCliqueFora(e) {
    if (e.target === this.modal) {
      this.fecharModalLogIn()
    }
  }

  eventModalLogIn(e) {
    e.preventDefault()
    this.modalLogIn()
  }

  logar() {
    this.usuario = document.querySelector('#usuario')
    this.passwd = document.querySelector('#passwd')

    const user = {
      "user": this.usuario.value,
      "passwd": this.passwd.value
    }

    new LogIn('./db/usuarios.json', user).init()
  }

  eventLogar(e) {
    e.preventDefault()
    this.logar()
  }

  addEvents() {
    this.btnLogar.addEventListener('click', this.eventModalLogIn)

    this.modal = document.querySelector('.modal_login')
    if (this.modal) {
      this.modal.addEventListener('click', this.eventCliqueFora)
      document.addEventListener('keydown', this.eventFecharModalLogInEsc)
    }

    this.btnSair = document.querySelector('.btn_cancelar')
    if (this.btnSair) {
      this.btnSair.addEventListener('click', this.eventFecharModalLogIn)
    }

    this.btnLogin = document.querySelector('.btn_login')
    if (this.btnLogin) {
      this.btnLogin.addEventListener('click', this.eventLogar)
    }
  }

  init() {
    if (this.btnLogar) {
      this.addEvents()
    }
  }
}