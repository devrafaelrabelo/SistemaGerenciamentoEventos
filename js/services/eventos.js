export default class Eventos {
  constructor(url) {
    this.url = url
  }

  async fetchCardapio() {
    const response = await fetch(this.url)
    const eventosJSON = await response.json();

    return eventosJSON;
  }

  init() {
    return this.fetchCardapio();
  }
}