import "./UserProfile.css";
import UserProfileEdit from "./UserProfileEdit";

const UserProfile = ({ name, email, userType, isEditing, onClickFn }) => {
  let greeting;
  if (userType === "employee") {
    greeting = "Welcome, you should have access to employee data.";
  }
  if (userType === "visitor") {
    greeting = "Welcome, visitor. Your access is restricted to public data.";
  }

  const onInputFn = (e) => {
    let newName = e.target.value;
    console.log(newName.length);
  };

  let editingSection;
  if (isEditing) {
    editingSection = (
      <section>
        <div>
          Change user name:{" "}
          <UserProfileEdit
            onInputFn={(e) => onInputFn(e)}
            placeholder="enter your user name"
          />
        </div>
        <div>
          Change email:{" "}
          <UserProfileEdit
            onInputFn={(e) => onInputFn(e)}
            placeholder="enter your email address"
          />
        </div>
      </section>
    );
  } else {
    editingSection = <></>;
  }

  return (
    <div className="user">
      <h1>{name}</h1>
      <h2>{email}</h2>
      <p>{greeting}</p>
      <button onClick={() => onClickFn(name)}> edit </button>

      {editingSection}
    </div>
  );
};

export default UserProfile;
