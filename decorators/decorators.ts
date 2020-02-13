function logarClasse(constructor: Function) {
  console.log(constructor);
}

function decoratorVazio(_: Function) {}

function logarClasseSe(valor: boolean) {
  return valor ? logarClasse : decoratorVazio;
}

function decorator(obj: { a: string; b?: number }) {
  return function(_: Function): void {
    console.log(obj.a + " " + obj.b);
  };
}

type Construtor = { new (...args: any[]): {} };

function logarObjeto(construtor: Construtor) {
  console.log("Carregado...");
  return class extends construtor {
    constructor(...args: any[]) {
      console.log("Antes...");
      super(...args);
      console.log("Depois...");
    }
  };
}

// new Eletrodomestico();
// new Eletrodomestico();
// new Eletrodomestico();

interface Eletrodomestico {
  imprimir?(): void;
}
// @logarClasse
// @decorator({a: "teste", b: 123})
// @logarClasseSe(true)
// @logarObjeto
@imprimivel
class Eletrodomestico {
  constructor() {
    console.log("novo...");
  }
}

function imprimivel(construtor: Function) {
  construtor.prototype.imprimir = function() {
    console.log(this);
  };
}

const eletro = new Eletrodomestico();
eletro.imprimir && eletro.imprimir();

// Desafio Decorator perfilAdmin
const usuarioLogado = {
  nome: "Guilherme Filho",
  email: "guigui@gmail.com",
  admin: false
};

@perfilAdmin
class MudancaAdministrativa {
  critico() {
    console.log("Algo crítico foi alterado!");
  }
}

new MudancaAdministrativa().critico();

function perfilAdmin<T extends Construtor>(construtor: T) {
  return class extends construtor {
    constructor(...args: any[]) {
      super(...args);
      if (!usuarioLogado || !usuarioLogado.admin) {
        throw new Error("Sem permissão!");
      }
    }
  };
}
