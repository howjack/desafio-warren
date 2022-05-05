//Valores de entrada
let x = 3;
let alunosEmTempo = 0;
let tempoChegada = [-2, -1, 0, 1, 2];

//Verificar se array de tempo de chegada não é nula
if (tempoChegada !== null) {
    //Percorrer array
    tempoChegada.forEach(tempo => {
        //Verificar se o tempo de chegada é menor que x
        if (tempo <= 0) alunosEmTempo++;
    });

}
//Mostrar status da aula, se esta cancelada ou não
if (alunosEmTempo >= x) {
    console.log("Aula Normal");
} else {
    console.log("Aula Cancelada");
}
