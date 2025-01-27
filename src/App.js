import React, { useState, useEffect } from 'react';
import FilterButtons from './components/FilterButtons';
import ProductList from './components/ProductList';
import Loading from './components/Loading'; 
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentCategory, setCurrentCategory] = useState('all');

  useEffect(() => {
    setLoading(true);
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching products:', err);
        setLoading(false);
      });
  }, []);

  const handleFilter = (category) => {
    setCurrentCategory(category);

    if (category === 'all') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        (product) => product.category === category
      );
      setFilteredProducts(filtered);
    }
  };

  return (
    <div className="App">

      {}
      <FilterButtons
        onFilter={handleFilter}
        currentCategory={currentCategory}
      />

      {}
      {loading ? (
        <Loading />
      ) : (
        <ProductList products={filteredProducts} />
      )}
    </div>
  );
}

export default App;
