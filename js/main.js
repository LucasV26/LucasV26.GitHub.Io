//Lidando com a atualização automática de idade e tempo decorrido
let campo_idade = document.querySelector('span#idade');
let campo_anos = document.querySelector('span#anos');
let ano_atual = new Date();
ano_atual = ano_atual.getFullYear();

campo_idade.innerHTML = (ano_atual - 2001);
campo_anos.innerHTML = (ano_atual - 2019);

campo_anos.innerHTML==1? campo_anos.innerHTML += ' year' : campo_anos.innerHTML += ' years';
/* Fim da área de idade e tempo decorrido */

