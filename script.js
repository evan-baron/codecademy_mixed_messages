// script for button
let curQuoteId = '';

function generateQuote() {
    let randomId = '';

    // make sure existing quote is not re-populated twice in a row 
    do {
        randomId = (Math.floor(Math.random() * 10) + 1);
    } while (randomId == curQuoteId);
    
    document.getElementById('quote-container').style.display = 'block';

    // hide currently showing quote if there is one
    if (curQuoteId != '') {
        // there is a prior quote showing
        document.getElementById(curQuoteId).style.display = 'none';
    }
        // showing the new quote
    document.getElementById(randomId).style.display = 'block';
    document.getElementById('button').value = 'Get another quote!';
    curQuoteId = randomId;
}

