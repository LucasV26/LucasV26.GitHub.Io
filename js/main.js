//Lidando com a atualização automática de idade e tempo decorrido
let campo_idade = document.querySelector('span#idade');
let campo_anos = document.querySelector('span#anos');
let ano_atual = new Date();
ano_atual = ano_atual.getFullYear();

campo_idade.innerHTML = (ano_atual - 2001);
campo_anos.innerHTML = (ano_atual - 2019);

campo_anos.innerHTML==1? campo_anos.innerHTML += ' year' : campo_anos.innerHTML += ' years';
// Fim da área de idade e tempo decorrido 

///////////////////////////////////////////////////////////////////////////////////////////////

//Trabalhando com animações usando EventListeners
let campo_cabecalho = document.querySelector('div#cabecalho');
let imagem_logo = document.querySelector('img#logo');

campo_cabecalho.addEventListener('mouseenter', function(){
    imagem_logo.style.objectPosition = "initial"; //Propriedades CSS que usam hífem (-) são escritas em camelCase em JS
})

campo_cabecalho.addEventListener('mouseleave', function(){
    imagem_logo.style.objectPosition = "-200px";
})

////

let campo_eu = document.querySelector('figure#eu');
let imagem_moldura = document.querySelector('img#moldura');

campo_eu.addEventListener('mouseenter', function(){
    imagem_moldura.style.backgroundImage = "url('imagem/retrato2.jpg')";
})

campo_eu.addEventListener('mouseleave', function(){
    imagem_moldura.style.backgroundImage = "url('imagem/retrato1.jpg')";

})

////

let elemento_lista = document.getElementsByClassName('lista');
let elemento_linkD = document.getElementsByClassName('linkD');

for(let index in elemento_lista) {
    elemento_lista[index].addEventListener('mouseenter', function(){
        elemento_lista[index].style.backgroundColor = 'black';
        elemento_lista[index].style.paddingTop = '20px';
        elemento_lista[index].style.transition = '1s';
        elemento_linkD[index].style.color = 'white';
    })

    elemento_lista[index].addEventListener('mouseleave', function(){
        elemento_lista[index].style.backgroundColor = 'gray';
        elemento_lista[index].style.paddingTop = '2px';
        elemento_lista[index].style.transition = '1s';
        elemento_linkD[index].style.color = 'black';
    })
}
//Fim da área de animações