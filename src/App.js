import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import html2canvas from 'html2canvas';

function App() {

  const [linea1, setLinea1] = useState('');
  const [linea2, setLinea2] = useState('');
  const [imagen, setImagen] = useState('');

  const onChangeLinea1 = function (evento){
    
    setLinea1  (evento.target.value);
  }
  const onChangeLinea2 = function (evento){
    
    setLinea2  (evento.target.value);
  }
  const onChangeImagen = function (evento){

    setImagen (evento.target.value);
  }
  const onClickExportar = function (evento){
    alert('exportar');
    html2canvas(document.querySelector("#meme")).then(canvas => {
      var img = canvas.toDataURL("image/png");
      var link = document.createElement('a');
      link.download = 'meme.png';
      link.href = img;
      link.click();
  });
  }

  return (
    <div className="App">

      
      <select onChange={onChangeImagen}>
        <option value="algoandamal">Algo anda mal</option>
        <option value="buddybuz">buddy y buz</option>
        <option value="casa en llamas">casa en llamas</option>
        <option value="diablos-señorita">diablos señorita</option>
        <option value="Homero arbusto">Homero ocultandose</option>    
      </select> <br/>
     <input onChange={onChangeLinea1} type="text" placeholder='Linea 1'/> <br/>
     <input onChange={onChangeLinea2} type="text" placeholder='Linea 2'/> <br/>
     <button onClick={onClickExportar}>Exportar</button>

      <div className='meme' id='meme' >
        <span className='memeln1'>{linea1}</span> <br/>
        <span className='memeln2'>{linea2}</span> <br/>
        <img src={"/img/"+imagen+".jpg"}/>
      </div>

    </div>
  );
}

export default App;
