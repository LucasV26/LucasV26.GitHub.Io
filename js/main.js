function init() {
    const descricao = document.getElementById("descricao");
    att_descricao(descricao);

    const projetos_flex = document.getElementById("projects-flex");
    rend_projetos(projetos_flex);
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

init();


