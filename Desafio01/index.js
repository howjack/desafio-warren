//achar números reversíveis que retornem impares até 1 milhão
for (let i = 10; i <= 1000000; i++) {

    //elimina os números que terminam com zero
    if (i % 10 !== 0) {

        //verifica se o total é impar
        if (reverse(i) % 2 !== 0) {
            console.log(i)
        }
    }
}

//transformar número para string para inverter os lados e retornar o total somado
function reverse(n) {
    return parseInt(n.toString().split('').reverse().join('')) + n;
}