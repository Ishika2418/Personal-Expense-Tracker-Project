// import { useEffect, useState } from "react";
// import { api } from "../api";
// import { PieChart, Pie, Tooltip } from "recharts";

// function Dashboard() {
//       const [data, setData] = useState([]);

//   useEffect(() => {
//     api.get("http://127.0.0.1:8000/api/dashboard/").then(res => setData(res.data.category_breakdown));
//   }, []);
//   return (
//     <div>
//             <h2>Expense Dashboard</h2>
//       <PieChart width={400} height={400}>
//         <Pie data={data} dataKey="total" nameKey="category" />
//         <Tooltip />
//       </PieChart>
//     </div>
//   )
// }

// export default Dashboard


// import { useEffect, useState } from "react";
// import { api } from "../api";
// import { PieChart, Pie, Tooltip } from "recharts";


// function Dashboard() {
//       const [data, setData] = useState([]);

//   useEffect(() => {
//     api.get("http://127.0.0.1:8000/api/dashboard/").then(res => setData(res.data.category_breakdown));
//   }, []);
//   return (
//     <div>
//             <h2>Expense Dashboard</h2>
//       <PieChart width={400} height={400}>
//         <Pie data={data} dataKey="total" nameKey="category" />
//         <Tooltip />
//       </PieChart>
//     </div>
//   )
// }

// export default Dashboard

import { useEffect, useState } from "react";
import { api } from "../api";
import { PieChart, Pie, Tooltip } from "recharts";

function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    api.get("http://127.0.0.1:8000/api/dashboard/")
      .then(res => setData(res.data.category_breakdown));
  }, []);

  return (
    <div
      style={{
        padding: 20,
        maxWidth: 500,
        margin: "20px auto",
        border: "1px solid #ddd",
        BorderRadius: 10,
        boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
        fontFamily: "Arial",
        textAlign: "center"
      }}
    >
      <h2 style={{ marginBottom: 20 }}>Expense Dashboard</h2>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <PieChart width={350} height={350}>
          <Pie
            data={data}
            dataKey="total"
            nameKey="category"
            outerRadius={120}
          />
          <Tooltip />
        </PieChart>
      </div>
    </div>
  );
}

export default Dashboard;

