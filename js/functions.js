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
    var valor = 5
    document.getElementById('vlrsubtot').innerHTML = valor
    vlrQuantidade = document.getElementById('qntd').value
    btn = document.getElementById('btnSoma')

    btn.addEventListener('click', function(){
        valor = vlrQuantidade
        document.getElementById('qntd').value = parseInt(valor) + 1
        somaValor()
    })

}

function diminuiQuantidade() {
    var valor = 5
    document.getElementById('vlrsubtot').innerHTML = valor
    vlrQuantidade = document.getElementById('qntd').value
    btn = document.getElementById('btnDiminui')

    btn.addEventListener('click', function(){
        valor = vlrQuantidade
        document.getElementById('qntd').value = parseInt(valor) - 1
        somaValor()
    })

}

function somaValor() {
    document.getElementById('vlrsubtot').innerHTML = valor
    var valor = 5;
    var subtot = document.getElementById('qntd').value * valor;
    document.getElementById('vlrsubtot').innerHTML = subtot 
}

somaValor()

