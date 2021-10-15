let apiQuotes = []

//show new Quote

function newQuote() {
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]

    console.log(quote)
}

// get quotes from api
async function getQuotes () {
    const apiUrl = 'https://type.fit/api/quotes';
    try {
        const response = await fetch(apiUrl)
        apiQuotes = await response.json()
        newQuote()
    } catch (error) {
        
    }
}

// on load
getQuotes()