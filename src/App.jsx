// import logo from "./logo.svg";
import "./App.css";
// import UserProfile from "./Components/UserProfile";
// import Painters from "./Components/Painters";
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
      pokemon: { name: "", sprites: { front_shiny_female: "" } },
      items: ["Item1", "Item2"],
      // USERS
      users: [
        {
          id: 1,
          name: "Jakub",
          email: "doo@boo.boo",
        },
        {
          id: 2,
          name: "Kasia",
          email: "doo@boo.boo",
        },
        {
          id: 3,
          name: "Katarzyna",
          email: "kat@a.rzyna",
        },
        {
          id: 4,
          name: "Piotr",
          email: "piotr@world.hello",
        },
      ],
    };

    setTimeout(() => this.setState((state) => ({ title: "Hello" })), 2000);
  }

  componentDidMount() {
    fetch("https://pokeapi.co/api/v2/pokemon/3?limit=1")
      .then((d) => d.json())
      .then((d) => {
        this.setState((state) => ({ pokemon: d }));
      })
      .catch((err) => console.log(err));
  }

  shouldComponentUpdate() {
    return true;
  }

  toggleTitle = () => {
    this.setState((state) => ({ titleIsVisible: !state.titleIsVisible }));
  };

  saveNewTitle = (newTitle) => {
    // console.log(newTitle);
    this.setState((state) => ({ newTitle }));
  };

  setNewTitle = () => {
    this.setState((state) => ({ title: state.newTitle }));
  };

  addNewItem = () => {
    this.setState(({ items }) => ({ items: [...items, "Item3"] }));
  };

  removeItem = (index) => {
    // console.log(index);
    this.setState(({ items }) => {
      return {
        items: items.filter((i, idx) => idx !== index),
      };
    });
  };

  addToCounter = () => {
    this.setState(({ counter }) => ({ counter: counter + 1 }));
  };

  updateUser = (id, newName) => {
    this.setState((state) => {
      const newUsers = state.users.map((user) => {
        return user.id === id ? { ...user, name: newName } : user;
      });
      return { users: newUsers };
    });
  };

  render() {
    return (
      <div className="App">
        {/* <p>
          {this.state.pokemon.name
            ? this.state.pokemon.name
            : "Awaiting data..."}
          <img src={this.state.pokemon.sprites.front_shiny_female} />
        </p>
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
        </ul> */}

        <Albums url="https://api.chucknorris.io/jokes/random" />
        {/* <Painters isOrdered={true} /> */}
        {/* <header className="App-header">
          <h1>Users</h1>
          {this.state.users.map((user) => (
            <UserProfile {...user} key={user.id} updateUser={this.updateUser} />
          ))}
        </header> */}
      </div>
    );
  }
}

export default App;
