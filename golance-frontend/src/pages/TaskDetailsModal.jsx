// // src/pages/TaskDetailsModal.jsx
// export default function TaskDetailsModal({ task, onClose, onBidClick }) {
//   return (
//     <div className="modal d-block" tabIndex="-1">
//       <div className="modal-dialog modal-lg">
//         <div className="modal-content">
//           <div className="modal-header">
//             <h5 className="modal-title">Task Details</h5>
//             <button
//               type="button"
//               className="btn-close"
//               onClick={onClose}
//             ></button>
//           </div>
//           <div className="modal-body">
//             <h4>{task.title}</h4>
//             <p><strong>Category:</strong> {task.category}</p>
//             <p><strong>Credits Offered:</strong> {task.creditsOffered}</p>
//             <p><strong>Status:</strong> {task.status}</p>
//             <p><strong>Deadline:</strong> {task.deadline}</p>
//             <p><strong>Description:</strong> {task.description}</p>
//             <p><strong>Posted By:</strong> {task.postedBy?.username || "N/A"}</p>
//           </div>
//           <div className="modal-footer">
//             {task.status === "OPEN" && (
//               <button
//                 className="btn btn-success"
//                 onClick={() => onBidClick(task)}
//               >
//                 Place Bid
//               </button>
//             )}
//             <button className="btn btn-secondary" onClick={onClose}>
//               Close
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
