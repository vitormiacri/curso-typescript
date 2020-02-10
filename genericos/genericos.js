"use strict";
function echo(objeto) {
    return objeto;
}
console.log(echo("Vitor").length);
console.log(echo(34).length);
console.log(echo({ nome: "Vitor", idade: 34 }));
// Usando Generics
function echoMelhorado(objeto) {
    return objeto;
}
console.log(echoMelhorado("Vitor").length);
console.log(echoMelhorado(34));
console.log(echoMelhorado({ nome: "Vitor", idade: 34 }));
//Generics disponiveis na API
const avaliacoes = [10, 7, 9.3];
avaliacoes.push(8.3);
// avaliacoes.push('7.5');
console.log(avaliacoes);
//Array
function imprimir(args) {
    args.forEach(elemento => console.log(elemento));
}
imprimir([1, 2, 3]);
imprimir([1, 2, 3]);
imprimir(["Ana", "Bia", "Carlos"]);
imprimir([
    { nome: "Vitor", idade: 34 },
    { nome: "Junior", idade: 14 },
    { nome: "Augusto", idade: 24 }
]);
imprimir([
    { nome: "Ana", idade: 34 },
    { nome: "Bia", idade: 14 },
    { nome: "Natalia", idade: 24 }
]);
const chamarEcho = echoMelhorado;
console.log(chamarEcho("Alguma coisa"));
// Class com Generics
class OperacaoBinaria {
    constructor(operando1, operando2) {
        this.operando1 = operando1;
        this.operando2 = operando2;
    }
}
class SomaBinaria extends OperacaoBinaria {
    executar() {
        return this.operando1 + this.operando2;
    }
}
console.log(new SomaBinaria(3, 4).executar());
class DiferencaEntreDatas extends OperacaoBinaria {
    getTime(data) {
        let { dia, mes, ano } = data;
        return new Date(`${mes}/${dia}/${ano}`).getTime();
    }
    executar() {
        const t1 = this.getTime(this.operando1);
        const t2 = this.getTime(this.operando2);
        const diferenca = Math.abs(t1 - t2);
        const dia = 1000 * 60 * 60 * 24;
        return `${Math.ceil(diferenca / dia)} dia(s)`;
    }
}
const d1 = new Data(1, 2, 2020);
const d2 = new Data(5, 2, 2021);
console.log(new DiferencaEntreDatas(d1, d2).executar());
// Desafio Classe Fila
// Atributo: fila (array)
// Métodos: entrar, proximo, imprimir
class Fila {
    constructor(...args) {
        this.fila = args;
    }
    entrar(item) {
        this.fila.push(item);
    }
    proximo() {
        if (this.fila.length > 1 && this.fila[0]) {
            const primeiro = this.fila[0];
            this.fila.splice(0, 1);
            return primeiro;
        }
        return null;
    }
    imprimir() {
        console.log(this.fila);
    }
}
const fila = new Fila("Ana", "Bia", "Vitor", "Carina");
fila.imprimir();
fila.entrar("Juliana");
fila.imprimir();
console.log(fila.proximo());
console.log(fila.proximo());
console.log(fila.proximo());
fila.imprimir();
class Mapa {
    constructor() {
        this.itens = new Array();
    }
    obter(chave) {
        const resultado = this.itens.filter(i => i.chave === chave);
        return resultado ? resultado[0] : null;
    }
    colocar(dadosMapa) {
        const encontrado = this.obter(dadosMapa.chave);
        if (encontrado) {
            encontrado.valor = dadosMapa.valor;
        }
        else {
            this.itens.push(dadosMapa);
        }
    }
    imprimir() {
        console.log(this.itens);
    }
    limpar() {
        this.itens = new Array();
    }
}
const mapa = new Mapa();
mapa.colocar({ chave: 1, valor: "Pedro" });
mapa.colocar({ chave: 2, valor: "Rebeca" });
mapa.colocar({ chave: 3, valor: "Maria" });
mapa.colocar({ chave: 1, valor: "Gustavo" });
console.log(mapa.obter(2));
mapa.imprimir();
mapa.limpar();
mapa.imprimir();
