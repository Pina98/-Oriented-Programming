interface newBancaria {
  
    nome : string;
    idDeAcesso : number
    senha : string
    cpf : string;
    banco : number
  }

class Bancaria {
    private nome : string
    private idDeAcesso : number
    private senha : string
    private cpf : string
    private banco : number

    constructor ({nome, idDeAcesso,senha, cpf, banco} : newBancaria) {
        this.nome = nome
        this.idDeAcesso = idDeAcesso
        this.senha = senha
        this.cpf = cpf
        this.banco = banco
    }
}

export {Bancaria}