import logo from "./logo.svg";
import "./App.css";
import UserProfile from "./Components/UserProfile";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <UserProfile name="Jakub" email="doo@boo.boo" />
        <UserProfile name="Kasia" email="doo@boo.boo" />

        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello world</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
