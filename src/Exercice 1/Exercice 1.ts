interface newPatinete {
  
    marca : string;
    
    ano : number
    
    cor : string;
    
    banco : number
  }

class Patinete {
    
    private marca : string
    
    private ano : number
    
    private cor : string

    private banco : number

    constructor ({marca, ano, cor, banco} : newPatinete) {

        this.marca = marca
        this.ano = ano

        this.cor = cor
    
        this.banco = banco
    }
}

export {Patinete}