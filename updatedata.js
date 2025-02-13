
export function salvar(index){
    let dados = JSON.parse(localStorage.getItem('pessoas')) || []

    dados[index] = {
     nome : document.getElementById('nome').value,
     tel : document.getElementById('tel').value,
     estado : document.getElementById('estado').value,
     cidade : document.getElementById('cidade').value
    }

    localStorage.setItem('pessoas', JSON.stringify(dados))

    document.location.reload()
}