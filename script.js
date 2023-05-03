// script for button
let curQuoteId = '';

function generateQuote() {
    let randomId = (Math.floor(Math.random() * 10) + 1);
    console.log(randomId);
    
    document.getElementById('quote-container').style.display = 'block';

    // hide currently showing quote
    if (curQuoteId != '') {
        // there is a prior quote showing
        document.getElementById(curQuoteId).style.display = 'none';
    }
        // showing the new quote
    document.getElementById(randomId).style.display = 'block';
    curQuoteId = randomId;
}

