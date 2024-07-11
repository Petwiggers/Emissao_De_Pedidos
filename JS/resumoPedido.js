var cliente = JSON.parse(localStorage.getItem('Cliente'));
console.log(cliente);
let produtos = JSON.parse(localStorage.getItem('Produtos'));
console.log(produtos);

// Adiciona um evento de clique ao botão para chamar a função gerarPDF
document.getElementById('generate-pdf').addEventListener('click', () => {
    const element = document.getElementById('documento');
    html2pdf()
        .from(element)
        .set({
            filename: `${cliente.nome}_${cliente.cpf_cnpj}.pdf`,
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'landscape' }, // Orientação paisagem
            pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
        })
        .save();
});

function formatarDinheiro(valor) {
    return valor.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('nome').innerHTML = `<strong>Nome: </strong> ${cliente.nome}`;
    document.getElementById('dataNascimento').innerHTML = `<strong>Data de Nascimento: </strong> ${cliente.dataNascimento}`;
    document.getElementById('cpf_cnpj').innerHTML = `<strong>Cpf/Cnpj: </strong> ${cliente.cpf_cnpj}`;
    document.getElementById('endereco').innerHTML = `<strong>Endereço: </strong> ${cliente.endereco}`;
    document.getElementById('numeroCasa').innerHTML = `<strong>N: </strong> ${cliente.numeroCasa}`;
    document.getElementById('bairro').innerHTML = `<strong>Bairro: </strong> ${cliente.bairro}`;
    document.getElementById('cep').innerHTML = `<strong>Cep: </strong> ${cliente.cep}`;
    document.getElementById('cidade').innerHTML = `<strong>Cidade: </strong> ${cliente.cidade}`;
    document.getElementById('estado').innerHTML = `<strong>Estado: </strong> ${cliente.estado}`;
    document.getElementById('telefoneResidencial').innerHTML = `<strong>Telefone Residencial: </strong> ${cliente.telefoneResidencial}`;
    document.getElementById('telefonePessoal').innerHTML = `<strong>Telefone Pessoal: </strong> ${cliente.telefonePessoal}`;
    document.getElementById('proximidade').innerHTML = `<strong>Proximidade: </strong> ${cliente.proximidade}`;
    document.getElementById('vendedor').innerHTML = `<strong>Vendedor: </strong> ${cliente.vendedor}`;
    document.getElementById('numeroPedido').innerHTML = `<strong>N. Pedido: </strong> ${cliente.numeroPedido}`;
    document.getElementById('observacao').innerHTML = `<strong>Obs: </strong> ${cliente.observacao}`;
    document.getElementById('email').innerHTML = `<strong>Email: </strong> ${cliente.email}`;
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
        linha.insertCell().textContent = formatarDinheiro(x.preco); 
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
    linha.insertCell().textContent = formatarDinheiro(total); 
})






