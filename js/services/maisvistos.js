export default class MaisVistos {
  constructor(eventos) {
    this.eventos = [...eventos]

  }

  preencher() {
    const eventosCard = document.querySelector('.mais_vistos_lista')

    this.eventos.forEach(element => {
      eventosCard.innerHTML += `
        <p>${element.titulo}</p>
      `
    });
  }

  maisVistos() {
    this.eventos.sort((a, b) => a.visualizacao < b.visualizacao ? 1 : -1)

    this.preencher()
  }

  init() {
    this.maisVistos()
  }
}