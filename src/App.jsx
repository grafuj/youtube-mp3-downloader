import axios from "axios";
import { useRef, useState } from 'react';
import './App.css';
import youtube_parser from './helpers';

function App() {
  const inputUrlRef = useRef();
  const [urlResult, setUrlResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputUrlRef.current.value);

    const youtubeID = youtube_parser(inputUrlRef.current.value);
    console.log("youtubeID:", youtubeID);

    const options = {
      method: 'get',
      url: 'https://youtube-mp36.p.rapidapi.com/dl',
      headers: {
        'X-RapidAPI-Key': import.meta.env.RAPID_API_KEY,
        'X-RapidAPI-Host': 'youtube-mp36.p.rapidapi.com'
      },
      params: { id: youtubeID },
    };
    axios(options)
      .then(res => {
        setUrlResult(res.data.link);
        inputUrlRef.current.value = ""; //reset for next
      })
      .catch(error => console.error("Error:", error));

  };

  // input needs value
  return (
    <div className='content'>
      <>
        <h1 className='page_title light_blue'>Youtube to MP3 Converter</h1>
        <hr className="hr_separator" />
        <p className="content_description light_blue">Pull an MP3 off a youtube video</p>
        <form className='form' onSubmit={handleSubmit}>
          <input ref={inputUrlRef} className='form_input light_blue' type='text' placeholder='Paste a Youtube URL...'></input>
          <button type='submit' className='form_button light_blue'>Convert</button>
        </form>

        {urlResult ?
          <a target="_blank" rel="noreferrer" href={urlResult} className="download_link light_blue">Download MP3</a>
          : ""}
      </>
      <div className="footer">
        <hr className="hr_separator" />
        <span className="light_blue">
          Code by <a href="https://github.com/grafuj/youtube-mp3-downloader">grafuj</a>.
        </span>
      </div>
    </div>
  );
}

export default App;
