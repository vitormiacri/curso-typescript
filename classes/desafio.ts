// Exercicio 1
class Moto {
  public velocidade: number = 0;

  constructor(public nome: string) {
    this.nome = nome;
  }

  public buzinar(): void {
    console.log("Tooooooot!");
  }

  public acelerar(delta: number): void {
    this.velocidade = this.velocidade + delta;
  }
}

const moto = new Moto("Ducati");
moto.buzinar();
console.log(moto.velocidade);
moto.acelerar(30);
console.log(moto.velocidade);

// Exercício 2
abstract class Objeto2D {
  constructor(public base: number, public altura: number) {
    this.base = base;
    this.altura = altura;
  }

  abstract area(): number;
}

class Retangulo extends Objeto2D {
  area(): number {
    return this.altura * this.altura;
  }
}
const retangulo = new Retangulo(5, 7);
console.log(retangulo.area());

// Exercício 3
class Estagiario {
  private _primeiroNome: string = "";

  get primeiroNome(): string {
    return this._primeiroNome;
  }

  set primeiroNome(valor: string) {
    if (valor.length >= 3) {
      this._primeiroNome = valor;
    } else {
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
