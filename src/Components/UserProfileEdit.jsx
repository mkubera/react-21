const UserProfileEdit = ({ onInputFn, placeholder }) => {
  return <input onInput={onInputFn} type="text" placeholder={placeholder} />;
};

export default UserProfileEdit;
