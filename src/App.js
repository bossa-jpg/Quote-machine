import React, {useEffect, useState} from 'react'
import quotes from './quotes.json'
import Quote from './quote'
import './App.css'
import {FaTwitter} from 'react-icons/fa'
import {FaTumblr} from 'react-icons/fa'


function App() {



  const colors = [
    '#ffc0cb',
    '#d8bfd8',
    '#cd5c5c',
    '#6495ed',
    '#00cccc',
    '#722f37',
    '#e76a83',
    '#6ee3b7',
    '#77dd77',
    '#082567',
    '#1560bd',
    '#6e49be',
    '#ff7f50',
    '#98ff98',
    '#9966cc',
    '#fc900b',
    '#784714',
    '#BC8F8F',
    '#2F4F4F',
    '#3CB371',
    '#556B2F',
    '#008B8B',
    '#00CED1',
    '#483D8B',
    '#87CEEB'
  ];

  const randomIndex = () =>{return Math.floor(Math.random()*quotes.quotes.length)}

  const [quote, setQuote] = useState(quotes.quotes[randomIndex()]);

  const getQuote = () => {
    const currentQuote = quotes.quotes[randomIndex()];
    setQuote(currentQuote);
    animation();
    getColor()
  };
  

  // useEffect( ()=>{
  //   animation();
  // }, []);

  // useEffect( () => {
  //   getColor();
  // }
  // , []);


  const randomColor = () =>{return Math.floor(Math.random()*colors.length)}
  const [color, setColor] = useState(colors[randomColor()])
  const getColor = () => {
    const currentColor = colors[randomColor()]
    setColor(currentColor);
  }

  const animation = () => {
    document.getElementById('App-quote').animate([
      {opacity:0},
      {opacity:1}
    ], {duration: 1000})
  }
  
  return (
    <div className='App' id='App' style = {{backgroundColor: color, color: color}}>
      <div className='App__box' id='quot-box'>
        <Quote
        text = {quote.quote}
        author = {quote.author}
        />
        <div className='buttons'>
          <a 
          href={'https://twitter.com/intent/tweet?hashtags=quote&text='+encodeURIComponent('"'+quote.quote+'"'+' '+quote.author)}
          className='button' 
          id='tweet-quote' 
          title='Tweet this quote!'
          target='_blank' 
          style = {{backgroundColor: color}}>
            <FaTwitter size='1.2em' />
          </a>
          <button 
          className='button' 
          id='new-quote' 
          onClick={getQuote} 
          style = {{backgroundColor: color}}>
            New Quote
          </button>
        </div>
      </div>

    </div>
  );
}

export default App;


