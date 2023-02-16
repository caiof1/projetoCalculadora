// Essa função recebe numero ou sinal, e adiciona na screen
function Calc(n) {
    let screen = document.getElementById('screen')
    screen.value += n
}

// Esse função dá o resultado, pegando a equação da tela, e usando a função eval para transformar a string em uma conta
function Res() {
    let screen = document.getElementById('screen')
    screen.value = eval(screen.value)
}

// Esse função serve para apagar o ultimo numero digitado. Acredito que não seja a forma mais profissional, mas, foi a forma que eu achei de resolver
function Apagar() {
    let screen = document.getElementById('screen')
    // Estou adicinando os numeros da tela, para um arr, fragmentando ele
    let arr = [...screen.value]
    screen.value = ''
    // Esse laço pega o arr, e percorre ele - 1, adicionando todos os numeros novamente na screen, e retirando apenas o ultimo
    for(let i = 0; i < arr.length - 1; i++) {
        screen.value += arr[i]
    }

}