function incluirItem(){
    var quantidade = document.getElementById('qntd').value
    if ( quantidade == 0 || quantidade == '' ) {
        alert("Por favor informe a quantidade desejada!")
        document.getElementById('qntd').focus()
    } else {
        if ( confirm("Deseja realmente incluir este item ao seu pedido?") == true ) {
            alert("Item incluido ao pedido com sucesso!")
            window.location.href = "itens.html"
        }
    }
}

function somaQuantidade() {
    vlrQuantidade = document.getElementById('qntd').value
    btn = document.getElementById('btnSoma')

    btn.addEventListener('click', function(){
        valor = vlrQuantidade
        document.getElementById('qntd').value = parseInt(valor) + 1
    })

}

function diminuiQuantidade() {
    vlrQuantidade = document.getElementById('qntd').value
    btn = document.getElementById('btnDiminui')

    btn.addEventListener('click', function(){
        valor = vlrQuantidade
        document.getElementById('qntd').value = parseInt(valor) - 1
    })

}
