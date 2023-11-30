import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Userlist = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get('http://localhost:5000/users');
    setUsers(response.data);
  };

  const deleteUser = async (userId) => {
    await axios.delete(`http://localhost:5000/users/${userId}`);
    getUsers();
  };

  return (
    <div>
      <h1>Users</h1>
      <h2>List of Users</h2>
      <Link
        to="/users/add"
        className="tombol-tambah">
        Add New
      </Link>
      <div
        className="recent-orders"
        style={{ marginTop: '4.5rem' }}>
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Reinanda Faris</td>
              <td>admin@gmail.com</td>
              <td>admin</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>2</td>
              <td>Faris User</td>
              <td>user@gmail.com</td>
              <td>user</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="recent-orders">
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) =>
              user.name === 'Reinanda Faris' || user.name === 'Faris User' ? null : (
                <tr key={user.uuid}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>
                    <Link
                      to={`/users/edit/${user.uuid}`}
                      className="tombol-edit">
                      Edit
                    </Link>
                    <button
                      type="button"
                      onClick={() => deleteUser(user.uuid)}
                      className="tombol-hapus">
                      Delete
                    </button>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Userlist;
