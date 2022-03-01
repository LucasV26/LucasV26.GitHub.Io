function init() {
    const descricao = document.getElementById("descricao");
    att_descricao(descricao);

    const projetos_flex = document.getElementById("projects-flex");
    rend_projetos(projetos_flex);

    const menu_block = document.getElementById("dropdown");
    menu_block.addEventListener("click", handle_menu_click);
}

function att_descricao(elemento) {
    const ano_atual = new Date().getFullYear();
    elemento.innerHTML = `Tenho estudado Desenvolvimento de Sistemas pelos últimos ${ano_atual - 2019} anos, desenvolvendo alguns projetos pessoais e acadêmicos, no processo.<br/>Adquiri experiência com Desenvolvimento Web, APIs REST, Banco de Dados, Lógica de Programação, DevOps, dentre outras tecnologias.<br/>`;
}

function rend_projetos(elemento) {
    saida = ``;
    for(let i of projetos){
        saida += `
                <div class="projects-card">
                    <h4> ${i.data} </h4>
                    <h2> ${i.titulo} </h2>
                    <p>  ${i.descricao} </p>
                </div>
        `
    }

    elemento.innerHTML = saida;
}

function handle_menu_click(){
    let ham_invisible_1 = document.getElementById("ham-1");
    let ham_right = document.getElementById("ham-2");
    let ham_left =  document.getElementById("ham-3");
    let ham_invisible_2 = document.getElementById("ham-4");

    if(ham_right.classList.value.indexOf("ham-right") === -1){
        ham_right.classList.add("ham-right");
        ham_left.classList.add("ham-left");
        ham_invisible_1.classList.add("ham-hidden");
        ham_invisible_2.classList.add("ham-hidden");
    }else{
        ham_right.classList.remove("ham-right");
        ham_left.classList.remove("ham-left");
        ham_invisible_1.classList.remove("ham-hidden");
        ham_invisible_2.classList.remove("ham-hidden");
    }
}

init();


