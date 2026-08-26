let produtos = {
    nome: "arroz",
    preco: 5.99,
    estoque: 32
}

for (let nomes in produtos) {
    console.log(nomes + ": " + produtos[nomes]);
}
