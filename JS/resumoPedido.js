var cliente = JSON.parse(localStorage.getItem('Cliente'));
let produtos = JSON.parse(localStorage.getItem('Produtos'));
const hash = "9a0a570af51254c2f7e47f60448cecbb0201da866d7639ede1afd97aa24cad67";


// Adiciona um evento de clique ao botão para chamar a função gerarPDF
document.getElementById('generate-pdf').addEventListener('click', () => {
    const senha = prompt("Digite a senha : ");
    let senhaHash = sha256(senha);
    if(hash === senhaHash){
        gerarPdf();
    }else{
        alert("Senha Incorreta !");
    }
    
});

function gerarPdf (){
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
}

document.getElementById("limparTodosDados").addEventListener('click', () => {
    localStorage.removeItem('Cliente');
    localStorage.removeItem('Produtos');
    window.location.reload();
})

document.getElementById('voltarPedido').addEventListener('click',() => {
    window.location.href = "./pedido.html";
})

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
    document.getElementById('prazoEntrega').innerHTML = '<strong>Prazo: </strong> 10 a 15 dias úteis';
    document.getElementById('telefoneResidencial').innerHTML = `<strong>Telefone Residencial: </strong> ${cliente.telefoneResidencial}`;
    document.getElementById('telefonePessoal').innerHTML = `<strong>Telefone Pessoal: </strong> ${cliente.telefonePessoal}`;
    document.getElementById('proximidade').innerHTML = `<strong>Proximidade: </strong> ${cliente.proximidade}`;
    document.getElementById('vendedor').innerHTML = `<strong>Vendedor: </strong> ${cliente.vendedor}`;
    document.getElementById('numeroPedido').innerHTML = `<strong>N. Pedido: </strong> ${cliente.numeroPedido}`;
    document.getElementById('observacao').innerHTML = `<strong>Obs: </strong> ${cliente.observacao}`;
    document.getElementById('email').innerHTML = `<strong>Email: </strong> ${cliente.email}`;
    document.getElementById('dataPedido').innerHTML = `<strong>Data do Pedido: </strong> ${cliente.dataPedido}`;
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






