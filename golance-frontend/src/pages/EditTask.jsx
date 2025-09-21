// import { useState, useEffect } from "react";
// import { useNavigate, useParams } from "react-router-dom";

// export default function EditTask() {
//   const { id } = useParams(); // task id from URL
//   const navigate = useNavigate();
//   const [task, setTask] = useState({
//     title: "",
//     description: "",
//     category: "",
//     creditsOffered: 0,
//     deadline: "",
//     status: "PENDING",
//   });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   // Fetch task details to populate form
//   useEffect(() => {
//     fetch(`http://localhost:8080/api/tasks/${id}`)
//       .then(res => res.json())
//       .then(data => {
//         setTask({
//           title: data.title,
//           description: data.description,
//           category: data.category,
//           creditsOffered: data.creditsOffered,
//           deadline: data.deadline,
//           status: data.status
//         });
//       })
//       .catch(err => setError("Failed to fetch task"));
//   }, [id]);

//   const handleChange = (e) => {
//     setTask({ ...task, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");

//     try {
//       const res = await fetch(`http://localhost:8080/api/tasks/${id}`, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(task),
//       });

//       if (!res.ok) throw new Error("Update failed");

//       navigate("/my-tasks"); // go back to My Tasks
//     } catch (err) {
//       setError(err.message || "Something went wrong");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="container my-5">
//       <h2>Edit Task</h2>
//       {error && <div className="alert alert-danger">{error}</div>}
//       <form onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <input
//             type="text"
//             name="title"
//             value={task.title}
//             onChange={handleChange}
//             placeholder="Title"
//             className="form-control"
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <textarea
//             name="description"
//             value={task.description}
//             onChange={handleChange}
//             placeholder="Description"
//             className="form-control"
//             rows="4"
//           />
//         </div>
//         <div className="mb-3">
//           <input
//             type="text"
//             name="category"
//             value={task.category}
//             onChange={handleChange}
//             placeholder="Category"
//             className="form-control"
//           />
//         </div>
//         <div className="mb-3">
//           <input
//             type="number"
//             name="creditsOffered"
//             value={task.creditsOffered}
//             onChange={handleChange}
//             placeholder="Credits"
//             className="form-control"
//           />
//         </div>
//         <div className="mb-3">
//           <input
//             type="date"
//             name="deadline"
//             value={task.deadline}
//             onChange={handleChange}
//             className="form-control"
//           />
//         </div>
//         <div className="mb-3">
//           <select
//             name="status"
//             value={task.status}
//             onChange={handleChange}
//             className="form-select"
//           >
//             <option value="PENDING">PENDING</option>
//             <option value="IN_PROGRESS">IN_PROGRESS</option>
//             <option value="COMPLETED">COMPLETED</option>
//           </select>
//         </div>
//         <button type="submit" className="btn btn-success" disabled={loading}>
//           {loading ? "Saving..." : "Save Changes"}
//         </button>
//       </form>
//     </div>
//   );
// }
