 export function remover(nome){
    let dados = JSON.parse(localStorage.getItem('pessoas')) || []
    let index = dados.findIndex(function (param) {
        return param.nome == nome
    })
    console.log(index)
    dados.splice(index, 1)
    console.log(dados)
    localStorage.setItem('pessoas', JSON.stringify(dados))
    document.location.reload()
}