
import './App.css';
import Event from './components/1-events/Event'
import Counter from './components/2-classComponents/Counter';
import UsestateCounter from './components/usestate/UsestateCounter';

function App() {
  return (
    <div className="App">
      <Event />
      <Counter/>
      <UsestateCounter/>
    </div>
  );
}

export default App;
