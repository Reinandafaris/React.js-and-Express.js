import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LogOut, reset } from '../features/authSlice';
import logo from '../images/logo.png';

const Sidebar = ({ handleMenuClick }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const logout = () => {
    dispatch(LogOut());
    dispatch(reset());
    navigate('/');
  };

  return (
    <>
      <div className="toggle">
        <div className="logo">
          <img
            src={logo}
            alt=""
          />
          <h2>
            Faris<span className="danger">WebDev</span>
          </h2>
        </div>
        <div
          className="close"
          onClick={handleMenuClick}
          id="close-btn">
          <span className="material-icons-sharp">close</span>
        </div>
      </div>

      <div className="sidebar">
        <NavLink to="/dashboard">
          <span className="material-icons-sharp">dashboard</span>
          <h3>Dashboard</h3>
        </NavLink>
        {user && user.role === 'admin' && (
          <NavLink to={'/users'}>
            <span className="material-icons-sharp">person_outline</span>
            <h3>Users</h3>
          </NavLink>
        )}
        <NavLink to={'/products'}>
          <span className="material-icons-sharp">local_shipping</span>
          <h3>Products</h3>
        </NavLink>
        <a
          href=""
          onClick={(e) => {
            e.preventDefault();
          }}>
          <span className="material-icons-sharp">insights</span>
          <h3>Analytics</h3>
        </a>
        <a
          href=""
          onClick={(e) => {
            e.preventDefault();
          }}>
          <span className="material-icons-sharp">mail_outline</span>
          <h3>Tickets</h3>
          <span className="message-count">27</span>
        </a>
        <a
          href=""
          onClick={(e) => {
            e.preventDefault();
          }}>
          <span className="material-icons-sharp">inventory</span>
          <h3>Sale List</h3>
        </a>
        <a
          href=""
          onClick={(e) => {
            e.preventDefault();
          }}>
          <span className="material-icons-sharp">report_gmailerrorred</span>
          <h3>Reports</h3>
        </a>
        <a
          href=""
          onClick={(e) => {
            e.preventDefault();
          }}>
          <span className="material-icons-sharp">settings</span>
          <h3>Settings</h3>
        </a>
        <a
          href=""
          onClick={(e) => {
            e.preventDefault();
          }}>
          <span className="material-icons-sharp">add</span>
          <h3>New Login</h3>
        </a>
        <a
          onClick={logout}
          style={{ cursor: 'pointer' }}>
          <span className="material-icons-sharp">logout</span>
          <h3>Logout</h3>
        </a>
      </div>
    </>
  );
};

export default Sidebar;
