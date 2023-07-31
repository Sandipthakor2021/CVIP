
async function fetchQuote() {
    try {
        const response = await fetch('https://type.fit/api/quotes');
        const data = await response.json();
        const randomIndex = Math.floor(Math.random() * data.length);
        return {
            text: data[randomIndex].text,
            author: data[randomIndex].author || "Unknown",
        };
    } catch (error) {
        console.error('Error fetching quote:', error);
        return {
            text: "Error fetching quote. Please try again later.",
            author: "Unknown",
        };
    }
}




let previousQuoteIndex;

const getRandomQuote = () => {
    let randomIndex = Math.floor(Math.random() * quotes.length);

    while (randomIndex === previousQuoteIndex) {
        randomIndex = Math.floor(Math.random() * quotes.length);
    }

    previousQuoteIndex = randomIndex;
    return quotes[randomIndex];
};

const updateQuote = async () => {
    const quoteElement = document.getElementById('quote');
    const containerElement = document.querySelector('.container');

    containerElement.classList.add('flip'); 

    try {
        const { text, author } = await fetchQuote();

        quoteElement.innerHTML = `<p>${text}</p><footer>— ${author}</footer>`;

    
        const randomColor = getRandomColor();
        document.body.style.backgroundColor = randomColor;
        document.getElementById('new-quote').style.backgroundColor = randomColor;

        containerElement.classList.remove('flip'); 
    } catch (error) {
        console.error('Error updating quote:', error);
    }
};



const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};


document.getElementById('new-quote').addEventListener('click', updateQuote);


updateQuote();
