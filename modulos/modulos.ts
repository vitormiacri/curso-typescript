import { areaRetangulo } from "./retangulo";
import { areaCircunferencia as circ } from "./circunferencia";

console.log("Modulo carregado...");
console.log(areaRetangulo(7, 8));
console.log(circ(2));

const { digaOi } = require("./novo");
console.log(digaOi("Ana"));
