import React from 'react'
import { useState, useEffect } from 'react'
import benjamin from './assets/Benjamin.jpg'
import reactLogo from './assets/react.svg'
import './App.css'

type Quote = {
  author: any
  quote: string
}

type Image = {
  urls: {
    thumb: string
  }
  downloads: string
  likes: string
}

function App() {

  const [quote, setQuote] = useState({
    author: "",
    quote: ""
  });
  const [image, setImage] = useState({
    urls: {
      thumb: ""
    },
    downloads: "",
    likes: ""
  });

  useEffect(() => {
    const fetchQuote = async () => {
       const response = await fetch(
          'https://api.themotivate365.com/stoic-quote'
       );
       const quoteData = await response.json();
       setQuote(quoteData);
    };
    fetchQuote()
      .catch(console.error);
 }, []);

 useEffect(() => {
  const fetchImage = async () => {
    const response = await fetch(
       'https://api.unsplash.com/photos/random?client_id=USZXUpaznv6cquYkh9Qt4FZnSfOng70gi8MhG3iaP5k&query=statue'
    );
    const imageData = await response.json();
    setImage(imageData);
 };
  fetchImage()
    .catch(console.error);
 }, []);

 const thumbs = [1,2,3,4]

 const date = new Date().toLocaleString();

  return (
    <>
      <section className='tweet-card'>
        <div className="author-row row">
        <img loading="lazy" src={image.urls.thumb || ""} className='author-image'/>
          <div className='author-middle'>
            <h3 className='author-name'>{quote.author}</h3>
            <p className='author-handle'>@{quote.author.toLowerCase().split(' ')}69</p>
          </div>
          <div className='author-right'>
            <a href="www.react.dev" target="_blank">
              <img src={reactLogo} className='logo' />
            </a>
            <a href="https://benjaminelliott.dev" target="_blank">
            <button className='follow-button'>
              <img src={benjamin} className="benjamin" alt="Vite logo" />
              <p className="follow-text">Follow</p>
              </button>
            </a>
          </div>
        </div>
        <div className="quote-row row">
          <h2 className='quote-text'>'{quote.quote}'</h2>
        </div>
        <div className="interaction-row row">
          <div className='interaction-stats'>
            <div className='interaction-block'>
              <p className='interaction-text'>Downloads</p>
              <h4 className='interaction-number'>{image.downloads}</h4>
            </div>
            <div className='interaction-block'>
              <p className='interaction-text'>Likes</p>
              <h4 className='interaction-number'>{image.likes}</h4>
            </div>
          </div>
          <div className='interaction-thumbs'>
            {
             thumbs.map(thumb =>
                <img src={"https://picsum.photos/50?random=" + thumb} key={thumb} className='thumb'/>
              )
            }
          </div>
        </div>
        <div className="time-row row">
          <p>{date}</p>
        </div>
      </section>
    </>
  )
}

export default App;