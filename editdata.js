import {atualizarCidades} from "./choosecity.js"
import {salvar} from "./updatedata.js"
export function editar(pessoa, index){
        let dados = JSON.parse(localStorage.getItem('pessoas')) || []
        let nome = document.getElementById('nome').value = pessoa.nome
        let tel = document.getElementById('tel').value = pessoa.tel
        let estado = document.getElementById('estado').value = pessoa.estado
        atualizarCidades()
        let cidade = document.getElementById('cidade').value = pessoa.cidade
    
        const editmodal = document.getElementById('editmodal')
        const modalform = document.getElementById('modalform')
        const buttons = document.createElement('div')
        buttons.classList.add('buttons')
    
        editmodal.style.display = 'flex'
        modalform.style.display = 'flex'
    
        modal.innerHTML = '<strong>Editar dados:<strong>'
        modal.appendChild(modalform) 
        
        const closebutton = document.createElement('button')
        closebutton.textContent = 'Cancelar'
        closebutton.classList.add('closebutton')
        buttons.appendChild(closebutton)
        closebutton.onclick = sair
    
        const donebutton = document.createElement('button')
        donebutton.textContent = 'Concluido'
        donebutton.classList.add('donebutton')
        buttons.appendChild(donebutton)
        modal.appendChild(buttons)
        donebutton.onclick = function(){
        salvar(index)
        }
    }
 
 
    function sair(){
         editmodal.style.display = 'none'
         modalform.style.display = 'none'
    }