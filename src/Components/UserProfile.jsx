import "./UserProfile.css";
import UserProfileEdit from "./UserProfileEdit";

const UserProfile = ({ name, email, onClickFn }) => {
  const onInputFn = (e) => {
    let newName = e.target.value;
    console.log(newName.length);
  };

  return (
    <div className="user">
      <h1>{name}</h1>
      <h2>{email}</h2>
      <button onClick={() => onClickFn(name)}> edit </button>

      <section>
        <div>
          Change user name:{" "}
          <UserProfileEdit
            value={name}
            onInputFn={(e) => onInputFn(e)}
            placeholder="enter your user name"
          />
        </div>
        <div>
          Change email:{" "}
          <UserProfileEdit
            value={email}
            onInputFn={(e) => onInputFn(e)}
            placeholder="enter your email address"
          />
        </div>
      </section>
    </div>
  );
};

export default UserProfile;
