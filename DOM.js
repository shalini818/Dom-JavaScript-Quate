//<--- variables--->

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
    quote: `"The purpose of our lives is to be happy."`,
    person: `Dalai Lama`
}, {
    quote: `"Many of life’s failures are people who did not realize how close they were to success when they gave up."`,
    person: `Thomas A. Edison`
}, {
    quote: `"If you want to live a happy life, tie it to a goal, not to people or things."`,
    person: `Albert Einstein`
}, {
    quote: `"Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking."`,
    person: `Steve Jobs`
}, {
    quote: `"Life is not a problem to be solved, but a reality to be experienced."`,
    person: ` Soren Kierkegaard`
}, {
    quote: `"Everybody wants to be famous, but nobody wants to do the work. I live by that. You grind hard so you can play hard. At the end of the day, you put all the work in, and eventually it’ll pay off. It could be in a year, it could be in 30 years. Eventually, your hard work will pay off."`,
    person: `Kevin Hart`
}, {
    quote: `"Life is like riding a bicycle. To keep your balance, you must keep moving."`,
    person: `Albert Einstein`
}, {
    quote: `"Don't limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve."`,
    person: `Mary Kay Ash `
}, {
    quote: `"The best way to predict your future is to create it."`,
    person: `Abraham Lincoln`
}, {
    quote: `"I  enjoy life when things are happening. I don’t care if it’s good things or bad things. That means you’re alive."`,
    person: `Joan Rivers`
},];
btn.addEventListener('click', function () {
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})
