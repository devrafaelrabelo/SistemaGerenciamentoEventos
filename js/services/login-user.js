export default class LogIn {
  constructor(url, user) {
    this.url = url;
    user ? this.user = user : this.user = []
  }

  async fetchUsuarios(params) {
    const response = await fetch(this.url)
    const usuarios = await response.json();
    usuarios.forEach((usuario) => {
      if (usuario.user === this.user.user && usuario.passwd === this.user.passwd) {
        const token = {
          "token": new Date().getTime(),
          "usuario": usuario.nome,
          "user":usuario.user
        }
        window.location.reload()
        localStorage.setItem('token', JSON.stringify(token))
      }
    })
  }


  init() {
    this.fetchUsuarios()
  }
}