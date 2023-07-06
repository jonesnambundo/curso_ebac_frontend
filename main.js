$(document).ready(function() {
    $('#form-tarefa').submit(function(e) {
        e.preventDefault(); 

        const tarefaAdicionada = $('#tarefa').val();
        const itemDaLista = $('<li></li>').text(tarefaAdicionada);

        if ($('#lista-tarefas li:contains(' + tarefaAdicionada + ')').length > 0) {
            alert('Tarefa já foi adicionada.');
        } else {
            $('#lista-tarefas').append(itemDaLista);
            $('#tarefa').val('');
        }
    });

    $(document).on('click', 'li', function() {
        if (!$(this).hasClass('completed')) {
            $(this).addClass('completed');
        } else {
            alert('Tarefa já foi concluída.');
        }
    });
});
