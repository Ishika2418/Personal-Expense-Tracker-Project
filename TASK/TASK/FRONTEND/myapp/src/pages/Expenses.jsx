// import { useEffect, useState } from "react";
// import { api } from "../api";

// export default function Expenses() {
//   const [expenses, setExpenses] = useState([]);
//   const [form, setForm] = useState({
//     title: "",
//     amount: "",
//     category: "Food",
//     date: "",
//   });
//   const [editingId, setEditingId] = useState(null);

//   // READ (LIST)
//   const loadExpenses = async () => {
//     const res = await api.get("http://127.0.0.1:8000/api/expenses/");
//     setExpenses(res.data);
//   };

//   useEffect(() => {
//     loadExpenses();
//   }, []);

//   // CREATE (POST)
//   const createExpense = async () => {
//     await api.post("http://127.0.0.1:8000/api/expenses/", form);
//     resetForm();
//     loadExpenses();
//   };

//   // READ (DETAIL)
//   const viewExpense = async (id) => {
//     const res = await api.get(`http://127.0.0.1:8000/api/expenses/${id}/`);
//     setForm(res.data);
//     setEditingId(id);
//   };

//   // UPDATE (PUT)
//   const updateExpense = async () => {
//     await api.put(`http://127.0.0.1:8000/api/expenses/${editingId}/`, form);
//     resetForm();
//     loadExpenses();
//   };

//   // PARTIAL UPDATE (PATCH)
//   const patchExpense = async () => {
//     await api.patch(`http://127.0.0.1:8000/api/expenses/${editingId}/`, {
//       amount: form.amount,
//     });
//     resetForm();
//     loadExpenses();
//   };

//   // DELETE
//   const deleteExpense = async (id) => {
//     await api.delete(`http://127.0.0.1:8000/api/expenses/${id}/`);
//     loadExpenses();
//   };

//   const resetForm = () => {
//     setForm({ title: "", amount: "", category: "Food", date: "" });
//     setEditingId(null);
//   };

//   return (
//     <div style={{ padding: 20 }}>
//       <h2>Expense Manager (FULL CRUD)</h2>

//       {/* CREATE / UPDATE FORM */}
//       <input
//         placeholder="Title"
//         value={form.title}
//         onChange={(e) => setForm({ ...form, title: e.target.value })}
//       />

//       <input
//         placeholder="Amount"
//         type="number"
//         value={form.amount}
//         onChange={(e) => setForm({ ...form, amount: e.target.value })}
//       />

//       <select
//         value={form.category}
//         onChange={(e) => setForm({ ...form, category: e.target.value })}
//       >
//         <option>Food</option>
//         <option>Travel</option>
//         <option>Shopping</option>
//         <option>Bills</option>
//         <option>Other</option>
//       </select>

//       <input
//         type="date"
//         value={form.date}
//         onChange={(e) => setForm({ ...form, date: e.target.value })}
//       />

//       {editingId ? (
//         <>
//           <button onClick={updateExpense}>Update (PUT)</button>
//           <button onClick={patchExpense}>Update Amount Only (PATCH)</button>
//           <button onClick={resetForm}>Cancel</button>
//         </>
//       ) : (
//         <button onClick={createExpense}>Create Expense (POST)</button>
//       )}

//       <hr />

//       {/* READ LIST + DELETE */}
//       <ul>
//         {expenses.map((e) => (
//           <li key={e.id}>
//             <b>{e.title}</b> | ₹{e.amount} | {e.category}

//             <button onClick={() => viewExpense(e.id)}>
//               View / Edit
//             </button>

//             <button onClick={() => deleteExpense(e.id)}>
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }


import { useEffect, useState } from "react";
import { api } from "../api";

