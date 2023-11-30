import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const FormEditUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');
  const [role, setRole] = useState('');
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const getUserById = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/users/${id}`);
        setName(response.data.name);
        setEmail(response.data.email);
        setRole(response.data.role);
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    };
    getUserById();
  }, [id]);

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/users/${id}`, {
        name: name,
        email: email,
        password: password,
        confPassword: confPassword,
        role: role,
      });
      navigate('/users');
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };
  return (
    <div>
      <h1>Users</h1>
      <h2>Update User</h2>
      <div className="tabel-putih">
        <form onSubmit={updateUser}>
          <p>{msg}</p>
          <label>Name</label>
          <div>
            <input
              type="text"
              className="input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
            />
          </div>
          <label>Email</label>
          <div>
            <input
              type="text"
              className="input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
          </div>
          <label>Password</label>
          <div>
            <input
              type="password"
              className="input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="******"
            />
          </div>
          <label>Confirm Password</label>
          <div>
            <input
              type="password"
              className="input"
              value={confPassword}
              onChange={(e) => setConfPassword(e.target.value)}
              placeholder="******"
            />
          </div>
          <label>Role</label>
          <div>
            <select
              className="input"
              value={role}
              onChange={(e) => setRole(e.target.value)}>
              <option>Admin</option>
              <option>User</option>
            </select>
          </div>
          <button
            type="submit"
            className="tombol-save">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormEditUser;
