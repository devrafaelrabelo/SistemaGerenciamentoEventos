import Localizacao from "../services/localizacao.js"

export default class LocalizacaoModal {
  constructor() {
    this.localizacao = document.querySelector('.localizacao')

    this.eventModalLogIn = this.eventModalLogIn.bind(this)
    this.eventCliqueFora = this.eventCliqueFora.bind(this)
    this.eventFecharModalLogInEsc = this.eventFecharModalLogInEsc.bind(this)
  }

  modalLogIn() {
    const body = document.querySelector('body')
    let node = document.createElement('div')
    node.classList.add('localizacao_modal')
    node.innerHTML += `
    <div class="localizacao_modal_container">
      <h2>Localização</h2>
      <form class="localizacao_modal_form" id="formLocalizacao">
        <label for="ATUAL"><input type="radio" id="ATUAL" name="localizacao" value="ATUAL">Localização Atual</label>

        <label for="SP"><input type="radio" id="SP" name="localizacao" value="SP">São Paulo</label>


        <label for="MG"><input type="radio" id="MG" name="localizacao" value="MG">Minas Gerais</label>


        <label for="RJ"><input type="radio" id="RJ" name="localizacao" value="RJ">Rio de Janeiro</label>


        <label for="BA"><input type="radio" id="BA" name="localizacao" value="BA">Bahia</label>


        <label for="todos"><input type="radio" id="todos" name="localizacao" value="TODOS">Qualquer lugar</label>

        <button class="btn_confirma_localizacao" type="submit">CONFIRMAR</button>
      </form>
    </div>
    `
    body.appendChild(node)

    new Localizacao().init()

    this.addEvents()
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

  fecharModalLogIn() {
    const body = document.querySelector('body')

    body.removeChild(this.modal)
    document.removeEventListener('keydown', this.eventFecharModalLogInEsc)
  }

  addEvents() {
    this.localizacao.addEventListener('click', this.eventModalLogIn)

    this.modal = document.querySelector('.localizacao_modal')
    if (this.modal) {
      this.modal.addEventListener('click', this.eventCliqueFora)
      document.addEventListener('keydown', this.eventFecharModalLogInEsc)
    }
  }

  init() {
    if (this.localizacao) {
      this.addEvents()
    }

    return this
  }
}