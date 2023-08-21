import { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import './App.css';

function App() {

  const springs = useSpring({
    from: { opacity: 0, scale: 0.1 },
    to: { opacity: 1, scale: 1 },
})

  const [quote, setQuote] = useState({
    author: "",
    quote: ""
  });
  const [image, setImage] = useState({
    urls: {
      thumb: ""
    },
    downloads: "",
    likes: "",
    id: ""
  });
  const [users, setUsers] = useState([
    {
      avatar: "",
      firstName: "",
      lastName: "",
      userName: "",
      employmentTitle: ""
    }
  ])

  const date = new Date().toLocaleString();

  const randomNumber = () => {
   return Math.floor(Math.random() * 6)
  }

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

 useEffect(() => {
  const fetchUsers = async () => {
    const response = await fetch(
       'https://random-data-api.com/api/v2/users?size=' + randomNumber() + '&response_type=json'
    );
    const usersData = await response.json();
    setUsers(usersData);
 };
  fetchUsers()
    .catch(console.error);
 }, []);

  return (
    <>
      <animated.section className='tweet-card' style={{...springs}}>
        <div className="author-row row">
          <a href={"https://unsplash.com/photos/" + image.id} target="_blank">
            <img loading="lazy" src={image.urls.thumb || ""} className='author-image'/>
          </a>
          <div className='author-middle'>
            <a href={"https://www.google.com/search?q="+ quote.author + " philosophy"} target="_blank"><h3 className='author-name'>{quote.author}</h3></a>
            <p className='author-handle'>@{quote.author.toLowerCase().split(' ')}69</p>
          </div>
          <div className='author-right'>
            <a href="www.react.dev" target="_blank">
              <img src="react.svg" className='logo' />
            </a>
            <a href="https://benjaminelliott.dev" target="_blank">
              <button className='follow-button'>
                <img src="benjamin.jpg" className="benjamin" alt="Hello" />
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
             users.map(user =>
              <a href={user.avatar} target="_blank">
                <img src={user.avatar} className='thumb'/>
              </a>
              )
            }
          </div>
        </div>
        <div className="time-row row">
          <p>{date}</p>
        </div>
      </animated.section>
    </>
  )
}

export default App;