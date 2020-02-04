"use strict";
class Data {
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversario = new Data(4, 5, 1985);
aniversario.dia = 1;
console.log(aniversario.dia);
console.log(aniversario);
const casamento = new Data();
casamento.ano = 2018;
console.log(casamento);
class DataEsperta {
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversarioEsperto = new DataEsperta(4, 5, 1985);
aniversarioEsperto.dia = 1;
console.log(aniversarioEsperto.dia);
console.log(aniversarioEsperto);
const casamentoEsperto = new DataEsperta();
casamentoEsperto.ano = 2018;
console.log(casamentoEsperto);
// Desafio Classe Produto
// Atributos: nome, preço e desconto
// Criar o construtor
// Obs: Desconto é opcional (valor padrão: 0)
// Obs: Criar dois produtos: passando dois e três parametros
class Produto {
    constructor(nome, preco, desconto = 0) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }
    precoComDesconto() {
        return this.preco * (1 - this.desconto);
    }
    resumo() {
        return `${this.nome} custo R$${this.precoComDesconto()} (${this.desconto *
            100}% off)`;
    }
}
const iphone = new Produto("Iphone XR", 3499, 0.15);
console.log(iphone);
console.log(iphone.resumo());
const samsungS10 = new Produto("Samsung S10", 3299);
samsungS10.desconto = 0.1;
console.log(samsungS10);
console.log(samsungS10.resumo());
class Carro {
    constructor(marca, modelo, velocidadeMaxima = 200) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadeMaxima = velocidadeMaxima;
        this.velocidadeAtual = 0;
    }
    alterarVelocidade(delta) {
        const novavelocidade = this.velocidadeAtual + delta;
        const velocidadeValida = novavelocidade >= 0 && novavelocidade <= this.velocidadeMaxima;
        if (velocidadeValida) {
            this.velocidadeAtual = novavelocidade;
        }
        else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
        }
        return this.velocidadeAtual;
    }
    acelerar() {
        return this.alterarVelocidade(5);
    }
    frear() {
        return this.alterarVelocidade(-5);
    }
}
const carro1 = new Carro("Ford", "Ka", 180);
Array(50)
    .fill(0)
    .forEach(() => carro1.acelerar());
console.log(carro1.acelerar());
Array(20)
    .fill(0)
    .forEach(() => carro1.frear());
console.log(carro1.frear());
//simular erros no TS, mas funciona no javascript puro
// carro1.velocidadeAtual = 300;
// console.log("atual => " + carro1.velocidadeAtual);
// carro1.velocidadeMaxima = 500;
// console.log("maxima => " + carro1.velocidadeMaxima);
// carro1.alterarVelocidade(150);
// console.log("atual => " + carro1.velocidadeAtual);
class Ferrari extends Carro {
    constructor(modelo, velocidadeMaxima) {
        super("Ferrari", modelo, velocidadeMaxima);
    }
    acelerar() {
        return this.alterarVelocidade(20);
    }
    frear() {
        return this.alterarVelocidade(-15);
    }
}
const f40 = new Ferrari("F40", 324);
console.log(`${f40.marca} ${f40.modelo}`);
console.log(f40.acelerar());
console.log(f40.acelerar());
console.log(f40.acelerar());
console.log(f40.frear());
console.log(f40.frear());
