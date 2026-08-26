let Numeros = [34, 12, 45, 67, 23];
let maior = Numeros[0]; 
let menor = Numeros[0];

for (let i = 0; i < Numeros.length; i++) {
    if (Numeros[i] > maior) {
        maior = Numeros[i];
    }
    if (Numeros[i] < menor) {
        menor = Numeros[i];
    }
}
console.log("O maior número é: " + maior);
console.log("O menor número é: " + menor);