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
