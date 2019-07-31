const formatarTexto = (texto, limiteTamanhoTexto, limiteCaracteresLinha = 40) => {
    if(texto.length > limiteTamanhoTexto) {
        throw(`Texto (${texto.length} caracteres) excedeu o limite de ${limiteTamanhoTexto}`)
    }

    let arrayPalavras = texto.split(' ')
    let textoFormatado = ''
    let linha = ''

    arrayPalavras.forEach( (palavra) => {
        if((linha + palavra).length > limiteCaracteresLinha) {
            linha = linha.trim() + '\n'
            textoFormatado = textoFormatado + linha
            linha = ''
        }

        linha = linha + ' ' + palavra
    })

    textoFormatado = textoFormatado + linha.trim()
    console.log(textoFormatado)
    textoFormatado
}

module.exports = {
    formatarTexto: formatarTexto
}
