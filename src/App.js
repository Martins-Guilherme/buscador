import { useState } from "react";
// Biblioteca para mudança de estado de uma função.

import { FiSearch } from 'react-icons/fi';
// Api para buscar o icone de busca

import api from "./services/api";

import './style.css';

function App() {

  const [input, setInput] = useState('');
  const [cep, setCep] = useState({});

  async function handleSearch(){
    if(input === ''){
      alert("Informe algum cep")
      return;
    }
    try{
      const response = await api.get(`${input}/json`);
      setCep(response.data)
      setInput('');
    }catch{
      alert("Ops error ao buscar aqui.")
      setInput('');
    }
  }
  return (

    <div className="container">
      <h1 className="title"><span>Buscador</span> <span>CEP</span></h1>
      
      <div className="container-input">
        <input 
          type="text" placeholder="Digite seu CEP" value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="buttonSearch" onClick={handleSearch} >
          <FiSearch size={25} color='#FFF' />
        </button>
      </div>

      {Object.keys(cep).length > 0 && (
        <main className='container-main'>
          <h2 >Cep: {cep.cep}</h2>

          <span>Rua: {cep.logradouro}</span>
          <span>Complemento: {cep.complemento}</span>
          <span>Bairro: {cep.bairro}</span>
          <span>UF: {cep.localidade}/{cep.uf}</span>
        </main>
      )}

    </div>
  );
}

export default App;