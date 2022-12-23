import logo from './logo.svg';
import './App.css';
import Hemal from './components/Hemal';
import Prasanna from './components/Prasanna';


function App() {
  return (
    <div className="App">
      <Hemal></Hemal>
      <Prasanna></Prasanna>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
