export const UserInfo = ({ user }) => {
  // Provide default user data if none is provided
  const defaultUser = {
    avatar: 'https://via.placeholder.com/150',
    name: 'Default User',
    role: 'User'
  };

  // Use the provided user data or the default data
  const { avatar, name, role } = user || defaultUser;

  return (
    <div className="user-info">
      <img src={avatar} alt={`${name}'s avatar`} />
      <h2>{name}</h2>
      <p>{role}</p>
    </div>
  );
};


