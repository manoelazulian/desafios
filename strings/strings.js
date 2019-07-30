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

let texto = 'In the beginning God created the heavens and the earth. Now the earth was formless and empty, darkness was over the surface of the deep, and the Spirit of God was hovering over the waters.\nAnd God said, "Let there be light," and there was light. God saw that the light was good, and he separated the light from the darkness. God called the light "day," and the darkness he called "night." And there was evening, and there was morning - the first day.'

formatarTexto(texto, 200)