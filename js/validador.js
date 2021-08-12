/*Scripsts para validação de formulários */
/*Valida campo cadastro de grupos*/
function validaGrupoCadastro() {
    let grupo = frmGrupo.nomeGrupo.value

    if (grupo === "") {
        alert('Para finlaizar o cadastro é necessário informar o nome do Grupo!')
        frmGrupo.nomeGrupo.focus()
        return false
    } else {
        document.forms["frmGrupo"].submit()
        alert('Cadastro realizado com sucesso!')
    }    
}

/*Valida campo cadastro de tipos*/
function validaTipoCadastro() {
    let grupo = frmTipo.selGrupo.value
    let tipo = frmTipo.nomeTipo.value

    if (grupo === "") {
        alert('Para finalizar o cadastro selecione um Grupo')
        frmTipo.selGrupo.focus()
        return false
    } else if (tipo === "") {
        alert('Para finalizar o cadastro informe o nome do Tipo')
        frmTipo.nomeTipo.focus()
        return false
    } else {
        document.forms["frmTipo"].submit()
        alert('Cadastro realizado com sucesso!')
    }
}

/*Valida campos cadastro de itens*/
function validaItemCadastro() {
    let grupo = frmItem.selGrupo.value
    let tipo = frmItem.selTipo.value
    let item = frmItem.nomeItem.value

    if (grupo === "") {
        alert('Para finlaizar o cadastro é necessário selecionar um Grupo!')
        frmItem.selGrupo.focus()
        return false
    } else if (tipo === "") {
        alert('Para finlaizar o cadastro é necessário selecionar o Tipo!')
        frmItem.selTipo.focus()
        return false
    } else if (item === "") {
        alert('Para finlaizar o cadastro é necessário informar o nome do Item!')
        frmItem.nomeItem.focus()
        return false
    } else {
        document.forms["frmItem"].submit()
        alert('Cadastro realizado com sucesso!')
    }
}

/*Valida campos cadastro de pessoas*/
function validaPessoaCadastro(){
    let nome = frmPessoa.nomePessoa.value
    let cpf = frmPessoa.cpfPessoa.value
    let tel = frmPessoa.telPessoa.value    
    let tipoPessoa = frmPessoa.tipoPessoa.value

    if (nome === "") {
        alert('Para finalizar o cadastro é necessário informar o Nome da Pessoa!')
        frmPessoa.nomePessoa.focus()
        return false
    } else if (cpf === "") {
        alert('Para finalizar o cadastro é necessário informar o CPF da Pessoa!')
        frmPessoa.cpfPessoa.focus()
        return false
    } else if (tel === "") {
        alert('Para finalizar o cadastro é necessário informar o Telefone da Pessoa!')
        frmPessoa.telPessoa.focus()
        return false
    } else if (tipoPessoa === "") {
        alert('Para finalizar o cadastro é necessário informar o Tipo da Pessoa')
        frmPessoa.tipoPessoa.focus()
        return false
    } else {
        document.forms["frmPessoa"].submit()
        alert('Cadastro realizado com sucesso!')
    }
}

/*Valida campos cadastro de usuários*/
function validaUsuariosCadastro() {
    let pessoa = frmUsuario.selPessoa.value
    let senha = frmUsuario.senha.value
    let confSenha = frmUsuario.confSenha.value

    if (pessoa === "") {
        alert('Para finalizar o cadastro é necessário selecionar a Pessoa!')
        frmUsuario.selPessoa.focus()
        return false
    } else if (senha === "") {
        alert('Para finalizar o cadastro é necessário informar a Senha!')
        frmUsuario.senha.focus()
        return false
    } else if (confSenha === "") {
        alert('Para finalizar o cadastro é necessário confirmar a sua Senha!')
        frmUsuario.confSenha.focus()
        return false
    } else {
        if (senha !== confSenha) {
            alert('Para finalizar o cadastro é necessário que os campos de senha sejam identicos!')
            frmUsuario.senha.focus()
            return false            
        } else {
            document.forms["frmUsuario"].submit()
            alert('Cadastro realizado com sucesso!')
        }
    }
    
}

/*Valida login */
function validaLogin() {
    let user = frmLogin.user.value
    let senha = frmLogin.senha.value
    
    if (user === ""){
        alert('Informe o usuário para prosseguir!')
        frmLogin.user.focus()
        return false
    } else if (senha === ""){
        alert('Preencha a senha para prosseguir!')
        frmLogin.senha.focus()
        return false
    } else {
        let master = '154.667.757-70'
        let pass = '123Nmudar'
        if (user !== master ) {
            alert('Usuário incorreto!')
            frmLogin.user.focus()
            return false
        } else if (senha !== pass) {
            alert('Senha incorreta!')
            frmLogin.senha.focus()
            return false
        } else {
            page = window.location.href = 'caixa.html'
            page.onload()
        }
    }
}

 function sair() {
     var off = confirm('Se realmente deseja sair do sistema clique em OK!')     

     if (off == true) {
        document.getElementById('teste').href = 'login.html'        
     }
 }