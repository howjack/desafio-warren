//Entrada de valores
let n = 31;
let v = [2, 3, 4];
let i = v.length - 1;
let total = 0;
let valoresUsados = [];
let erros = 1;

//Verificar se vetor não é nulo
if (v !== null) {

    //Laço de repetição para fazer as somas
    while (i >= 0) {
        //Soma o valor do vetor no total e adiciona ele na array de valores usados
        total += v[i];
        valoresUsados.push(v[i])

        //Verifica de o total é maior que n
        if (total > n) {
            //Se for maior, ele retirara o ultimo valor da array e ira subtrair do total
            total -= valoresUsados.pop();
            i--;
        
        //Se o total for igual ao n, ira quebrar o while
        } else if (total === n) {
            break;
        }

        //Subtrai o ultimo numero da array valoresUsados do total para chegar no valor de n
        if (total !== n && i < 0) {
            i = v.length - 2;
            //Dependendo do numero de erros, ele subtrai o ultimo valor da array para fazer tentativa com outros valores
            for (let index = 0; index < erros; index++) {
                total -= valoresUsados.pop(); 
            }
            //Incrementa o numero de erros
            erros++;
        }
    }

}

//Saida de dados
console.log("Valores Usados: " + valoresUsados)
console.log("total: " + total);