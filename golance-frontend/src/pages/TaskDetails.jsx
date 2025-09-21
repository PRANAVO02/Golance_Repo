import { useEffect, useState } from "react";

export default function TaskDetails({ task, onClose }) {
  const [bids, setBids] = useState([]);

  useEffect(() => {
    const fetchBids = async () => {
      try {
        const res = await fetch(`http://localhost:8080/api/bids/task/${task.id}`);
        if (!res.ok) throw new Error("Failed to fetch bids");
        const data = await res.json();
        setBids(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchBids();
  }, [task]);

  return (
    <div className="modal show d-block" style={{ background: "rgba(0,0,0,0.5)" }}>
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Task Details - {task.title}</h5>
            <button className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <p><strong>Description:</strong> {task.description}</p>
            <p><strong>Credits Offered:</strong> {task.creditsOffered}</p>
            <h6>Previous Bids:</h6>
            <ul>
              {bids.length === 0 && <li>No bids yet</li>}
              {bids.map((b) => (
                <li key={b.id}>
                  {b.user.username} bid {b.creditsBid} credits
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
