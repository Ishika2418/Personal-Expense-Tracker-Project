// import { useState } from "react";
// import { api } from "../api";

// function Converter() {
//       const [amount, setAmount] = useState("");
//   const [result, setResult] = useState("");

//   const convert = async () => {
//     const res = await api.get(`http://127.0.0.1:8000/api/convert/?amount=${amount}&to=USD`);
//     setResult(res.data.converted_amount);
//   };

//   return (
//     <div>
//         <h2>Currency Converter</h2>
//       <input onChange={e => setAmount(e.target.value)} />
//       <button onClick={convert}>Convert to USD</button>
//       <p>USD: {result}</p>
//     </div>
//   )
// }

// export default Converter

// 

import { useState } from "react";
import { api } from "../api";

function Converter() {
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState("");

  const convert = async () => {
    const res = await api.get(
      `http://127.0.0.1:8000/api/convert/?amount=${amount}&to=USD`
    );
    setResult(res.data.converted_amount);
  };

  return (
    <div
      style={{
        padding: 20,
        maxWidth: 400,
        margin: "20px auto",
        border: "1px solid #ddd",
        borderRadius: 10,
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        fontFamily: "Arial",
        textAlign: "center",
      }}
    >
      <h2 style={{ marginBottom: 15 }}>Currency Converter</h2>

      <input
        placeholder="Enter amount"
        onChange={(e) => setAmount(e.target.value)}
        style={{
          padding: 8,
          width: "80%",
          borderRadius: 6,
          border: "1px solid #ccc",
          marginBottom: 10,
        }}
      />

      <button
        onClick={convert}
        style={{
          padding: "8px 14px",
          borderRadius: 6,
          background: "#007bff",
          border: "none",
          color: "#fff",
          cursor: "pointer",
          marginLeft: 10,
        }}
      >
        Convert to USD
      </button>

      <p style={{ marginTop: 15, fontSize: 18, fontWeight: "bold" }}>
        USD: {result}
      </p>
    </div>
  );
}

export default Converter;
