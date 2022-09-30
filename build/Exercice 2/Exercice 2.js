"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bancaria = void 0;
var Bancaria = /** @class */ (function () {
    function Bancaria(_a) {
        var nome = _a.nome, idDeAcesso = _a.idDeAcesso, senha = _a.senha, cpf = _a.cpf, banco = _a.banco;
        this.nome = nome;
        this.idDeAcesso = idDeAcesso;
        this.senha = senha;
        this.cpf = cpf;
        this.banco = banco;
    }
    return Bancaria;
}());
exports.Bancaria = Bancaria;
