import PromptSync = require('prompt-sync');
import { Bancaria } from './Exercice 2';

const prompt = PromptSync()

const nome = prompt('Escreva seu nome: ')
const idDeAcesso = Number(prompt('Digite seu id de acesso: '))
let senha = prompt('Escreva sua senha: ')
const cpf = prompt('Escreva seu CPF: ')
const banco = prompt('Qual seu banco?: ')


do {
    senha = prompt('Escreva a senha: ')
} while (senha != '1234') 


console.log('\n\nNome:' + nome)
console.log('Seu id de acesso: ' + idDeAcesso)
console.log('Seu CPF: ' + cpf)
console.log(`Seu banco é o ${banco}`)

const patinete = new Bancaria ({
    nome,
    idDeAcesso,
    cpf,
    senha,
    banco
})