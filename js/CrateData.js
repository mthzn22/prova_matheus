let botaoAdicionar = document.querySelector('#adicionar-pedido')
botaoAdicionar.addEventListener('click', function (evento){

    evento.preventDefault () //anula estrutura padrão, nesse caso em especifico anula a atualização

    let form = document.querySelector('#form-adiciona')  //primeiro é o evento que vai ser exectado, 2 é a funcao que vai escutar

    let cliente = obterValoresDoForm(form)

      let erros = validaclientes(cliente) 

     if(erros.length > 0){
         exibeMensagemDeErro(erros)
         return 
      }

     adicionaclienteNaTabela(cliente)
     let mensagemErro = document.querySelector("#mensagens-erro")
     mensagemErro.innerHTML = ""

}) 

 function validaclientes(clientes) {
     let erros = []

     if (clientes.nome.length == 0) {
         erros.push('O nome não pode estar em branco') 
     }
     if (clientes.numero__pedido.length == 0) {
         erros.push('O numero do pedido não pode estar em branco')  
     }
     if (clientes.valor__total.length == 0) {
         erros.push('O valor total não pode estar em branco')  
     } 
     if (clientes.status.length == 0) {
         erros.push('O status não pode estar em branco')  
     }
     if (clientes.pedido.length == 0) {
         erros.push('O pedido não pode estar em branco')  
     }
     if (!validarPedido(clientes.pedido)){
        erros.push('pedido invalido')
     }

     return erros
 }
 function exibeMensagemDeErro(erros) {
     let ul = document.querySelector('#mensagens-erro')
     ul.innerHTML = ''

     erros.forEach(function(erro){
         let li = document.createElement('li')
         li.textContent = erro
         ul.appendChild(li)
     })
    
 }

function adicionaclienteNaTabela(clientes) {
    let clienteTr = montarTr(clientes)
    let tabela = document.querySelector('#tabela-clientes')

    tabela.appendChild(clienteTr)
}

function montarTr(cliente) {
    let clienteTr = document.createElement('tr')
    clienteTr.classList.add('cliente')

    clienteTr.appendChild(montarTd(cliente.nome, 'info-nome'))
    clienteTr.appendChild(montarTd(cliente.numero__pedido, 'info-numero__pedido'))
    clienteTr.appendChild(montarTd(cliente.valor__total, 'info-valor__total'))
    clienteTr.appendChild(montarTd(cliente.status, 'info-status'))
    clienteTr.appendChild(montarTd(cliente.pedido, 'info-pedido'))

    return clienteTr
}

function montarTd(dado, classe) {
    //criando uma td 
    let td = document.createElement('td')
    //criando um elemento td
    td.textContent = dado
    //classlist define a classe do elemento HTML
    td.classList.add(classe)

    return td
}

function obterValoresDoForm(form) {
    let cliente = {
        nome: form.nome.value,
        numero__pedido: form.numero__pedido.value,
        valor__total: form.valor__total.value,
        status: form.status.value,
        pedido: form.pedido.value,
  }
    return cliente
}