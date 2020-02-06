"use strict";
// Exercicio 1
class Moto {
    constructor(nome) {
        this.nome = nome;
        this.velocidade = 0;
        this.nome = nome;
    }
    buzinar() {
        console.log("Tooooooot!");
    }
    acelerar(delta) {
        this.velocidade = this.velocidade + delta;
    }
}
const moto = new Moto("Ducati");
moto.buzinar();
console.log(moto.velocidade);
moto.acelerar(30);
console.log(moto.velocidade);
// Exercício 2
class Objeto2D {
    constructor(base, altura) {
        this.base = base;
        this.altura = altura;
        this.base = base;
        this.altura = altura;
    }
}
class Retangulo extends Objeto2D {
    area() {
        return this.altura * this.altura;
    }
}
const retangulo = new Retangulo(5, 7);
console.log(retangulo.area());
// Exercício 3
class Estagiario {
    constructor() {
        this._primeiroNome = "";
    }
    get primeiroNome() {
        return this._primeiroNome;
    }
    set primeiroNome(valor) {
        if (valor.length >= 3) {
            this._primeiroNome = valor;
        }
        else {
            this._primeiroNome = "";
        }
    }
}
const estagiario = new Estagiario();
console.log(estagiario.primeiroNome);
estagiario.primeiroNome = "Le";
console.log(estagiario.primeiroNome);
estagiario.primeiroNome = "Leonardo";
console.log(estagiario.primeiroNome);
