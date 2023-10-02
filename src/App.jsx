import { useRef, useState } from 'react';
import './App.css';

function App() {
  const inputUrlRef = useRef();
  const [urlResult, setUrlResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(inputUrlRef.input.value)

    const options = {
      method: 'get',
      url: 'https://youtube-mp36.p.rapidapi.com/dl',
      params: {id: 'UxxajLWwzqY'},
      headers: {
        'X-RapidAPI-Key': 'ffbf0b6fdamsh95902cd4574e50fp1ae931jsn794044a62ced',
        'X-RapidAPI-Host': 'youtube-mp36.p.rapidapi.com'
      }
    }
  //   axios(options)
  //     .then(res => setUrlResult(res.data))
  //     .catch(error => console.error("Error:", error))
  // }

  // input needs value
  return (
    <div className='content'>
      <h1 className='page_title light_blue'>Youtube to MP3 Converter</h1>
      <p className="content_description light_blue">Pull an MP3 off a youtube video</p>
      <form className='form' onSubmit={handleSubmit}>
        <input ref={inputUrlRef} className='form_input light_blue' type='text' placeholder='Paste a Youtube URL...'></input>
        <button type='submit' className='form_button light_blue'>Convert</button>
      </form>

      <a href="" className="download_link light_blue">Download MP3</a>
    </div>
  );
}

export default App;
