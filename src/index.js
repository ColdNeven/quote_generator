import {config} from './modules/config'
import AppService from "./modules/app.service";
import './css/index.css'
import './less/index.less'
// import './scss/index.scss'

const quoteContainer = document.getElementById('quote-container-id')
const quoteText = document.getElementById('quote')
const authorText = document.getElementById('author')
const twitterBtn = document.getElementById('twitter')
const newQuoteBtn = document.getElementById('new-quote')
const loader = document.getElementById('loader')

let apiQuotes = []

//Show Loading
quoteContainer.hidden = true;
function loading(){
    loader.hidden = false;
    quoteContainer.hidden = true;
}

function complete(){
    if(!loader.hidden){
        quoteContainer.hidden = false;
        loader.hidden = true;
    }
}

function newQuote(){
    //random
    loading()
    const quote = apiQuotes[Math.floor(Math.random()*apiQuotes.length)]
    //check is 'unknow'
    if(!quote.author){
        authorText.textContent = 'Неизвестен'
    } else {
        authorText.textContent = quote.author
    }
    //Check Quote length to determine styling
    if (quote.text.length > 100){
        quoteText.classList.add('long-quote')
    } else {
        quoteText.classList.remove('long-quote')
    }
    //Hide, loader
    quoteText.textContent = quote.text
    complete()
}
async  function getQuotes(){
    const apiUrl = 'https://type.fit/api/quotes'
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json()
        newQuote()
    } catch(error){
        console.alert('problem with server... https://vk.com/m_grey <- his problem')
    }
}
getQuotes();

 function tweetQuote(){
    const quote = quoteText.innerText
    const author = authorText.innerText
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quote}-${author}`;
    window.open(twitterUrl, '_blank')
}

//!Event Listener
newQuoteBtn.addEventListener('click', getQuotes);
newQuoteBtn.addEventListener('touchend', getQuotes);
twitterBtn.addEventListener('click', tweetQuote)
twitterBtn.addEventListener('touchend', tweetQuote)