export default function Expenses() {
  const [expenses, setExpenses] = useState([]);
  const [form, setForm] = useState({
    title: "",
    amount: "",
    category: "Food",
    date: "",
  });
  const [editingId, setEditingId] = useState(null);

  const loadExpenses = async () => {
    const res = await api.get("http://127.0.0.1:8000/api/expenses/");
    setExpenses(res.data);
  };

  useEffect(() => {
    loadExpenses();
  }, []);

  const createExpense = async () => {
    await api.post("http://127.0.0.1:8000/api/expenses/", form);
    resetForm();
    loadExpenses();
  };

  const viewExpense = async (id) => {
    const res = await api.get(`http://127.0.0.1:8000/api/expenses/${id}/`);
    setForm(res.data);
    setEditingId(id);
  };

  const updateExpense = async () => {
    await api.put(`http://127.0.0.1:8000/api/expenses/${editingId}/`, form);
    resetForm();
    loadExpenses();
  };

  const patchExpense = async () => {
    await api.patch(`http://127.0.0.1:8000/api/expenses/${editingId}/`, {
      amount: form.amount,
    });
    resetForm();
    loadExpenses();
  };

  const deleteExpense = async (id) => {
    await api.delete(`http://127.0.0.1:8000/api/expenses/${id}/`);
    loadExpenses();
  };

  const resetForm = () => {
    setForm({ title: "", amount: "", category: "Food", date: "" });
    setEditingId(null);
  };

  return (
    <div
      style={{
        padding: 20,
        maxWidth: 500,
        margin: "20px auto",
        border: "1px solid #ddd",
        borderRadius: 10,
        boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
        fontFamily: "Arial",
      }}
    >
      <h2 style={{ marginBottom: 15, textAlign: "center" }}>
        Expense Manager (FULL CRUD)
      </h2>

      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <input
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          style={{
            padding: 8,
            borderRadius: 6,
            border: "1px solid #ccc",
          }}
        />

        <input
          placeholder="Amount"
          type="number"
          value={form.amount}
          onChange={(e) => setForm({ ...form, amount: e.target.value })}
          style={{
            padding: 8,
            borderRadius: 6,
            border: "1px solid #ccc",
          }}
        />

        <select
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
          style={{
            padding: 8,
            borderRadius: 6,
            border: "1px solid #ccc",
          }}
        >
          <option>Food</option>
          <option>Travel</option>
          <option>Shopping</option>
          <option>Bills</option>
          <option>Other</option>
        </select>

        <input
          type="date"
          value={form.date}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
          style={{
            padding: 8,
            borderRadius: 6,
            border: "1px solid #ccc",
          }}
        />

        {editingId ? (
          <>
            <button
              onClick={updateExpense}
              style={{
                padding: 8,
                borderRadius: 6,
                background: "#007bff",
                border: "none",
                color: "#fff",
                cursor: "pointer",
              }}
            >
              Update (PUT)
            </button>

            <button
              onClick={patchExpense}
              style={{
                padding: 8,
                borderRadius: 6,
                background: "#28a745",
                border: "none",
                color: "#fff",
                cursor: "pointer",
              }}
            >
              Update Amount Only (PATCH)
            </button>

            <button
              onClick={resetForm}
              style={{
                padding: 8,
                borderRadius: 6,
                background: "#6c757d",
                border: "none",
                color: "#fff",
                cursor: "pointer",
              }}
            >
              Cancel
            </button>
          </>
        ) : (
          <button
            onClick={createExpense}
            style={{
              padding: 8,
              borderRadius: 6,
              background: "#17a2b8",
              border: "none",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            Create Expense (POST)
          </button>
        )}
      </div>

      <hr style={{ margin: "20px 0" }} />

      <ul style={{ padding: 0, listStyle: "none" }}>
        {expenses.map((e) => (
          <li
            key={e.id}
            style={{
              padding: "10px 8px",
              borderBottom: "1px solid #ddd",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span>
              <b>{e.title}</b> | ₹{e.amount} | {e.category}
            </span>

            <div style={{ display: "flex", gap: 6 }}>
              <button
                onClick={() => viewExpense(e.id)}
                style={{
                  padding: "6px 10px",
                  border: "none",
                  borderRadius: 5,
                  background: "#ffc107",
                  cursor: "pointer",
                }}
              >
                Edit
              </button>

              <button
                onClick={() => deleteExpense(e.id)}
                style={{
                  padding: "6px 10px",
                  border: "none",
                  borderRadius: 5,
                  background: "#dc3545",
                  color: "#fff",
                  cursor: "pointer",
                }}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
