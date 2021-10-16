const quoteContainer = document.getElementById('quote-container')
const quoteText = document.getElementById('quote')
const authorText = document.getElementById('author')
const twitterBtn = document.getElementById('twitter')
const newQuoteBtn = document.getElementById('new-quote')
const loader = document.getElementById('loader')

let apiQuotes = []

//show loading
function loading() {
    loader.hidden = false
    quoteContainer.hidden = true
}

//hide loading

function complete() {
    quoteContainer.hidden = false
    loader.hidden = true
}

//show new Quote
function newQuote() {
    loading()
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]
    //check if author is null
    authorText.textContent = quote.author ? quote.author: 'unknown'
    //check quote if long
    quote.text.length > 50 ? quoteText.classList.add('long-quote') : quoteText.classList.remove('long-quote')
    quoteText.textContent = quote.text
    complete()
    
}

// get quotes from api
async function getQuotes () {
    loading()
    const apiUrl = 'https://type.fit/api/quotes';
    try {
        const response = await fetch(apiUrl)
        apiQuotes = await response.json()
     
        newQuote()
    } catch (error) {
        console.log(error)
    }
}


//tweet quote

function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`
    window.open(twitterUrl, '_blank')
}

//event listeners

newQuoteBtn.addEventListener('click', newQuote)
twitterBtn.addEventListener('click', tweetQuote)


// on load
getQuotes()