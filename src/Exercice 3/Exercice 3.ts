interface newPaciente {
  
    nome : string;
    
    entrada : string
    
    leito : number
    
    cpf : string;
  }

class Paciente {
    
    private nome : string
    
    private entrada : string
    
    private leito : number
    
    private cpf : string

    constructor ({nome, entrada,leito, cpf} : newPaciente) {
        
        this.nome = nome
        
        this.entrada = entrada
        
        this.leito = leito

        this.cpf = cpf
    }
}

export {Paciente}