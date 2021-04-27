import React from 'react'
import {ImQuotesLeft} from 'react-icons/im'


const Quote = ({text, author}) => {
    return(
        <div id='App-quote' className='App__quote'>
            <h3 id='text' className='text'><ImQuotesLeft style={{marginRight: '5px'}} /> {text}</h3>
            <span id='author' className='author'>- {author}</span>
        </div>
    )
}

export default Quote