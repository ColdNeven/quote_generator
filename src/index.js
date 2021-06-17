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
//Get Quote From API
async  function  getQuote(){
    loading()
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
    const apiURL = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=ru&format=json'
    try {
        const response = await fetch(proxyUrl+apiURL) //+
        const data = await response.json()
        // if автор пустой = неизвестен
        if (data.quoteAuthor === ''){
            authorText.innerText = 'Неизвестен'
        }else{
            authorText.innerText = data.quoteAuthor;
        }
        quoteText.innerText = data.quoteText;
        if(data.quoteText.length>120){
            quoteText.classList.add('long-quote')
        }else{}
        quoteText.classList.remove('long-quote')
        //stop Loader, Show
        complete()

    } catch (error){
        getQuote()

    }
}

function tweetQuote(){
    const quote = quoteText.innerText
    const author = authorText.innerText
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quote}-${author}`;
    window.open(twitterUrl, '_blank')
}

//Event Listener
newQuoteBtn.addEventListener('click', getQuote);
newQuoteBtn.addEventListener('touchend', getQuote);
twitterBtn.addEventListener('click', tweetQuote)
twitterBtn.addEventListener('touchend', tweetQuote)

//on Load
getQuote()