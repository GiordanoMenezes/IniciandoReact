import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [palpite, setPalpite] = useState(0);
  const [numPalpites, setNumPalpites] = useState(0);
  const [rangeMin, setRangeMin] = useState(0);
  const [rangeMax, setRangeMax] = useState(300);

  const geraNumero = () => {
    setNumPalpites(numPalpites+1);
    return setPalpite(Math.floor(Math.random() * 301));  
  }

  const iniciarJogo = () => {
    setNumPalpites(0);
    setRangeMin(0);
    setRangeMax(300);
    setPalpite(geraNumero);
  }

  return (
    <div className="App">
      <div style={{marginTop: 20}}>
      <button className="btn btn-primary" onClick={iniciarJogo}>Start Game!</button>
      </div>
      <div style={{marginTop:20 + 'px'}}>
        <button>Menor</button>
        <button>Acertou</button>
        <button>Maior</button>
      </div>
      <div style={{marginTop:20 + 'px'}}>
        <h4>Número de Palpites: {numPalpites}</h4>
      </div>
      <div style={{marginTop:60 + 'px'}}>
        <h2>Palpite do PC:</h2><h1>{palpite}</h1>
      </div>
    </div>
  );
}
