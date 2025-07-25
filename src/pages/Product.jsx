// src/pages/Product.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const Product = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  });
  const navigate = useNavigate();

  // Fetch products from DummyJSON API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json();
        setProducts(data.products);
      } catch (err) {
        console.error("Failed to load products:", err);
      }
    };

    fetchProducts();
  }, []);

  // Handle add to cart
  const handleAddToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);

    let updatedCart;
    if (existingItem) {
      updatedCart = cartItems.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      updatedCart = [...cartItems, { ...product, quantity: 1 }];
    }

    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const truncate = (text, len) => {
    return text.length > len ? text.slice(0, len) + "..." : text;
  };

  return (
    <div className="product-page">
      <h2>🛍️ All Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.thumbnail} alt={product.title} />
            <h3>{truncate(product.title, 20)}</h3>
            <p>{truncate(product.description, 50)}</p>
            <p className="price">₹ {Math.floor(product.price * 80)}</p>
            <button onClick={() => handleAddToCart(product)}>
              Add to Cart 🛒
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
