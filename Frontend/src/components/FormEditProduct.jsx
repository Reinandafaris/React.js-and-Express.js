import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const FormEditProduct = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const getProductById = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/products/${id}`);
        setName(response.data.name);
        setPrice(response.data.price);
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    };
    getProductById();
  }, [id]);

  const updateProduct = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/products/${id}`, {
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
      <h2>Edit Product</h2>
      <div
        className="tabel-putih"
        style={{ height: 'auto' }}>
        <form onSubmit={updateProduct}>
          <p>{msg}</p>
          <label>Name</label>
          <div>
            <input
              type="text"
              className="input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Product Name"
            />
          </div>
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
          <div>
            <button
              type="submit"
              className="tombol-save">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormEditProduct;
