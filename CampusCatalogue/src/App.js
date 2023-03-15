import logo from './logo.svg';
import './App.css';
import ShopCard from "./components/Shopcard";

function App() {
  return (
    <div className="App">
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

      {/* <ShopCard line1="Brahma Food Canteen" line2="Maggi Pav Bhaji" rating="4.0" /> */}

    </div>
  );
}

export default App;