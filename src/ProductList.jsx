import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "./CartSlice";
import "./ProductList.css";
import { useNavigate } from "react-router-dom";
const plantsArray = [
  {
    name: "Snake Plant",
    cost: "$15",
    description: "Produces oxygen at night, improving air quality.",
    image: "https://i.imgur.com/tnvFHhj.png",
  },
  {
    name: "Spider Plant",
    cost: "$12",
    description: "Filters formaldehyde and xylene from the air.",
    image: "https://i.imgur.com/dZ3e4z4.jpeg",
  },
  {
    name: "Peace Lily",
    cost: "$18",
    description: "Removes mold spores and purifies the air.",
    image: "https://i.imgur.com/gYCrqU8.jpeg",
  },
];

function ProductList() {
  const navigate = useNavigate();
  const [addedToCart, setAddedToCart] = useState({});
  const dispatch = useDispatch();

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedToCart({ ...addedToCart, [plant.name]: true });
  };

  return (
    <div className="product-grid">
      <div style={{ display: "flex", gap: "10px", marginLeft: "15px" }}>
        <button
          onClick={() => navigate("/")}
          style={{
            margin: "15px",
            padding: "8px 14px",
            background: "#2d7a2d",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          ⬅ Back to Home
        </button>
        <button
          onClick={() => navigate("/cart")}
          style={{
            margin: "15px",
            padding: "8px 14px",
            background: "#444",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          🛒 Go to Cart
        </button>
      </div>

      {plantsArray.map((plant) => (
        <div className="plant-card" key={plant.name}>
          <span className="sale-badge">SALE</span>
          <img src={plant.image} alt={plant.name} />
          <h3>{plant.name}</h3>
          <p>{plant.cost}</p>
          <p>{plant.description}</p>

          <button
            disabled={addedToCart[plant.name]}
            onClick={() => handleAddToCart(plant)}
          >
            {addedToCart[plant.name] ? "Added to Cart" : "Add to Cart"}
          </button>
        </div>
      ))}
    </div>
  );
}
export default ProductList;
