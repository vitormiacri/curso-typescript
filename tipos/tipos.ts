// string
let nome: string = "Vitor";
console.log(nome);
//nome = 26 -> TS não permite

// numbers
let idade: number = 34;
// idade = 'fdivo'-> TS não permite
idade = 27.5;
console.log(idade);

// boolean
let possuiHobbies: boolean = false;
// possuiHobbies = 1;-> TS não permite
console.log(possuiHobbies);

// tipos explícitos
let minhaIdade: number;
minhaIdade = 35;
console.log(typeof minhaIdade);
// minhaIdade = "é 46" -> TS não permite

// array
let hobbies: any[] = ["Cozinhar", "Praticar esporter"];
console.log(hobbies[0]);
console.log(typeof hobbies);

hobbies = [100, 200, 300];
// hobbies = 100 -> TS não permite
console.log(hobbies);

// tuplas
let endereco: [string, number, string] = ["Av Principal", 99, ""];
console.log(endereco);

endereco = ["Rua importante", 1270, "Bloco V"];
console.log(endereco);

// Enums
enum Cor {
  Cinza, // 0
  Verde = 100, // 1
  Azul = 10, // 2
  Laranja,
  Amarelo,
  Vermelho = 100
}

let minhaCor: Cor = Cor.Verde;
console.log(minhaCor);

console.log(Cor.Azul);
console.log(Cor.Laranja, Cor.Amarelo);
console.log(Cor.Verde, Cor.Vermelho);

// Any
let carro: any = "BMW";
console.log(carro);
carro = { marcar: "BMW", ano: 2010 };
console.log(carro);

// Funções
function retornaMeuNome(): string {
  // return minhaIdade -> TS não permite
  return nome;
}

console.log(retornaMeuNome());

function digaOi(): void {
  console.log("Oi");
}

digaOi();

function multiplicar(numA: number, numB: number): number {
  return numA * numB;
}

console.log(multiplicar(2, 4));

// tipo função
let calculo: (numA: number, numB: number) => number;
// calculo = digaOi; -> TS não permite
// calculo();
// calculo = {}

calculo = multiplicar;
console.log(calculo(10, 30));

// objetos
let usuario: { nome: string; idade: number } = {
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

let funcionario: {
  supervisores: string[];
  baterPonto: (hora: number) => string;
};

funcionario = {
  supervisores: ["Junior", "Luis", "Lucas"],
  baterPonto(hora: number): string {
    if (hora <= 8) {
      return "Ponto normal";
    } else {
      return "Ponto fora do horário";
    }
  }
};

console.table(funcionario.supervisores);
console.log(funcionario.baterPonto(5));
console.log(funcionario.baterPonto(14));
