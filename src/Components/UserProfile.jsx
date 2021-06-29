import "./UserProfile.css";
// import UserProfileEdit from "./UserProfileEdit";

const UserProfile = ({ id, name, email, updateUser }) => {
  // const onInputFn = (e) => {
  //   let newName = e.target.value;
  //   console.log(newName.length);
  // };
  const newName = name.split("").reverse().join("");

  return (
    <div className="user">
      <h1>{name}</h1>
      <h2>{email}</h2>
      <button onClick={() => updateUser(id, newName)}> edit </button>

      {/* <section>
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
      </section> */}
    </div>
  );
};

export default UserProfile;
