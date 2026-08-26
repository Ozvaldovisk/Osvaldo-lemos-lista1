let carros = [
    { marca: "Toyota", modelo: "Corolla", ano: 2020 },
    { marca: "Volkswagen", modelo: "Gol", ano: 2010 },
    { marca: "Honda", modelo: "Civic", ano: 2018 }
];
for (let i = 0; i < carros.length; i++) {
    let carro = carros[i];
    if (carro.ano > 2015) {
        console.log(`O carro ${carro.marca} ${carro.modelo} foi lançado após 2015.`);
    }
}
