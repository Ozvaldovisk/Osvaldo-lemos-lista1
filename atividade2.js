let vetores = [29,39, 90];

function VerificarCrescente(vetor) {
    for (let i = 0; i < vetor.length - 1; i++) {
        if (vetor[i] >= vetor[i + 1]) {
            return " a seguencia não é crescente";
        }
    }
    return " a seguencia é crescente!";
}

console.log(VerificarCrescente(vetores));