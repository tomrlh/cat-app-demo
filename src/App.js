import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

// http://dog-api.kinduff.com/api/facts

function App() {
  const [breeds, setBreeds] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [imageId, setImageId] = useState("");

  // fazer algo interessante com o endpoint abaixo
  // https://api.thecatapi.com/v1/favourites

  async function makeRequest() {
    setIsLoading(true);
    console.log("vai fazer a request");
    await fetch('https://api.thecatapi.com/v1/images/search')
    .then(response => response.json())
    .then(async (cats) => {
      setBreeds(cats[0]);
      setImageId(cats[0].id)
      console.log("já fez a request", breeds);
    })
    .catch(err => console.error(err));
    setIsLoading(false);
  }
  return (
    <div className="App container">

<section className="hero is-primary">
  <div className="hero-body">
    <p className="title">
    Olá, gostaria de ver um gatinho e ficar mais feliz?
    </p>
    <p className="subtitle">
    Clique no botão abaixo
    </p>
  </div>
</section>

      <br/>

      <button 
        className={`button is-warning ${isLoading ? "is-loading" : ""}`}
        onClick={() => {makeRequest()}}>
          <i className="fas fa-cat"></i>
      </button>
      
      <br/><br/><br/>

      <div style={{display: "flex", justifyContent: "center"}}>
        <figure class="image">
          <img className="is-rounded" src={breeds ? breeds.url : ""} width="500px" />
        </figure>
      </div>
    </div>
  );
}

export default App;
