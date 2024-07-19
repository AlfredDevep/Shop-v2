import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Product } from "../components/Product";
import axios from "axios";

export const HomeSreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get('/api/products');
        console.log("Fetched data:", data);
        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          console.error("Fetched data is not an array:", data);
          setProducts([]); // Ensure products is always an array
        }
      } catch (error) {
        console.error("Error fetching products:", error);
        setProducts([]); // Ensure products is always an array in case of error
      }
    };

    fetchProducts();
  }, []);

  console.log("Products state:", products);
  console.log("Products type:", typeof products);

  return (
    <>
      <h1>Latest Products!</h1>
      <Row>
        {Array.isArray(products) && products.length > 0 ? (
          products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </Row>
    </>
  );
};

