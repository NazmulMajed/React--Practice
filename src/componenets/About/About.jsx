import React, { useEffect, useState } from "react";

const About = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch the JSON data
    fetch("./products.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch the data");
        }
        return response.json();
      })
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products.json:", error));
  }, []);

  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-item">
          <h2 className="product-title">{product.title}</h2>
          <p className="product-description">{product.description}</p>
          <p className="product-price">Price: {product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default About;
