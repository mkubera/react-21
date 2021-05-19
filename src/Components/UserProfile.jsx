import "./UserProfile.css";

const UserProfile = ({ name, email }) => {
  return (
    <div>
      <p>User's name is {name}</p>
      <p>Email {email}</p>
    </div>
  );
};

export default UserProfile;
