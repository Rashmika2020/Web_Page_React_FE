
export const ProfileName = ({ name, image }) => {
  return (
    <div className="profile-container">
    <i className="fa-regular fa-bell" />
    <div className="profile-name">
      <img src={"assets/profileName/profilePicture.png"} alt={name} className="profile-image" />
      <span className="profile-text">John Smith</span>
      <span className="dropdown-icon">&#9662;</span>
    </div>
  </div>
  );
};

