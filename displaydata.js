import {editar} from "./editdata.js"
import {remover} from "./removedata.js"

export function exibir(){
    const msg = document.getElementById('msg')
    let dados = JSON.parse(localStorage.getItem('pessoas'))

    dados.forEach(function(pessoa, index) {
        const linha = document.createElement('div')
        linha.classList.add('linha')

        const botoes = document.createElement('div')
        botoes.classList.add('coluna')

        const botaoedit = document.createElement('button')
        botoes.appendChild(botaoedit)
        botaoedit.onclick = function(){
            editar(pessoa, index)
        }

        const botaoremove = document.createElement('button')
        botoes.appendChild(botaoremove)
        botaoremove.onclick = function (){
            remover(pessoa.nome)
        }

        botaoedit.textContent = 'Editar'
        botaoremove.textContent = 'Remover'

        const nomecol = document.createElement('div')
        const telcol = document.createElement('div')
        const estadocol = document.createElement('div')
        const cidadecol = document.createElement('div')

        let nome = document.createElement('div')
        nome.innerHTML += `●${pessoa.nome}`
        
        let tel = document.createElement('div')
            tel.innerHTML += `${pessoa.tel}`
            
        let estado =  document.createElement('div')
        estado.innerHTML += `${pessoa.estado}`
        
        let cidade = document.createElement('div')
        cidade.innerHTML += `${pessoa.cidade}`
        
        linha.appendChild(nomecol)
        nomecol.appendChild(nome)
        nomecol.style.width = '30%'

        linha.appendChild(telcol)
        telcol.appendChild(tel)
        telcol.classList.add('coluna')
        telcol.style.flex = 0.8

        linha.appendChild(estadocol)
        estadocol.appendChild(estado)
        estadocol.classList.add('coluna')
        estadocol.style.flex = 0.3

        linha.appendChild(cidadecol)
        cidadecol.appendChild(cidade)
        cidadecol.classList.add('coluna')

        linha.appendChild(botoes)

        msg.appendChild(linha)
    })
}
exibir()