import { useState } from 'react';
import profile1 from '../images/profile-1.jpg';
import logo from '../images/logo.png';
import { useSelector } from 'react-redux';

function Right({ handleCloseClick }) {
  const [darkModeActive, setDarkModeActive] = useState(false);

  const { user } = useSelector((state) => state.auth);

  const handleDarkMode = () => {
    document.body.classList.toggle('dark-mode-variables');
    setDarkModeActive(!darkModeActive);
  };

  return (
    <>
      <div className="right-section">
        <div className="nav">
          <button
            id="menu-btn"
            onClick={handleCloseClick}>
            <span className="material-icons-sharp">menu</span>
          </button>
          <div
            className="dark-mode"
            onClick={handleDarkMode}>
            <span className={`material-icons-sharp ${darkModeActive ? '' : 'active'}`}>light_mode</span>
            <span className={`material-icons-sharp ${darkModeActive ? 'active' : ''}`}>dark_mode</span>
          </div>

          <div className="profile">
            <div className="info">
              <p>
                Hey, <b>{user && user.name}</b>
              </p>
              <small className="text-muted">{user && user.role}</small>
            </div>
            <div className="profile-photo">
              <img
                src={profile1}
                alt=""
              />
            </div>
          </div>
        </div>
        {/* <!-- End of Nav --> */}

        <div className="user-profile">
          <div className="logo">
            <img
              src={logo}
              alt=""
            />
            <h2>Faris WebDev</h2>
            <p>Fullstack Web Developer</p>
          </div>
        </div>

        <div className="reminders">
          <div className="header">
            <h2>Reminders</h2>
            <span className="material-icons-sharp">notifications_none</span>
          </div>

          <div className="notification">
            <div className="icon">
              <span className="material-icons-sharp">volume_up</span>
            </div>
            <div className="content">
              <div className="info">
                <h3>Workshop</h3>
                <small className="text_muted">08:00 AM - 12:00 PM</small>
              </div>
              <span className="material-icons-sharp">more_vert</span>
            </div>
          </div>

          <div className="notification deactive">
            <div className="icon">
              <span className="material-icons-sharp">edit</span>
            </div>
            <div className="content">
              <div className="info">
                <h3>Workshop</h3>
                <small className="text_muted">08:00 AM - 12:00 PM</small>
              </div>
              <span className="material-icons-sharp">more_vert</span>
            </div>
          </div>

          <div className="notification add-reminder">
            <div>
              <span className="material-icons-sharp">add</span>
              <h3>Add Reminder</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Right;
