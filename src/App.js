import './App.css';
import Honda from './Honda';
import Jeep from './Jeep';
import Toyota from './Toyota';

function App() {
  return (
    <div>
      Dealer Shop
      <Toyota carName={["Corolla", "Camry", "Prius"]} />
      <Honda carName={["HR-V", "Civic", "Accord"]} />
      <Jeep carName={["Renegade", "Compass", "Wrangler"]} />
    </div>
  );
}

export default App;
