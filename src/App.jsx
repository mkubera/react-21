// import logo from "./logo.svg";
import "./App.css";
import UserProfile from "./Components/UserProfile";
import Painters from "./Components/Painters";
import Albums from "./Components/Albums";
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      titleIsVisible: false,
      newTitle: "App Title2222",
      title: "App Title",
      counter: 0,
      // users: [
      //   {
      //     name: "Jakub",
      //     email: "doo@boo.boo",
      //   },
      //   {
      //     name: "Kasia",
      //     email: "doo@boo.boo",
      //   },
      //   {
      //     name: "Katarzyna",
      //     email: "kat@a.rzyna",
      //   },
      // ],
      items: ["Item1", "Item2"],
    };

    setTimeout(() => this.setState((state) => ({ title: "Hello" })), 2000);
  }

  toggleTitle = () => {
    this.setState((state) => ({ titleIsVisible: !state.titleIsVisible }));
  };

  saveNewTitle = (newTitle) => {
    console.log(newTitle);
    this.setState((state) => ({ newTitle }));
  };

  setNewTitle = () => {
    this.setState((state) => ({ title: state.newTitle }));
  };

  addNewItem = () => {
    this.setState(({ items }) => ({ items: [...items, "Item3"] }));
  };

  removeItem = (index) => {
    console.log(index);
    this.setState(({ items }) => {
      return {
        items: items.filter((i, idx) => idx !== index),
      };
    });
  };

  addToCounter = () => {
    this.setState(({ counter }) => ({ counter: counter + 1 }));
  };

  render() {
    return (
      <div className="App">
        <p>counter: {this.state.counter}</p>
        <button onClick={this.addToCounter}>add to counter</button>
        <hr />
        <button onClick={this.toggleTitle}>Toggle Title</button>
        {this.state.titleIsVisible ? <h1>{this.state.title}</h1> : <></>}
        <input
          type="text"
          value={this.state.newTitle}
          onInput={(e) => this.saveNewTitle(e.target.value)}
        />
        <button onClick={this.setNewTitle}>set</button>
        <hr />
        <button onClick={this.addNewItem}>add item</button>
        <ul>
          {this.state.items.map((i, idx) => (
            <li key={idx}>
              {i} <button onClick={() => this.removeItem(idx)}>remove</button>
            </li>
          ))}
        </ul>

        {/* <Albums />
        <Painters isOrdered={true} /> */}
        {/* <header className="App-header">
          <h1>Users App</h1>
          {this.state.users.map((user, idx) => (
            <UserProfile {...user} key={idx} onClickFn={this.onClickFn} />
          ))}
        </header> */}
      </div>
    );
  }
}

export default App;
