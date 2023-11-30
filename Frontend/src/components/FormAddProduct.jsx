import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const FormAddProduct = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();

  const saveProduct = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/products', {
        name: name,
        price: price,
      });
      navigate('/products');
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <div>
      <h1>Products</h1>
      <h2>Add New Product</h2>
      <div
        className="tabel-putih"
        style={{ height: 'auto' }}>
        <form onSubmit={saveProduct}>
          <p>{msg}</p>
          <div>
            <label className="label">Name</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Product Name"
              />
            </div>
          </div>
          <div>
            <label>Price</label>
            <div>
              <input
                type="text"
                className="input"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Price"
              />
            </div>
          </div>

          <div>
            <div>
              <button
                type="submit"
                className="tombol-save">
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormAddProduct;
