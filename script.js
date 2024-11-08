function convertCurrency() {
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;

    if (isNaN(amount) || amount <= 0) {
        document.getElementById('result').textContent = 'Please enter a valid amount';
        return;
    }

    // Example fixed rates for simplicity
    const exchangeRates = {
        "USD": { "EUR": 0.85 },
        "EUR": { "USD": 1.18 },
        "USD": { "INR": 200 },
        "EUR": { "USD": 1.18 },
        "USD": { "PKR": 0.85 },
        
    };

    let convertedAmount;
    if (fromCurrency === toCurrency) {
        convertedAmount = amount;
    } else {
        convertedAmount = amount * exchangeRates[fromCurrency][toCurrency];
    }

    document.getElementById('result').textContent = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`};
