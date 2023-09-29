$(document).ready(function() {
    $('#telefone').mask('(00) 00000-0000')
    $('#cpf').mask('000.000.000-00')
    $('#cep').mask('00000-000')

    $('form').validate({
        rules: {
            nome: {required: true},
            telefone: {required: true},
            email: {required: true},
            cpf: {required: true},
            cep: {required: true},
            endereco: {required: true}
        },
        messages: {
            nome: 'Campo obrigatório',
            telefone: 'Campo obrigatório',
            email: 'Campo obrigatório',
            cpf: 'Campo obrigatório',
            cep: 'Campo obrigatório',
            endereco: 'Campo obrigatório'
        }
    })
})