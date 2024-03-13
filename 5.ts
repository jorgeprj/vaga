function inverterString(str: string): string {
    let invertedStr = '';
    // Este loop percorre a string da última posição até a primeira
    for (let i = str.length - 1; i >= 0; i--) {
         // Concatenamos cada caractere da string original na frente da string invertida
        invertedStr += str[i];
    }
    return invertedStr;
}

// Exemplo de uso:
const minhaString = "Olá, mundo!";
const stringInvertida = inverterString(minhaString);
console.log(stringInvertida); // Saída: "!odnum ,álO"
