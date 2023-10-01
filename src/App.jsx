import './App.css';

function App() {


  // input needs value
  return (
    <div className='content'>
      <h1 className='page_title light_blue'>Youtube to MP3 Converter</h1>
      <p className="content_description light_blue">Pull an MP3 off a youtube video</p>
      <form className='form'>
        <input className='form_input' type='text' placeholder='Paste a Youtube URL'></input>
        <button type='submit' className='form_button'>Convert</button>
      </form>

      <a href="" className="download_link light_blue">Download MP3</a>
    </div>
  );
}

export default App;
