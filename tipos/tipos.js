"use strict";
// string
let nome = "Vitor";
console.log(nome);
//nome = 26 -> TS não permite
// numbers
let idade = 34;
// idade = 'fdivo'-> TS não permite
idade = 27.5;
console.log(idade);
// boolean
let possuiHobbies = false;
// possuiHobbies = 1;-> TS não permite
console.log(possuiHobbies);
// tipos explícitos
let minhaIdade;
minhaIdade = 35;
console.log(typeof minhaIdade);
// minhaIdade = "é 46" -> TS não permite
// array
let hobbies = ["Cozinhar", "Praticar esporter"];
console.log(hobbies[0]);
console.log(typeof hobbies);
hobbies = [100, 200, 300];
// hobbies = 100 -> TS não permite
console.log(hobbies);
// tuplas
let endereco = ["Av Principal", 99, ""];
console.log(endereco);
endereco = ["Rua importante", 1270, "Bloco V"];
console.log(endereco);
// Enums
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 100] = "Verde";
    Cor[Cor["Azul"] = 10] = "Azul";
    Cor[Cor["Laranja"] = 11] = "Laranja";
    Cor[Cor["Amarelo"] = 12] = "Amarelo";
    Cor[Cor["Vermelho"] = 100] = "Vermelho";
})(Cor || (Cor = {}));
let minhaCor = Cor.Verde;
console.log(minhaCor);
console.log(Cor.Azul);
console.log(Cor.Laranja, Cor.Amarelo);
console.log(Cor.Verde, Cor.Vermelho);
// Any
let carro = "BMW";
console.log(carro);
carro = { marcar: "BMW", ano: 2010 };
console.log(carro);
// Funções
function retornaMeuNome() {
    // return minhaIdade -> TS não permite
    return nome;
}
console.log(retornaMeuNome());
function digaOi() {
    console.log("Oi");
}
digaOi();
function multiplicar(numA, numB) {
    return numA * numB;
}
console.log(multiplicar(2, 4));
// tipo função
let calculo;
// calculo = digaOi; -> TS não permite
// calculo();
// calculo = {}
calculo = multiplicar;
console.log(calculo(10, 30));
// objetos
let usuario = {
    nome: "Vitor",
    idade: 30
};
console.log(usuario);
// usuario = {} -> TS não permite
// usuario = {
//   name: 'Maria',
//   age: 43
// } -> TS não permite
usuario = {
    idade: 33,
    nome: "José"
};
console.log(usuario);
function baterPonto(hora) {
    if (hora <= 8) {
        return "Ponto normal";
    }
    else {
        return "Ponto fora do horário";
    }
}
let funcionario = {
    supervisores: ["Junior", "Luis", "Lucas"],
    baterPonto
};
console.table(funcionario.supervisores);
console.log(funcionario.baterPonto(5));
console.log(funcionario.baterPonto(14));
let funcionario2 = {
    supervisores: ["Julia", "Gustavo"],
    baterPonto
};
console.table(funcionario2.supervisores);
console.log(funcionario2.baterPonto(4));
console.log(funcionario2.baterPonto(9));
// Union Types
let nota = 10;
console.log(`Minha nota é ${nota}!`);
nota = "8";
console.log(`Minha nota é ${nota}!`);
// Chegando tipos
let valor = 30;
if (typeof valor === "number") {
    console.log("É um number");
}
else {
    console.log(typeof valor);
}
// Never
function falha(msg) {
    throw new Error(msg);
}
const produto = {
    nome: "Vassoura",
    preco: 12,
    validaProduto() {
        if (!this.nome || this.nome.trim().length == 0) {
            falha("Precisa ter um nome");
        }
        if (this.preco <= 0) {
            falha("Preço inválido");
        }
    }
};
produto.validaProduto();
// Tipo Null
let alturaOpcional = 12;
alturaOpcional = null;
const contato = {
    nome: "Fulano",
    tel1: "987654421",
    tel2: null
};
console.log(contato);
let contaBancaria = {
    saldo: 3456,
    depositar(valor) {
        this.saldo += valor;
    }
};
let correntista = {
    nome: "Ana Silva",
    contaBancaria,
    contatos: ["34567890", "98765432"]
};
correntista.contaBancaria.depositar(3000);
console.log(correntista);
