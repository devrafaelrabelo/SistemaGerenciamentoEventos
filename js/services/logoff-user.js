export default class LogOff {
  constructor() {

    this.eventDeslogar = this.eventDeslogar.bind(this)
  }

  deslogar() {
    localStorage.removeItem('token')
    window.location.href = 'index.html'
  }

  eventDeslogar(e) {
    e.preventDefault()
    this.deslogar()
  }

  addEvents() {
    this.btnDeslogar = document.querySelector('.btn_deslogar')
    if (this.btnDeslogar) {
      this.btnDeslogar.addEventListener('click', this.eventDeslogar)
    }
  }

  init() {
    this.addEvents()
  }
}