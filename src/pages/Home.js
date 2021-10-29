import axios from 'axios';
import { useEffect, useState } from 'react';

import ProductItem from '../components/views/ProductItem';
import '../styles/home.css';

const Home = () => {
  const [listProducts, setListProducts] = useState([]);

  useEffect(() => {
    axios.get('https://api.escuelajs.co/api/v1/products?limit=7&offset=0').then(response => {
      console.log(response);
      setListProducts(response.data);
    });
  }, []);

  return (
    <section className="container-cards">
      { listProducts &&
        listProducts.map(product =>
          <ProductItem key={ product.id } producData={ product } />
        )
      }
    </section>
  );
};

export default Home;