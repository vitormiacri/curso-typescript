"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
// let e const
var seraQuePode = "?";
console.log(seraQuePode);
var estaFrio = true;
if (estaFrio) {
    var acao = "Colocar casaco";
    console.log(acao);
}
var cpf = "123.132.554-00";
// cpf = '846.948.000-99';
console.log(cpf);
var segredo = "externo";
function revelar() {
    var segredo = "interno";
    console.log(segredo);
}
revelar();
console.log(segredo);
{
    {
        var def = "def";
        console.log(def);
    }
}
for (var i = 0; i < 10; i++) {
    console.log(i);
}
//console.log(i);
// Arrow functions
function somar(n1, n2) {
    return n1 + n2;
}
console.log(somar(2, 2));
var subtrair = function (n1, n2) { return n1 - n2; };
console.log(subtrair(5, 2));
var saudacao = function () { return console.log("Olá!"); };
saudacao();
var falarCom = function (pessoa) { return console.log("Ola " + pessoa); };
falarCom("João");
// this
// function normalComThis() {
//     console.log(this)
// }
// normalComThis()
// const normalComThisEspecial = normalComThis
//     .bind({ nome: 'Ana' })
// normalComThisEspecial()
// // this???
// console.log(this)
// const arrowComThis = () => console.log(this)
// arrowComThis()
// const arrowComThisEspecial = arrowComThis
//     .bind({ nome: 'Ana' })
// arrowComThisEspecial()
// Parâmetros padrão
function contagemRegressiva(inicio, fim) {
    if (inicio === void 0) { inicio = 5; }
    if (fim === void 0) { fim = inicio - 5; }
    console.log(inicio);
    while (inicio > fim) {
        inicio--;
        console.log(inicio);
    }
    console.log("Fim!");
}
contagemRegressiva();
contagemRegressiva(3);
// Rest e Spread
var numbers = [1, 10, 89, -5, 200, 1038];
console.log(Math.max.apply(Math, numbers));
var turmaA = ["Ana", "João", "Fernando"];
var turmaB = __spreadArrays(["Bia", "Juliana", "Alessandra"], turmaA);
console.log(turmaB);
function retornaArray() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args;
}
console.log(retornaArray(1, 2, 3, 4, 5, 6));
console.log(retornaArray.apply(void 0, numbers));
// Rest e Spread (Tupla)
var tupla = [1, "abc", false];
function tuplaParam1(a, b, c) {
    console.log("1> " + a + ", " + b + ", " + c);
}
tuplaParam1.apply(void 0, tupla);
function tuplaParam2() {
    var params = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        params[_i] = arguments[_i];
    }
    console.log("2> " + params[0] + ", " + params[1] + ", " + params[2]);
}
tuplaParam2.apply(void 0, tupla);
// Destructing (array)
var caracteristicas = ["Motor Zetec 1.8", 2020];
var motor = caracteristicas[0], ano = caracteristicas[1];
console.log(motor, ano);
// Destructing (objeto)
var item = {
    nome: "SSD 128GB",
    preco: 200,
    caracteristicas: {
        w: "Importado"
    }
};
var nomeItem = item.nome, precoItem = item.preco, w = item.caracteristicas.w;
console.log(nomeItem, precoItem, w);
var usuarioID = "SuporteCod3r";
var notificacoes = "19";
// const boasVindas = 'Boas vindas ' + usuarioID +
//     'Notificações: ' + notificacoes
var boasVindas = "\nBoas vindas " + usuarioID + ",\nNotifica\u00E7\u00F5es: " + (parseInt(notificacoes) > 9 ? "+9" : notificacoes) + "\n";
console.log(boasVindas);
console.log("" + (1 + 1) * 30);
console.log("Motor: " + caracteristicas[0]);
// Desafios
// Exercicio 1
var dobro = function (valor) { return valor * 2; };
console.log(dobro(10));
// Exercicio 2
var dizerOla = function (nome) {
    if (nome === void 0) { nome = "Pessoa"; }
    console.log("Ola, " + nome);
};
dizerOla();
dizerOla("Anna");
// Exercicio 3
var nums = [-3, 33, 38, 5];
console.log(Math.min.apply(Math, nums));
// Exercicio 4
var array = [55, 20];
array.push.apply(array, nums);
console.log(array);
// Exercicio 5
var notas = [8.5, 6.3, 9.4];
var nota1 = notas[0], nota2 = notas[1], nota3 = notas[2];
console.log(nota1, nota2, nota3);
// Exercicio 6
var cientista = { primeiroNome: "Will", experiencia: 12 };
// var primeiroNome = cientista.primeiroNome;
// var experiencia = cientista.experiencia;
var primeiroNome = cientista.primeiroNome, experiencia = cientista.experiencia;
console.log(primeiroNome, experiencia);
// Callback
function esperar3s(callback) {
    setTimeout(function () {
        callback("3s depois...");
    }, 3000);
}
esperar3s(function (resultado) {
    console.log(resultado);
});
function esperar3sPromise() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve("3s depois promise...");
        }, 3000);
    });
}
// esperar3sPromise()
//     .then(dado => console.log(dado))
fetch("https://swapi.co/api/people/1")
    .then(function (res) { return res.json(); })
    .then(function (personagem) { return personagem.films; })
    .then(function (films) { return fetch(films[0]); })
    .then(function (resFilm) { return resFilm.json(); })
    .then(function (filme) { return console.log(filme.title); })
    .catch(function (err) { return console.log("Catch!!!!" + err); });
