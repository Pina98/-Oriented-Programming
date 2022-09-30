import PromptSync = require('prompt-sync');
import { Paciente } from './Exercice 3';

const prompt = PromptSync()

const nome = prompt('Digite seu nome: ')
const entrada = prompt('Digite sua data de entrada: ')
const leito = Number(prompt('Digite seu leito: '))
const cpf = prompt('Digite seu CPF: ')


console.log('\n\nNome:' + nome)
console.log('Sua data de entrada foi: ' + entrada)
console.log('Seu CPF: ' + cpf)
console.log(`Seu leito é o : ${leito}`)

const patinete = new Paciente ({
    nome,
    entrada,
    cpf,
    leito,
})