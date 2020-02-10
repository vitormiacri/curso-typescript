function echo(objeto: any) {
  return objeto;
}

console.log(echo("Vitor").length);
console.log(echo(34).length);
console.log(echo({ nome: "Vitor", idade: 34 }));

// Usando Generics
function echoMelhorado<T>(objeto: T): T {
  return objeto;
}

console.log(echoMelhorado("Vitor").length);
console.log(echoMelhorado<number>(34));
console.log(echoMelhorado({ nome: "Vitor", idade: 34 }));

//Generics disponiveis na API
const avaliacoes: Array<number> = [10, 7, 9.3];
avaliacoes.push(8.3);
// avaliacoes.push('7.5');
console.log(avaliacoes);

//Array
function imprimir<T>(args: T[]) {
  args.forEach(elemento => console.log(elemento));
}

imprimir([1, 2, 3]);
imprimir<number>([1, 2, 3]);
imprimir<string>(["Ana", "Bia", "Carlos"]);
imprimir<{ nome: string; idade: number }>([
  { nome: "Vitor", idade: 34 },
  { nome: "Junior", idade: 14 },
  { nome: "Augusto", idade: 24 }
]);

type Aluno = { nome: string; idade: number };
imprimir<Aluno>([
  { nome: "Ana", idade: 34 },
  { nome: "Bia", idade: 14 },
  { nome: "Natalia", idade: 24 }
]);

// Tipo função generics
type Echo = <T>(data: T) => T;
const chamarEcho: Echo = echoMelhorado;
console.log(chamarEcho<string>("Alguma coisa"));

// Class com Generics
abstract class OperacaoBinaria<T, R> {
  constructor(public operando1: T, public operando2: T) {}

  abstract executar(): R;
}

class SomaBinaria extends OperacaoBinaria<number, number> {
  executar(): number {
    return this.operando1 + this.operando2;
  }
}

console.log(new SomaBinaria(3, 4).executar());

class DiferencaEntreDatas extends OperacaoBinaria<Data, string> {
  getTime(data: Data): number {
    let { dia, mes, ano } = data;
    return new Date(`${mes}/${dia}/${ano}`).getTime();
  }

  executar(): string {
    const t1 = this.getTime(this.operando1);
    const t2 = this.getTime(this.operando2);
    const diferenca = Math.abs(t1 - t2);
    const dia = 1000 * 60 * 60 * 24;
    return `${Math.ceil(diferenca / dia)} dia(s)`;
  }
}

const d1 = new Data(1, 2, 2020);
const d2 = new Data(5, 2, 2021);
console.log(new DiferencaEntreDatas(d1, d2).executar());

// Desafio Classe Fila
// Atributo: fila (array)
// Métodos: entrar, proximo, imprimir

class Fila<T> {
  private fila: Array<T>;

  constructor(...args: T[]) {
    this.fila = args;
  }

  entrar(item: T): void {
    this.fila.push(item);
  }

  proximo(): T | null {
    if (this.fila.length > 1 && this.fila[0]) {
      const primeiro = this.fila[0];
      this.fila.splice(0, 1);
      return primeiro;
    }

    return null;
  }

  imprimir(): void {
    console.log(this.fila);
  }
}

const fila = new Fila<string>("Ana", "Bia", "Vitor", "Carina");
fila.imprimir();
fila.entrar("Juliana");
fila.imprimir();
console.log(fila.proximo());
console.log(fila.proximo());
console.log(fila.proximo());
fila.imprimir();

// Desafio Mapa
// Array de Objetos (Chave/Valor) -> itens
// Métodos: obter(Chave), colocar({ C, V })
// limpar(), imprimir()

type DadosMapa<C, V> = {
  chave: C;
  valor: V;
};

class Mapa<C, V> {
  private itens: Array<DadosMapa<C, V>> = new Array<DadosMapa<C, V>>();

  obter(chave: C): DadosMapa<C, V> | null {
    const resultado = this.itens.filter(i => i.chave === chave);
    return resultado ? resultado[0] : null;
  }
  colocar(dadosMapa: DadosMapa<C, V>) {
    const encontrado = this.obter(dadosMapa.chave);
    if (encontrado) {
      encontrado.valor = dadosMapa.valor;
    } else {
      this.itens.push(dadosMapa);
    }
  }

  imprimir() {
    console.log(this.itens);
  }

  limpar() {
    this.itens = new Array<DadosMapa<C, V>>();
  }
}

const mapa = new Mapa<number, string>();
mapa.colocar({ chave: 1, valor: "Pedro" });
mapa.colocar({ chave: 2, valor: "Rebeca" });
mapa.colocar({ chave: 3, valor: "Maria" });
mapa.colocar({ chave: 1, valor: "Gustavo" });

console.log(mapa.obter(2));
mapa.imprimir();
mapa.limpar();
mapa.imprimir();
