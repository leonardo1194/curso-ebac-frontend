const alunos = [
    { nome: 'Gon', nota: 8 },
    { nome: 'Netero', nota: 7 },
    { nome: 'Kurapika', nota: 9 },
    { nome: 'Kilua', nota: 4 },
    { nome: 'Gin', nota: 6 },
    { nome: 'Meruem', nota: 5.5 }
]

const filtrarAlunos = alunos.filter(aluno => aluno.nota >= 6)

console.log(filtrarAlunos)
