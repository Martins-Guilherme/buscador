import { FiSearch } from 'react-icons/fi';


function App() {
  return (

    <div className="container">
      <h1 className="title">Buscador CEP</h1>
      <div className="container-input">
        <input type="text" name="entrada" placeholder="Digite seu CEP..."/>
    
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
