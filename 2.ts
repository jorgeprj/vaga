// Função para gerar a sequência de Fibonacci até o n-ésimo termo
function fibonacciSequence(n: number): number[] {
    let sequence: number[] = [0, 1]; // Inicia a sequência com os dois primeiros termos

    // Calcula os próximos termos da sequência e os adiciona ao array
    for (let i = 2; i <= n; i++) {
        sequence[i] = sequence[i - 1] + sequence[i - 2];
    }

    return sequence; // Retorna a sequência gerada
}

// Função para verificar se um número está na sequência de Fibonacci
function isInFibonacciSequence(num: number): boolean {
    let sequence: number[] = fibonacciSequence(num); // Gera a sequência de Fibonacci até o número informado

    // Verifica se o número está na sequência
    for (let i = 0; i < sequence.length; i++) {
        if (sequence[i] === num) { // Se o número atual da sequência for igual ao número informado
            return true; // O número está na sequência
        }
    }

    return false; // Se o número não estiver na sequência
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

// Solicita ao usuário que digite um número
readline.question("Digite um número para verificar se pertence à sequência de Fibonacci: ", (inputNumber) => {
    let num = parseInt(inputNumber); // Converte o input para número inteiro
    let isFound: boolean = isInFibonacciSequence(num); // Verifica se o número está na sequência de Fibonacci

    // Imprime uma mensagem informando se o número está ou não na sequência de Fibonacci
    if (isFound) {
        console.log(`${num} pertence à sequência de Fibonacci.`);
    } else {
        console.log(`${num} não pertence à sequência de Fibonacci.`);
    }

    readline.close(); // Fecha a interface de leitura
});
