class Data {
  // Publico por padrao
  dia: number;
  mes: number;
  ano: number;

  constructor(dia: number = 1, mes: number = 1, ano: number = 1970) {
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
  constructor(
    public dia: number = 1,
    public mes: number = 1,
    public ano: number = 1970
  ) {}
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
  constructor(
    public nome: string,
    public preco: number,
    public desconto: number = 0
  ) {}

  public precoComDesconto(): number {
    return this.preco * (1 - this.desconto);
  }

  public resumo(): string {
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
  private velocidadeAtual: number = 0;

  constructor(
    public marca: string,
    public modelo: string,
    private velocidadeMaxima: number = 200
  ) {}

  protected alterarVelocidade(delta: number): number {
    const novavelocidade = this.velocidadeAtual + delta;
    const velocidadeValida =
      novavelocidade >= 0 && novavelocidade <= this.velocidadeMaxima;

    if (velocidadeValida) {
      this.velocidadeAtual = novavelocidade;
    } else {
      this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
    }

    return this.velocidadeAtual;
  }

  public acelerar(): number {
    return this.alterarVelocidade(5);
  }

  public frear(): number {
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
  constructor(modelo: string, velocidadeMaxima: number) {
    super("Ferrari", modelo, velocidadeMaxima);
  }

  public acelerar(): number {
    return this.alterarVelocidade(20);
  }

  public frear(): number {
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

// Getters & Setters
class Pessoa {
  private _idade: number = 0;

  get idade(): number {
    return this._idade;
  }

  set idade(valor: number) {
    if (valor >= 0 && valor <= 120) {
      this._idade = valor;
    }
  }
}

const pessoa1 = new Pessoa();
pessoa1.idade = 10;
console.log(pessoa1.idade);

pessoa1.idade = -3;
console.log(pessoa1.idade);

// Atributos e métodos estáticos
// - Um método ou atributo estático pertence a classe
//    ou seja, não é necessário instaciar um objeto para acessar ou
//    executar um método.
class Matematica {
  static PI: number = 3.1416;

  static areaCirc(raio: number): number {
    return this.PI * raio * raio;
  }
}

// const m1 = new Matematica();
// m1.PI = 4.2;
// console.log(m1.areaCirc(4));

// const m2 = new Matematica();
// console.log(m2.areaCirc(4));

// console.log(new Matematica.areaCirc(4));
console.log(Matematica.areaCirc(4));

console.log((Matematica.PI = 5.1));
console.log(Matematica.areaCirc(4));

// Classe abstrata
// Não podem ser instanciadas

abstract class Calculo {
  protected resultado: number = 0;

  abstract executar(...numeros: number[]): void;

  getResultado(): number {
    return this.resultado;
  }
}

class Soma extends Calculo {
  executar(...numeros: number[]): void {
    this.resultado = numeros.reduce((t, a) => t + a);
  }
}

class Multiplicacao extends Calculo {
  executar(...numeros: number[]): void {
    this.resultado = numeros.reduce((t, a) => t * a);
  }
}

let c1 = new Soma();
c1.executar(2, 3, 4, 5);
console.log(c1.getResultado());

c1 = new Multiplicacao();
c1.executar(2, 3, 4, 5);
console.log(c1.getResultado());

// Padrão Singleton
class Unico {
  private static instance: Unico = new Unico();
  private constructor() {}

  static getInstance() {
    return Unico.instance;
  }

  agora() {
    return new Date();
  }
}

// const errado = new Unico()
console.log(Unico.getInstance().agora());

// Somente leitura
class Aviao {
  public readonly modelo: string;

  constructor(modelo: string, public readonly prefixo: string) {
    this.modelo = modelo;
  }
}

const turboHelice = new Aviao("Tu-114", "PT-485");
// turboHelice.modelo = "DC-8";
// turboHelice.prefixo = "PT-8";
console.log(turboHelice);
