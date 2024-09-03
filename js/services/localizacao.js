import LocalizacaoModal from "../auxiliar/localizacaoModal.js";

export default class Localizacao {
  constructor() {
    this.localizacaoText = document.querySelector('.localizacao')
    this.localizacao = JSON.parse(localStorage.getItem('localizacao')) ? this.localizacao = JSON.parse(localStorage.getItem('localizacao')) : this.localizacao = "TODOS"
    this.eventAtualizaLocalizacao = this.eventAtualizaLocalizacao.bind(this)
  }

  async fetchGeoLocalizacao() {
    const response = await fetch('https://nominatim.openstreetmap.org/reverse?lat=-19.4543616&lon=-44.2400768&format=json')
    const localizacao = await response.json();

    this.localizacao = localizacao.address.city

    this.preencherLocalizacao()
  }

  preencherLocalizacao() {
    localStorage.setItem('localizacao', JSON.stringify(this.localizacao))
    this.localizacaoText.innerText = JSON.parse(localStorage.getItem('localizacao'))
  }

  atualizaLocalizacao(dadosForm) {
    console.log(dadosForm)
    if (dadosForm.localizacao == 'ATUAL') {
      this.fetchGeoLocalizacao()
    } else {
      this.localizacao = dadosForm.localizacao
      this.preencherLocalizacao()
    }   
  }

  eventAtualizaLocalizacao(e) {
    e.preventDefault()
    const dadosForm = Object.fromEntries(new FormData(e.target).entries());
    this.atualizaLocalizacao(dadosForm)
  }

  addEvents() {
    const formLocalizacao = document.querySelector('#formLocalizacao')

    if (formLocalizacao) {
      formLocalizacao.addEventListener('submit', this.eventAtualizaLocalizacao)
    }
  }

  init() {
    this.preencherLocalizacao()
    this.addEvents()
  }
}