import './App.css';
import DataPointCardCollection from './DataPointCardCollection';
import DataPointCard from './DataPointCard';

function App() {
  return (
    <div className="App">
      <header className="banner">Sextant</header>
      <DataPointCardCollection />
      <hr/>
      <DataPointCard />
    </div>

    
  );
}

export default App;
