import Eventos from "./eventos.js";

export default class Recente {
  constructor(eventosPrincipal) {
    this.eventos = [...eventosPrincipal]
    JSON.parse(localStorage.getItem('recentes')) ? this.recenteLista = JSON.parse(localStorage.getItem('recentes')) : this.recenteLista = []
  }

  preencherRecente(newArray) {
    const recenteCard = document.querySelector('.recentemente_lista')

    if (!(newArray.length == [])) {
      newArray.forEach(element => {
        recenteCard.innerHTML += `
            <p>${element.titulo}</p>
          `
      });
    } else {
      recenteCard.innerHTML += `
            <p>SEM EVENTOS</p>
          `
    }
  }


  coletarRecente() {
    const newArray = []

    if (!(this.recenteLista == [])) {
      this.recenteLista.forEach(element => {        
        this.eventos.forEach(element2 => {
          if (element === element2.eventoId) {
            newArray.push(element2)
          }
        });
      });
    }    
    this.preencherRecente(newArray)
  }


  adicionarAoRecente() {
    if (window.location.href.split('?evento=')[1]) {
      this.url = decodeURI(window.location.href.split('?evento=')[1])
      if (this.recenteLista) {
        if (!this.recenteLista.find((id) => id === this.url)) {
          this.recenteLista.push(this.url)
          localStorage.setItem('recentes', JSON.stringify(this.recenteLista))
        }
      } else {
        localStorage.setItem('recentes', JSON.stringify(this.url))
      }
    }
  }

  init() {
    this.adicionarAoRecente()
    this.coletarRecente()

    return this
  }
}