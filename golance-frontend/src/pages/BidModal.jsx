// import { useState, useEffect } from "react";

// export default function BidModal({ task, onClose, onUpdate, userId }) {
//   const [bid, setBid] = useState(0);
//   const [bids, setBids] = useState([]);

//   if (!task) return null;

//   const fetchBids = async () => {
//     try {
//       const res = await fetch(`http://localhost:8080/api/bids/task/${task.id}`);
//       if (!res.ok) throw new Error("Failed to fetch bids");
//       const data = await res.json();
//       data.sort((a, b) => b.creditsBid - a.creditsBid); // descending
//       setBids(data);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   useEffect(() => {
//     fetchBids();
//   }, [task]);

//   const handleSubmitBid = async () => {
//     try {
//       const existingBid = bids.find((b) => b.user.id === userId);
//       const newCredits = existingBid ? existingBid.creditsBid + bid : bid;

//       const res = await fetch(`http://localhost:8080/api/bids?taskId=${task.id}&userId=${userId}&credits=${bid}`, {
//         method: "POST",
//       });

//       if (!res.ok) throw new Error("Failed to place bid");
//       const updatedBid = await res.json();

//       fetchBids(); // refresh bids list

//       // Update task credits locally
//       if (onUpdate) {
//         const updatedTask = { ...task, creditsOffered: task.creditsOffered + bid };
//         onUpdate(updatedTask);
//       }

//       setBid(0);
//     } catch (err) {
//       console.error(err);
//       alert("Failed to place bid");
//     }
//   };

//   return (
//     <div
//       className="modal show d-block"
//       tabIndex="-1"
//       style={{ background: "rgba(0,0,0,0.5)" }}
//     >
//       <div className="modal-dialog">
//         <div className="modal-content">
//           <div className="modal-header">
//             <h5 className="modal-title">{task.title}</h5>
//             <button type="button" className="btn-close" onClick={onClose}></button>
//           </div>
//           <div className="modal-body">
//             <p><strong>Description:</strong> {task.description}</p>
//             <p><strong>Category:</strong> {task.category}</p>
//             <p><strong>Credits:</strong> {task.creditsOffered}</p>
//             <p><strong>Status:</strong> {task.status}</p>
//             <p><strong>Deadline:</strong> {task.deadline}</p>
//             <p><strong>Posted By:</strong> {task.postedBy.username}</p>

//             <hr />
//             <h6>Place Your Bid:</h6>
//             <div className="d-flex gap-2 mb-2">
//               {[1, 5, 10].map((val) => (
//                 <button
//                   key={val}
//                   className="btn btn-secondary"
//                   onClick={() => setBid((prev) => Math.max(prev + val, 0))}
//                 >
//                   +{val}
//                 </button>
//               ))}
//               <button
//                 className="btn btn-warning"
//                 onClick={() => setBid((prev) => Math.max(prev - 1, 0))}
//               >
//                 -1
//               </button>
//             </div>
//             <p>Your Bid: {bid}</p>
//             <button className="btn btn-primary mb-3" onClick={handleSubmitBid}>
//               Submit Bid
//             </button>

//             <hr />
//             <h6>Previous Bids (Highest First):</h6>
//             {bids.length === 0 && <p>No bids yet</p>}
//             <ul className="list-group">
//               {bids.map((b) => (
//                 <li key={b.id} className="list-group-item d-flex justify-content-between">
//                   <span>{b.user.username}</span>
//                   <span>{b.creditsBid} credits</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//           <div className="modal-footer">
//             <button className="btn btn-secondary" onClick={onClose}>
//               Close
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
