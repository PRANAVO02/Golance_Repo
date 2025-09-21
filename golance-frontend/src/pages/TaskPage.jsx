import { useEffect, useState } from "react";
import BidModal from "./BidModal"; // same folder

export default function TaskPage() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const user = JSON.parse(localStorage.getItem("user")); // logged-in user

  const fetchTasks = async () => {
    try {
      const res = await fetch("http://localhost:8080/api/tasks");
      if (!res.ok) throw new Error("Failed to fetch tasks");
      const data = await res.json();
      setTasks(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleViewDetails = (task) => {
    setSelectedTask(task);
    setShowModal(true);
  };

  const handleTaskUpdate = (updatedTask) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === updatedTask.id ? updatedTask : t))
    );
  };

  return (
    <div className="container my-5">
      <h2 className="mb-4">All Tasks</h2>
      {loading && <p>Loading tasks...</p>}
      {error && <div className="alert alert-danger">{error}</div>}

      <div className="row">
        {tasks.map((task) => (
          <div key={task.id} className="col-md-4 mb-3">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{task.title}</h5>
                <p><strong>Category:</strong> {task.category}</p>
                <p><strong>Credits:</strong> {task.creditsOffered}</p>
                <p><strong>Status:</strong> {task.status}</p>
                <p>
                  <strong>Deadline:</strong> {task.deadline}
                </p>
                <p><strong>Posted By:</strong> {task.postedBy.username}</p>
                <button
                  className="btn btn-info me-2"
                  onClick={() => handleViewDetails(task)}
                >
                  View Details
                </button>
                {user && (
                  <button
                    className="btn btn-success"
                    onClick={() => handleViewDetails(task)}
                  >
                    Bid
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedTask && showModal && (
        <BidModal
          task={selectedTask}
          onClose={() => setShowModal(false)}
          onUpdate={handleTaskUpdate}
          userId={user.id}
        />
      )}
    </div>
  );
}
