let peso = 80;
let altura = 1.80;

function calcularIMC(peso, altura) {
    let imc = peso / (altura * altura);
    return imc;
}

if (calcularIMC(peso, altura) < 18.5 || calcularIMC(peso, altura) > 24.9) {
    console.log("O IMC está fora da faixa saudável.");
} else {
    console.log("O IMC está dentro da faixa saudável.");
}