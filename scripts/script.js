
const modal = document.querySelector(".container-modal");
const sacola = document.querySelector(".container-modal-carrinho");


function abrirmodal() {
    console.log(modal);
    modal.style.display = "block";
}

function fecharmodal() {
    modal.style.display = "none";
}

function abrircarrinho() { 
    modal.style.display = "none";
    sacola.style.display = "block";
}

function fecharcarrinho() {
    sacola.style.display = "none";
}

/* const container33 = ;
document.getElementsById("tamanhoEscolhido").innerHTML = container33;

const container34 = '(34)';
document.getElementsById("tamanhoEscolhido").innerHTML = container34;
 */
function container33() {
    limpar();
    document.getElementById('tamanhoEscolhido').innerHTML = ('(33)');
}

function container34() {
    limpar();
    document.getElementById('tamanhoEscolhido').innerHTML = ('(34)');
}

function container35() {
    limpar();
    document.getElementById('tamanhoEscolhido').innerHTML = ('(35)');
}

function container36() {
    limpar();
    document.getElementById('tamanhoEscolhido').innerHTML = ('(36)');
}

function container37() {
    limpar();
    document.getElementById('tamanhoEscolhido').innerHTML = ('(37)');
}

function container38() {
    limpar();
    document.getElementById('tamanhoEscolhido').innerHTML = ('(38)');
}

function container39() {
    limpar();
    document.getElementById('tamanhoEscolhido').innerHTML = ('(39)');
}

function container40() {
    limpar();
    document.getElementById('tamanhoEscolhido').innerHTML = ('(40)');
}

function container41() {
    limpar();
    document.getElementById('tamanhoEscolhido').innerHTML = ('(41)');
}

function container42() {
    limpar();
    document.getElementById('tamanhoEscolhido').innerHTML = ('(42)');
}


function limpar() {
    document.getElementById('tamanhoEscolhido').classList.remove('container33');
    document.getElementById('tamanhoEscolhido').classList.remove('container34');
    document.getElementById('tamanhoEscolhido').classList.remove('container35');
    document.getElementById('tamanhoEscolhido').classList.remove('container36');
    document.getElementById('tamanhoEscolhido').classList.remove('container37');
    document.getElementById('tamanhoEscolhido').classList.remove('container38');
    document.getElementById('tamanhoEscolhido').classList.remove('container39');
    document.getElementById('tamanhoEscolhido').classList.remove('container40');
    document.getElementById('tamanhoEscolhido').classList.remove('container41');
    document.getElementById('tamanhoEscolhido').classList.remove('container42');
}