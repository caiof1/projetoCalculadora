function Calc(n) {
    let screen = document.getElementById('screen')
    screen.value += n
}

function Res() {
    let screen = document.getElementById('screen')
    screen.value = eval(screen.value)
}

function Apagar() {
    let screen = document.getElementById('screen')
    let arr = [...screen.value]
    screen.value = ''
    for(let i = 0; i < arr.length - 1; i++) {
        screen.value += arr[i]
    }

}