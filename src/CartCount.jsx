import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function CartCount() {
  const navigate = useNavigate();
  const items = useSelector((state) => state.cart.items);
  const totalCount = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div
      onClick={() => navigate("/cart")}
      style={{
        cursor: "pointer",
        position: "absolute",
        right: "20px",
        top: "20px",
        fontWeight: "bold",
        background: "#fff",
        padding: "8px 12px",
        borderRadius: "8px",
        boxShadow: "0 0 5px rgba(0,0,0,0.2)",
      }}
    >
      🛒 {totalCount}
    </div>
  );
}

export default CartCount;
