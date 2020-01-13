"use strict";
// string
var nome = "Vitor";
console.log(nome);
//nome = 26 -> TS não permite
// numbers
var idade = 34;
// idade = 'fdivo'-> TS não permite
idade = 27.5;
console.log(idade);
// boolean
var possuiHobbies = false;
// possuiHobbies = 1;-> TS não permite
console.log(possuiHobbies);
// tipos explícitos
var minhaIdade;
minhaIdade = 35;
console.log(typeof minhaIdade);
// minhaIdade = "é 46" -> TS não permite
// array
var hobbies = ["Cozinhar", "Praticar esporter"];
console.log(hobbies[0]);
console.log(typeof hobbies);
hobbies = [100, 200, 300];
// hobbies = 100 -> TS não permite
console.log(hobbies);
// tuplas
var endereco = ["Av Principal", 99, ""];
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
var minhaCor = Cor.Verde;
console.log(minhaCor);
console.log(Cor.Azul);
console.log(Cor.Laranja, Cor.Amarelo);
console.log(Cor.Verde, Cor.Vermelho);
// Any
var carro = "BMW";
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
var calculo;
// calculo = digaOi; -> TS não permite
// calculo();
// calculo = {}
calculo = multiplicar;
console.log(calculo(10, 30));
// objetos
var usuario = {
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
// Desafio
/*
  Criar um objeto funcionario com:
    - Array de strings com os nomes dos supervisores
    - função de bater ponto que recebe a hora (numero) e retorna uma string:
      - Ponto normal (<= 8)
      - Fora do horario (> 8)
*/
var funcionario;
funcionario = {
    supervisores: ["Junior", "Luis", "Lucas"],
    baterPonto: function (hora) {
        if (hora <= 8) {
            return "Ponto normal";
        }
        else {
            return "Ponto fora do horário";
        }
    }
};
console.table(funcionario.supervisores);
console.log(funcionario.baterPonto(5));
console.log(funcionario.baterPonto(14));
