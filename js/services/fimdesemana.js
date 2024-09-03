export default class FimdeSemana {
  constructor(eventos) {
    this.eventos = eventos;
  }

  preencherEventos() {
    const eventosCard = document.querySelector('.evento_no_fds_lista')

    if (!(this.eventoFDS.length === 0)) {
      this.eventoFDS.forEach(element => {
        eventosCard.innerHTML += `
          <p>${element.titulo}</p>
        `
      });
    } else {
      eventosCard.innerHTML += `
          <p>SEM EVENTOS</p>
        `
    }
  }

  filtrarEventos() {
    const sabado = new Date(this.acharOProximoSabado())
    const domingo = new Date((this.formatAtualFormatada(this.acharOProximoDomingo(sabado)) + " 23:59:59"))

    this.eventoFDS = this.eventos.filter((evento) => {
      if (sabado.getTime() <= new Date(evento.horaInicio) &&
        domingo.getTime() > new Date(evento.horaInicio)) {
        return evento
      }
    })

    this.preencherEventos()
  }

  acharOProximoSabado() {
    const data = new Date(this.formatAtualFormatada(new Date()))

    if (data.getDay() == 0) {
      return this.addDays(data, 6);
    } else if (data.getDay() == 1) {
      return this.addDays(data, 5);
    } else if (data.getDay() == 2) {
      return this.addDays(data, 4);
    } else if (data.getDay() == 3) {
      return this.addDays(data, 3);
    } else if (data.getDay() == 4) {
      return this.addDays(data, 2);
    } else if (data.getDay() == 5) {
      return this.addDays(data, 1);
    } else if (data.getDay() == 6) {
      return this.addDays(data, 0);
    }

  }

  acharOProximoDomingo(sabado) {
    return this.addDays(sabado, 1);
  }

  addDays(date, dia) {
    date.setDate(date.getDate() + dia);
    return date;
  }

  formatAtualFormatada(dataPassada) {
    const data = new Date(dataPassada),
      dia = data.getDate().toString(),
      diaF = (dia.length == 1) ? '0' + dia : dia,
      mes = (data.getMonth() + 1).toString(), //+1 pois no getMonth Janeiro começa com zero.
      mesF = (mes.length == 1) ? '0' + mes : mes,
      anoF = data.getFullYear();

    return [mesF, diaF, anoF];
  }

  init() {
    this.filtrarEventos()

    return this
  }
}