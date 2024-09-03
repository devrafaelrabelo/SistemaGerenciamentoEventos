import LogInModal from "../auxiliar/loginModal.js";

export default class ValidarLogin {
  constructor() {
    this.statusLogin = JSON.parse(localStorage.getItem('token'))
  }

  init() {
    if (!this.statusLogin) {
      new LogInModal().init()
    } else {
      const btnLogar = document.querySelector('.btn_logar')
      btnLogar.classList.add('inativo')

      const btnCadastrar = document.querySelector('.btn_cadastrar')
      btnCadastrar.classList.add('inativo')

      const btnDeslogar = document.querySelector('.btn_deslogar')
      btnDeslogar.classList.add('ativo')

      const nomePerfil = document.querySelector('.nome_perfil')
      nomePerfil.classList.add('ativo')

      const nomePerfilSpan = document.querySelector('.nome_perfil span')
      nomePerfilSpan.innerText = JSON.parse(localStorage.getItem('token')).usuario
    }
  }
}