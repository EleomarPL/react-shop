import axios from 'axios';
import { useEffect, useState } from 'react';

import ProductItem from '../components/views/ProductItem';
import '../styles/home.css';

const Home = () => {
  const [listProducts, setListProducts] = useState([]);
  const [limit, setLimit] = useState(7);

  useEffect(() => {
    axios.get(`https://api.escuelajs.co/api/v1/products?limit=${limit}&offset=0`).then(response => {
      console.log(response);
      setListProducts(response.data);
    });
  }, [limit]);

  return (
    <>
      <section className="container-cards">
        { listProducts &&
          listProducts.map(product =>
            <ProductItem key={ product.id } producData={ product } />
          )
        }
      </section>
      <div className="d-flex justify-content-center mb-2">
        <button type="button" className="load-more-button"
          onClick={ () => setLimit(limit + 5) }
        >
          Cargar 5 Productos Mas
          <i className="bi bi-arrow-down-circle-fill" style={ {fontSize: '1.5rem', marginLeft: '0.5rem'} }></i>
        </button>
      </div>
    </>
  );
};

export default Home;