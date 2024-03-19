{

    type Transaction ={
        description: string,
        amount: number,
        date: Date

    }
    const transactions: Transaction[] =[];

let balance = 0;
const addTransaction = ()=>{
const desc =    document.getElementById("description") as HTMLInputElement;
const amt =    document.getElementById("amount") as HTMLInputElement;

const transaction: Transaction = {
    description: desc.value,
    amount: +amt.value,
    date: new Date()
}

transactions.push(transaction);
balance+=+amt.value;

const span = document.getElementById("balance") as HTMLSpanElement;
 span.textContent = balance+"";
console.log(transactions);

updateDisplay();




}

const updateDisplay =()=>{
    const transactionsARea = document.getElementById("transactions") as HTMLDivElement;

const list = transactions.map(
    transaction => {
    return (`<li>${transaction.date} ${transaction.description} ${transaction.amount}</li>`)
    })

    //reduce method
    transactionsARea.innerHTML = "<ul>" + list.join('') + "</ul>";
    transactions.reduce((total, transaction) => total+transaction.amount, 0).toString();
    
}
}