import Product from "./Product";
import { useEffect, useState } from "react";

const Body = ({ search }) => {

  const [productsData, setProductsData] = useState([]);
  const [filteredProductData, setFilteredProductData] = useState([]);

  useEffect(() => {
    fetch("./products.json")
      .then((res) => res.json())
      .then((data) => {
        setProductsData(data);
        setFilteredProductData(data);
      })
      .catch((error) => console.log("Unable to load data", error));
  }, []);

  // ⭐ Filter whenever search changes
  useEffect(() => {
    const result = productsData.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredProductData(result);
  }, [search, productsData]);

  return (
    <div className="body">
      <div className="products" style={{ display: "flex", flexWrap: "wrap", gap: "35px" }}>
        {filteredProductData.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Body;
