$(document).ready(function() {
            $('#telefone').mask('(00) 00000-0000',{
                placeholder:'(00) 00000-0000'
            });
            $('#cpf').mask('000.000.000-00',{
                placeholder:'000.000.000-00'
            });
            $('#cep').mask('00000-000',{
                placeholder:'00000-00'
            });
    
            $('form').validate({
                rules: {
                    nomeCompleto: {
                        required: true
                    },
                    email: {
                        required: true,
                        email: true
                    },
                    telefone: {
                        required: true
                    },
                    cpf: {
                        required: true
                    },
                    enderecoCompleto: {
                        required: true
                    },
                    cep: {
                        required: true
                    },
                },
                messages: {
                    nomeCompleto: 'Por favor, insira o seu nome completo',
                    email: 'Por favor, insira um e-mail válido',
                    telefone: 'Por favor, insira um número de telefone',
                    cpf: 'Por favor, insira o seu CPF',
                    enderecoCompleto: 'Por favor, insira o seu endereço completo',
                    cep: 'Por favor, insira o seu CEP'
                },
                submitHandler: function(form) {
                    console.log(form);
                    alert('Cadastro efetuado com sucesso!');
                    form.reset();
                },
                invalidHandler: function(evento, validador) {
                    let camposIncorretos = validador.numberOfInvalids();
                    console.log(camposIncorretos);
                    if (camposIncorretos) 
                        alert(`Existem ${camposIncorretos} campo(s) incorreto(s)`);
                }
            });
        });