function init() {
    const descricao = document.getElementById("descricao");
    att_descricao(descricao);

    const projetos_flex = document.getElementById("projects-flex");
    rend_projetos(projetos_flex);

    const dropdown_block = document.getElementById("dropdown");
    dropdown_block.addEventListener("click", handle_menu_click);

    window.addEventListener("scroll", handle_window_scroll);
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
    let menu_block = document.getElementById("menu");

    menu_block.classList.toggle("active");
    this.classList.toggle("active");
}

function handle_window_scroll(){
    let menu_block = document.getElementById("menu");

    if(menu_block.classList.value.indexOf("active") != -1){
        let dropdown_block = document.getElementById("dropdown");

        menu_block.classList.toggle("active");
        dropdown_block.classList.toggle("active");
    }
}

init();


