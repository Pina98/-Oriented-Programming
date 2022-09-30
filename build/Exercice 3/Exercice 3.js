"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Paciente = void 0;
var Paciente = /** @class */ (function () {
    function Paciente(_a) {
        var nome = _a.nome, entrada = _a.entrada, leito = _a.leito, cpf = _a.cpf;
        this.nome = nome;
        this.entrada = entrada;
        this.leito = leito;
        this.cpf = cpf;
    }
    return Paciente;
}());
exports.Paciente = Paciente;
