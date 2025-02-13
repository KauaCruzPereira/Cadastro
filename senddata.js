export  function enviar(){
    const sent = document.getElementById('sent')
    const bgsent = document.getElementById('bgsent')
    const modalsent = document.getElementById('modalsent')

    sent.style.display = 'flex'
    modalsent.innerHTML = '<strong>Dados Enviados com sucesso!</strong>'

    const closebutton = document.createElement('button')
    closebutton.textContent = 'Ok!'
    closebutton.classList.add('closebutton')
    modalsent.appendChild(closebutton)

    closebutton.onclick = botaosair
    bgsent.onclick = sair
    
    var nome = document.getElementById('nome').value
    var tel = document.getElementById('tel').value
    var estado = document.getElementById('estado').value
    var cidade = document.getElementById('cidade').value

    var formulario = {
        nome, 
        tel,
        estado, 
        cidade, 
    }
    
    let dados = JSON.parse(localStorage.getItem('pessoas')) || []
    dados.push(formulario);
    localStorage.setItem('pessoas', JSON.stringify(dados))
} 
    
    function botaosair(){
        sent.style.display = 'none'
    }

    function sair(){
        sent.style.display = 'none'
        document.location.reload()
    }