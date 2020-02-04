"use strict";
// let e const
let seraQuePode = "?";
console.log(seraQuePode);
let estaFrio = true;
if (estaFrio) {
    let acao = "Colocar casaco";
    console.log(acao);
}
const cpf = "123.132.554-00";
// cpf = '846.948.000-99';
console.log(cpf);
var segredo = "externo";
function revelar() {
    let segredo = "interno";
    console.log(segredo);
}
revelar();
console.log(segredo);
{
    {
        const def = "def";
        console.log(def);
    }
}
for (let i = 0; i < 10; i++) {
    console.log(i);
}
//console.log(i);
// Arrow functions
function somar(n1, n2) {
    return n1 + n2;
}
console.log(somar(2, 2));
const subtrair = (n1, n2) => n1 - n2;
console.log(subtrair(5, 2));
const saudacao = () => console.log("Olá!");
saudacao();
const falarCom = (pessoa) => console.log("Ola " + pessoa);
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
function contagemRegressiva(inicio = 5, fim = inicio - 5) {
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
const numbers = [1, 10, 89, -5, 200, 1038];
console.log(Math.max(...numbers));
const turmaA = ["Ana", "João", "Fernando"];
const turmaB = ["Bia", "Juliana", "Alessandra", ...turmaA];
console.log(turmaB);
function retornaArray(...args) {
    return args;
}
console.log(retornaArray(1, 2, 3, 4, 5, 6));
console.log(retornaArray(...numbers));
// Rest e Spread (Tupla)
const tupla = [1, "abc", false];
function tuplaParam1(a, b, c) {
    console.log(`1> ${a}, ${b}, ${c}`);
}
tuplaParam1(...tupla);
function tuplaParam2(...params) {
    console.log(`2> ${params[0]}, ${params[1]}, ${params[2]}`);
}
tuplaParam2(...tupla);
// Destructing (array)
const caracteristicas = ["Motor Zetec 1.8", 2020];
const [motor, ano] = caracteristicas;
console.log(motor, ano);
// Destructing (objeto)
const item = {
    nome: "SSD 128GB",
    preco: 200,
    caracteristicas: {
        w: "Importado"
    }
};
const { nome: nomeItem, preco: precoItem, caracteristicas: { w } } = item;
console.log(nomeItem, precoItem, w);
const usuarioID = "SuporteCod3r";
const notificacoes = "19";
// const boasVindas = 'Boas vindas ' + usuarioID +
//     'Notificações: ' + notificacoes
const boasVindas = `
Boas vindas ${usuarioID},
Notificações: ${parseInt(notificacoes) > 9 ? "+9" : notificacoes}
`;
console.log(boasVindas);
console.log(`${(1 + 1) * 30}`);
console.log(`Motor: ${caracteristicas[0]}`);
// Desafios
// Exercicio 1
const dobro = (valor) => valor * 2;
console.log(dobro(10));
// Exercicio 2
const dizerOla = (nome = "Pessoa") => {
    console.log("Ola, " + nome);
};
dizerOla();
dizerOla("Anna");
// Exercicio 3
const nums = [-3, 33, 38, 5];
console.log(Math.min(...nums));
// Exercicio 4
const array = [55, 20];
array.push(...nums);
console.log(array);
// Exercicio 5
const notas = [8.5, 6.3, 9.4];
const [nota1, nota2, nota3] = notas;
console.log(nota1, nota2, nota3);
// Exercicio 6
const cientista = { primeiroNome: "Will", experiencia: 12 };
// var primeiroNome = cientista.primeiroNome;
// var experiencia = cientista.experiencia;
const { primeiroNome, experiencia } = cientista;
console.log(primeiroNome, experiencia);
// Callback
function esperar3s(callback) {
    setTimeout(() => {
        callback("3s depois...");
    }, 3000);
}
esperar3s(function (resultado) {
    console.log(resultado);
});
function esperar3sPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("3s depois promise...");
        }, 3000);
    });
}
// esperar3sPromise()
//     .then(dado => console.log(dado))
fetch("https://swapi.co/api/people/1")
    .then(res => res.json())
    .then(personagem => personagem.films)
    .then(films => fetch(films[0]))
    .then(resFilm => resFilm.json())
    .then(filme => console.log(filme.title))
    .catch(err => console.log("Catch!!!!" + err));
