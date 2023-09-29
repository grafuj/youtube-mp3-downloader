import './App.css';

function App() {


  // input needs value
  return (
    <>
      <h1 className='page_title'>Youtube to MP3 Converter</h1>
      <p className="content_description">Pull an MP3 off a youtube video</p>
      <form className='form'>
        <input className='form_input' type='text' placeholder='Paste a Youtube URL'></input>
        <button type='submit' className='form_button'>Convert</button>
      </form>

      <a href="" className="download_link">Download MP3</a>
    </>
  );
}

export default App;
