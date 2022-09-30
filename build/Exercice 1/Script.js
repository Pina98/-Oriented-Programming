"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var Exercice_1_1 = require("./Exercice 1");
var prompt = PromptSync();
var marca = prompt('Marca do seu patinete: ');
var ano = Number(prompt('Ano de lançamento: '));
var cor = prompt('Cor do seu patinete: ');
var banco = Number(prompt('O seu patinete tem banco?: 1 - Sim 2 - Não: '));
switch (banco) {
    case 1:
        console.log('\n\nMarca do seu patinete:' + marca);
        console.log('Ano de lançamento: ' + ano);
        console.log('Bairro: ' + cor);
        console.log('tem banco!');
        break;
    case 2:
        console.log('\n\nMarca:' + marca);
        console.log('Ano de Lançamento: ' + ano);
        console.log('Cor do seu patinete: ' + cor);
        console.log('Não tem banco!');
        break;
    default:
        console.log('Coloque um número válido');
        break;
}
var patinete = new Exercice_1_1.Patinete({
    marca: marca,
    ano: ano,
    cor: cor,
    banco: banco
});
