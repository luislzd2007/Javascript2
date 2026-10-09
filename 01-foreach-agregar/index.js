

const numeros = [1, 2, 3, 4, 5];
const cuadrados = [];
const frutas = ["manzana", "pera", "uva"];
const frutasMayus = [];


numeros.forEach((n) => {
  cuadrados.push(n * n);
});

frutas.forEach((fruta, indice) => {
  frutasMayus.push(`${indice + 1}. ${fruta.toUpperCase()}`);
});

console.log("Números originales:", numeros);
console.log("Cuadrados (agregados con forEach):", cuadrados);
console.log("Frutas formateadas:", frutasMayus);
