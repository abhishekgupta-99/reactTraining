{
    var transactions_1 = [];
    var balance_1 = 0;
    var addTransaction = function () {
        var desc = document.getElementById("description");
        var amt = document.getElementById("amount");
        var transaction = {
            description: desc.value,
            amount: +amt.value,
            date: new Date()
        };
        transactions_1.push(transaction);
        balance_1 += +amt.value;
        var span = document.getElementById("balance");
        span.textContent = balance_1 + "";
        console.log(transactions_1);
        updateDisplay_1();
    };
    var updateDisplay_1 = function () {
        var transactionsARea = document.getElementById("transactions");
        var list = transactions_1.map(function (transaction) {
            return ("<li>".concat(transaction.date, " ").concat(transaction.description, " ").concat(transaction.amount, "</li>"));
        });
        //reduce method
        transactionsARea.innerHTML = "<ul>" + list.join('') + "</ul>";
        transactions_1.reduce(function (total, transaction) { return total + transaction.amount; }, 0).toString();
    };
}
