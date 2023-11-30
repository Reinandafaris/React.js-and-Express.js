import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await axios.get('http://localhost:5000/products');
    setProducts(response.data);
  };

  const deleteProduct = async (productId) => {
    await axios.delete(`http://localhost:5000/products/${productId}`);
    getProducts();
  };

  return (
    <div>
      <h1>Products</h1>
      <h2>List of Products</h2>
      <Link
        to="/products/add"
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
              <th>Product Name</th>
              <th>Price</th>
              <th>Created By</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={product.uuid}>
                <td>{index + 1}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.user.name}</td>
                <td>
                  <Link
                    to={`/products/edit/${product.uuid}`}
                    className="tombol-edit">
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteProduct(product.uuid)}
                    className="tombol-hapus">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <a
          href=""
          onClick={(e) => {
            e.preventDefault();
          }}>
          Show All
        </a>
      </div>
    </div>
  );
};

export default ProductList;
