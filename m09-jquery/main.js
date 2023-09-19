$(document).ready(function() {
    $('form').on('submit', function(event) {
        event.preventDefault()
        const inputTarefa = $('#input-tarefa').val()
        $(`<li>${inputTarefa}</li>`).appendTo('ul')
    })

    $('ul').on('click', 'li', function() {
        $(this).toggleClass('tachado')
    })
})