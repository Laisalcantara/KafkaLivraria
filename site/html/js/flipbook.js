// Atribuindo as variaveis aos elementos

// Livro
const bntEsquerda = document.querySelector("#bnt-esquerda");
const bntDireita = document.querySelector("#bnt-direita");
const book = document.querySelector("#book");

// Páginas
const pagina1 = document.querySelector("#p1");
const pagina2 = document.querySelector("#p2");
const pagina3 = document.querySelector("#p3");
const pagina4 = document.querySelector("#p4");
const pagina5 = document.querySelector("#p5");
const pagina6 = document.querySelector("#p6");
const pagina7 = document.querySelector("#p7");


// Funcionalidade do botão 
bntDireita.addEventListener("click", proxPag);
bntEsquerda.addEventListener("click", voltarPag);


let locAtual = 1;
let numDePags = 7;
let maxLoc = numDePags = 1;

// Função para fazer o movimento de abrir o livro
function abrirlivro() {

}

// Função para fechar o livro
function fecharLivro() {

}

// Função para avançar página 
function proxPag() {
    if (locAtual = maxLoc) {
        switch (locAtual) {
            case 1:
                abrirlivro();
                pagina1.classList.add("flipped");
                pagina1.style.zIndex = 1;
                break;
            case 2:
                pagina2.classList.add("flipped");
                pagina2.style.zIndex = 2;
                break;
            case 3:
                pagina3.classList.add("flipped");
                pagina3.style.zIndex = 3;
                break;
            case 4:
                pagina4.classList.add("flipped");
                pagina4.style.zIndex = 4;
                break;
            case 5:
                pagina5.classList.add("flipped");
                pagina5.style.zIndex = 5;
                break;
            case 6:
                pagina6.classList.add("flipped");
                pagina6.style.zIndex = 6;
                break;
            case 7:
                pagina7.classList.add("flipped");
                pagina7.style.zIndex = 7;
                fecharLivro();
                break;
            default:
                throw new Error("Error Desconhecido")
        }
        locAtual++;
    }
}

// Função para voltar pagina 
function voltarPag() {

}