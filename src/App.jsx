// import logo from "./logo.svg";
import "./App.css";
import UserProfile from "./Components/UserProfile";

const App = () => {
  const onClickFn = (data) => {
    console.log(data);
  };

  const state = {
    users: [
      {
        name: "Jakub",
        email: "doo@boo.boo",
        userType: "employee",
        isLoggedIn: true,
      },
      {
        name: "Kasia",
        email: "doo@boo.boo",
        userType: "visitor",
        isEditing: false,
      },
      {
        name: "Katarzyna",
        email: "kat@a.rzyna",
        userType: "director",
        isEditing: true,
      },
    ],
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Users App</h1>
        {state.users.map((user, idx) => (
          <UserProfile {...user} key={idx} onClickFn={onClickFn} />
        ))}
      </header>
    </div>
  );
};

export default App;
