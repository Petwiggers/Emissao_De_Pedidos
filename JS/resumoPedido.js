var cliente = JSON.parse(localStorage.getItem('Cliente'));
console.log(cliente);
let produtos = JSON.parse(localStorage.getItem('Produtos'));
console.log(produtos);

// Adiciona um evento de clique ao botão para chamar a função gerarPDF
document.getElementById('btnGerarPDF').addEventListener('click', () => {
    //CONTEÚDO DO PDF
    const body = document.querySelector('body');

    //CONFIGURAÇÃO DO ARQUIVO FINAL DO PDF
    const options = {
        filename: `${cliente.nome}_${cliente.cpf_cnpj}.pdf`,
        html2canvas: {scale: 12},
        jsPDF: {unit: "mm", format: "a4", orientation: "portrait"}
    }

    //GERAR E BAIXAR PDF
    html2pdf().set(options).from(body).save();
    localStorage.removeItem('Produtos');
    localStorage.removeItem('Cliente');
});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('nome').textContent = cliente.nome;
    document.getElementById('dataNascimento').textContent  = cliente.dataNascimento;
    document.getElementById('cpf_cnpj').textContent = cliente.cpf_cnpj;
    document.getElementById('endereco').textContent = cliente.endereco;
    document.getElementById('numeroCasa').textContent = cliente.numeroCasa;
    document.getElementById('bairro').textContent = cliente.bairro;
    document.getElementById('cep').textContent = cliente.cep;
    document.getElementById('cidade').textContent = cliente.cidade;
    document.getElementById('estado').textContent = cliente.estado;
    document.getElementById('telefoneResidencial').textContent = cliente.telefoneResidencial;
    document.getElementById('telefonePessoal').textContent = cliente.telefonePessoal;
    document.getElementById('proximidade').textContent = cliente.proximidade;
    document.getElementById('vendedor').textContent = cliente.vendedor;
    document.getElementById('numeroPedido').textContent = cliente.numeroPedido;
    document.getElementById('observacao').textContent = cliente.observacao;
    document.getElementById('email').textContent = cliente.email;
});

document.addEventListener("DOMContentLoaded", function(){
    let tbody = document.getElementById('tbody');
    let total = 0;
    produtos.forEach(x => {
        let linha = tbody.insertRow();
        total += x.preco;
        linha.insertCell().textContent = x.localInstalacao; 
        linha.insertCell().textContent = x.unidades; 
        linha.insertCell().textContent = x.largura; 
        linha.insertCell().textContent = x.altura; 
        linha.insertCell().textContent = x.metrosQuadrado; 
        linha.insertCell().textContent = x.alturaComando; 
        linha.insertCell().textContent = x.modeloCorNumero; 
        linha.insertCell().textContent = x.comando; 
        linha.insertCell().textContent = x.bando; 
        linha.insertCell().textContent = x.colocacao; 
        linha.insertCell().textContent = x.preco; 
    });
    let linha = tbody.insertRow();
    linha.insertCell().textContent = ""; 
    linha.insertCell().textContent = ""; 
    linha.insertCell().textContent = ""; 
    linha.insertCell().textContent = ""; 
    linha.insertCell().textContent = ""; 
    linha.insertCell().textContent = ""; 
    linha.insertCell().textContent = ""; 
    linha.insertCell().textContent = ""; 
    linha.insertCell().textContent = ""; 
    linha.insertCell().textContent = ""; 
    linha.insertCell().textContent = ""; 
    linha.insertCell().textContent = `R$ ${total}`; 
})






