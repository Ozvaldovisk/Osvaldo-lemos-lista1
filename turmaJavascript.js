let turmas = [
    {
    nomeProfessor: "João",
    alunos:[
        {nome: "Maria", nota: 8.5},
        {nome: "Pedro", nota: 7.2},
        { nome: "Ana", nota: 9.1}
    ]
},
{
    nomeProfessor: "Carlos",
    alunos:[
        {nome: "Lucas", nota: 6.8},
        {nome: "Fernanda", nota: 8.9},
    ]
}
];

for (let i = 0; i < turmas.length; i++) {
    let turmaAtual = turmas[i];
    
    console.log(`\n--- Turma do Professor ${turmaAtual.nomeProfessor} ---`);

    turmaAtual.alunos.sort(function(a, b) {
        return a.nota - b.nota;
    });

    for (let j = 0; j < turmaAtual.alunos.length; j++) {
        let alunoAtual = turmaAtual.alunos[j];

        if (alunoAtual.nota >= 7) {
            console.log(`Parabéns ${alunoAtual.nome}, você foi aprovado com a nota ${alunoAtual.nota}`);
        } else {
            console.log(`Não foi dessa vez ${alunoAtual.nome}, você reprovou com a nota ${alunoAtual.nota}`);
        }
    }
}