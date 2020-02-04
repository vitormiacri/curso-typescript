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

  private alterarVelocidade(delta: number): number {
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
