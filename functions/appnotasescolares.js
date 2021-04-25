/* ### TRANSFORMAR NOTAS ESCOLARESDO SISTEMA NUMÉRICO
        PARA SISTEMA DE NOTAS EM CARACTERES A, B, C, D, E e F


    * De 90 pra cima -> A
    * Entre 80 e 89 -> B
    * Entre 70 e 79 -> C
    * Entre 60 e 69 -> D
    * Menor que 60 -> F
     
*/

function getScore(score) {
    let scoreA = score >= 90 && score <= 100
    let scoreB = score >= 80 && score <= 89
    let scoreC = score >= 70 && score <= 79
    let scoreD = score >= 60 && score <= 69
    let scoreF = score > 60 && score >= 0

    let scoreFinal;

    if(scoreA) {
        scoreFinal = "A"
    } else if (scoreB) {
        scoreFinal = "B"
    } else if (scoreC) {
        scoreFinal = "C"
    } else if (scoreD) {
        scoreFinal = "D"
    } else if (scoreF) {
        scoreFinal = "F"
    } else {
        scoreFinal = "Nota inválida"
    }
    return scoreFinal
} 

console.log(getScore(101))
console.log(getScore(95))
console.log(getScore(85))
console.log(getScore(75))
console.log(getScore(65))
console.log(getScore(55))
console.log(getScore(0))
console.log(getScore(-1))