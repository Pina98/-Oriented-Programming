"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var Exercice_3_1 = require("./Exercice 3");
var prompt = PromptSync();
var nome = prompt('Digite seu nome: ');
var entrada = prompt('Digite sua data de entrada: ');
var leito = Number(prompt('Digite seu leito: '));
var cpf = prompt('Digite seu CPF: ');
console.log('\n\nNome:' + nome);
console.log('Sua data de entrada foi: ' + entrada);
console.log('Seu CPF: ' + cpf);
console.log("Seu leito \u00E9 o : ".concat(leito));
var patinete = new Exercice_3_1.Paciente({
    nome: nome,
    entrada: entrada,
    cpf: cpf,
    leito: leito,
});
