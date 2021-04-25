/* ### Sistemas de gastos familiar

    Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
        * receitas: []
        * despesas: []
         
    Agora crie uma função que calculará as receitas e despesas, mostre uma mensagem se a família está com saldo positivo / negativo e o saldo!
*/

let family = {
    incomes: [8000, 2000, 800.25],
    expenses: [2700, 3000, 2000, 1000 , 500, 150.50, 500.80]
}

function sum(array) {
    let total = 0;

    for(let value of array) {
        total += value
    }

    return total
}

function calculateBalance() {
    const calculateIncomes  = sum(family.incomes)
    const calculateExpenses = sum(family.expenses)
    
    const total = calculateIncomes - calculateExpenses

    const itsOk = total >= 0

    let balanceText = "Negativo";

    if(itsOk){
        balanceText = "Positivo"
    }

    console.log(`Seu saldo é ${balanceText}: ${total.toFixed(2)} R$`)
}

calculateBalance()