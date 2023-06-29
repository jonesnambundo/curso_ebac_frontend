function submeterValidation(campoA, campoB) {
    return campoB > campoA;
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form-validation').addEventListener('submit', function(e) {
        e.preventDefault();

        var campoA = parseInt(document.getElementById('campoA').value);
        var campoB = parseInt(document.getElementById('campoB').value);

        const campoaSubmeter = document.getElementById('campoA');
        const campobSubmeter = document.getElementById('campoB');
        const mensagemSucesso = 'Formulário submetido';

        if (submeterValidation(campoA, campoB)) {
            const containerMensagemSucesso = document.querySelector('.mensagem-valida');
            containerMensagemSucesso.innerHTML = mensagemSucesso;
            containerMensagemSucesso.style.display = 'block';

            campoaSubmeter.value =''; 
            campobSubmeter.value =''; 
            
        } else {
            document.querySelector(".mensagem-erro").style.display = 'block';
            campoaSubmeter.value =''; 
            campobSubmeter.value =''; 
        }
    });
    document.getElementById('campoB').addEventListener('change', function(e) {
        const containerMensagemSucesso = document.querySelector('.mensagem-valida');
        containerMensagemSucesso.style.display = 'none';
    });
    document.getElementById('campoA').addEventListener('change', function(e) {
        const containerMensagemSucesso = document.querySelector('.mensagem-erro');
        containerMensagemSucesso.style.display = 'none';
    });
});

