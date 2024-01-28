import { FiSearch } from 'react-icons/fi';
import './style.css';


function App() {
  return (

    <div className="container">
      <h1 className="title"><span>Buscador</span> <span>CEP</span></h1>
      
      <div className="container-input">
        <input type="text" placeholder="Digite seu CEP"/>
    
        <button className="buttonSearch">
          <FiSearch size={25} color='#FFF'/>
        </button>
      </div>

      <main className='container-main'>
        <h2>Cep: 15486458</h2>

        <span>Rua teste</span>
        <span>Complemento: Algum lugar</span>
        <span>Vila rosa</span>
        <span>Rio Grande do Norte</span>
      </main>
      
    </div>
  );
}

export default App;
