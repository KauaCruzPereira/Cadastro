export function atualizarCidades() {
            const cidadesPorEstado = {
            sc: ["Jaguaruna", "Tubarão", "Florianópolis"],
            rs: ["Gramado", "Alecrim", "Porto Alegre"],
            pr: ["Cascavel", "Londrina", "Curitiba"]
            }

        const estadoSelecionado = document.getElementById("estado").value
        const cidadeSelect = document.getElementById("cidade")

        cidadeSelect.innerHTML = '<option value="" disabled selected>Selecione uma cidade</option>'

        if (estadoSelecionado) {
            cidadesPorEstado[estadoSelecionado].forEach(cidade => {
                let opcao = document.createElement("option")
                opcao.value = cidade.toLowerCase()
                opcao.textContent = cidade;
                cidadeSelect.appendChild(opcao)
            });
        }
}