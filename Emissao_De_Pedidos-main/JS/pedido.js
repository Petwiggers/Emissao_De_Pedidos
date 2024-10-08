
let produtos = JSON.parse(localStorage.getItem('Produtos'));
if(produtos == null){
    produtos = [];
}

document.getElementById('formularioCliente').addEventListener('submit', function(event) {
    event.preventDefault(); 
    salvarCliente(); 
});
    
document.getElementById('formularioProduto').addEventListener('submit', function(event) {
    event.preventDefault();
    salvarProduto(); 
});
    
// Exemplo de como chamar a função limparFormulario
document.getElementById('botaoLimpar').addEventListener('click', function() {
    console.log('Limpou');
    
    limparFormulario();
});




function salvarCliente(){
    const dataAtual = new Date();
    const dia = String(dataAtual.getDate()).padStart(2, '0'); // Pega o dia e adiciona o zero à esquerda, se necessário
    const mes = String(dataAtual.getMonth() + 1).padStart(2, '0'); // Pega o mês (adicionando +1, já que janeiro é 0)
    const ano = dataAtual.getFullYear();
    const cliente = {
        nome: document.getElementById('nome').value,
        dataNascimento: document.getElementById('dataNascimento').value,
        cpf_cnpj: document.getElementById('cpf_cnpj').value,
        endereco: document.getElementById('endereco').value,
        numeroCasa: document.getElementById('numeroCasa').value,
        bairro: document.getElementById('bairro').value,
        cep: document.getElementById('cep').value,
        cidade: document.getElementById('cidade').value,
        estado: document.getElementById('estado').value,
        telefoneResidencial: document.getElementById('telefoneResidencial').value,
        telefonePessoal: document.getElementById('telefonePessoal').value,
        proximidade: document.getElementById('proximidade').value,
        vendedor: document.getElementById('vendedor').value,
        numeroPedido: document.getElementById('numeroPedido').value,
        observacao: document.getElementById('observacao').value,
        email: document.getElementById('email').value,
        dataPedido: `${dia}/${mes}/${ano}`
    }
    localStorage.setItem('Cliente',JSON.stringify(cliente));
    alert("Cliente Salvo com Sucesso");
}

function salvarProduto(){
    const produto = {
        localInstalacao: document.getElementById('localInstalacao').value,
        unidades: document.getElementById('unidades').value,
        largura: document.getElementById('largura').value,
        altura: document.getElementById('altura').value,
        metrosQuadrado: "",
        alturaComando: document.getElementById('alturaComando').value,
        modeloCorNumero: document.getElementById('modeloCorNumero').value,
        comando: iterarElemento(document.getElementsByName('comando')),
        bando: iterarElemento(document.getElementsByName('opcaoBando')),
        colocacao: iterarElemento(document.getElementsByName('opcaoFixacao')),
        preco: Number(document.getElementById('preco').value),
    }
    let largura = produto.largura.replace(',', '.')
    let altura = produto.altura.replace(',','.')
    produto.metrosQuadrado = `${(((parseFloat(largura))/100)*((parseFloat(altura))/100)).toFixed(2)} m2`;
    
    produtos.push(produto);
    console.log(produtos);
    localStorage.setItem('Produtos',JSON.stringify(produtos));
    limparFormulario();
    alert("Produto Salvo com Sucesso");
}


function limparFormulario() {
    // Obtém o formulário pelo ID
    var formulario = document.getElementById('formularioProduto');

    // Percorre todos os elementos do formulário
    for (var i = 0; i < formulario.elements.length; i++) {
        var elemento = formulario.elements[i];

        // Verifica se o elemento é um campo de entrada
        if ((elemento.tagName === 'INPUT' && elemento.type !== 'radio')|| elemento.tagName === 'TEXTAREA' || elemento.tagName === 'SELECT') {
            // Define o valor do campo como vazio
            elemento.value = '';
        }

        if(elemento.type == 'radio'){
            elemento.checked = false;
        }
    }
}

function iterarElemento(elemento){
    for (let i = 0; i < elemento.length; i++){
        if(elemento[i].checked){
            return elemento[i].value;
        }
    }
}
