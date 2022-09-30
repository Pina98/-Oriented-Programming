import PromptSync = require('prompt-sync');
import { Patinete } from './Exercice 1';

const prompt = PromptSync()

const marca = prompt('Marca do seu patinete: ')
const ano = Number(prompt('Ano de lançamento: '))
const cor = prompt('Cor do seu patinete: ')
const banco = Number(prompt('O seu patinete tem banco?: 1 - Sim 2 - Não: '))
    
switch (banco) {
    case 1:
        console.log('\n\nMarca do seu patinete:' + marca)
        console.log('Ano de lançamento: ' + ano)
        console.log('Bairro: ' + cor)
        console.log('tem banco!')
        break;
    case 2:
        console.log('\n\nMarca:' + marca)
        console.log('Ano de Lançamento: ' + ano)
        console.log('Cor do seu patinete: ' + cor)
        console.log('Não tem banco!')
        break;
    default:
        console.log('Coloque um número válido')
        break;
}

const patinete = new Patinete ({
    marca,
    ano,
    cor,
    banco
})