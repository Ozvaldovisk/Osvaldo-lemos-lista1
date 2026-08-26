let notas = [10, 8, 7, 5, 9];
let soma = 0;
let media;

for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
}
media = soma / notas.length;
console.log("A média das notas é: " + media);