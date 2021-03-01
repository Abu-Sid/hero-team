import './App.css';
import AllPlayers from './components/AllPlayers/AllPlayers';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <h1 className='welcome-area'>Let's Build Our Team Hero!!</h1>
      <AllPlayers/>
    </div>
  );
}

export default App;
