import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

export default function ProfilePage() {
  const { id } = useParams(); // get user ID from URL
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch(`http://localhost:8080/api/users/${id}`);
        if (!res.ok) throw new Error("Failed to fetch user details");
        const data = await res.json();
        setUser(data);
      } catch (err) {
        setError(err.message || "Something went wrong");
      }
    };

    fetchUser();
  }, [id]);

  const handleBack = () => navigate("/home");

  if (error) {
    return (
      <div className="container text-center mt-5">
        <h3 className="text-danger">{error}</h3>
        <button className="btn btn-primary mt-3" onClick={handleBack}>
          Back to Home
        </button>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="container text-center mt-5">
        <h3>Loading user details...</h3>
      </div>
    );
  }

  return (
    <div className="container mt-5" style={{ maxWidth: "600px" }}>
      <h2 className="mb-4 text-center">User Profile</h2>
      <div className="card shadow p-4">
        <div className="mb-3">
          <strong>Username:</strong> {user.username}
        </div>
        <div className="mb-3">
          <strong>Email:</strong> {user.email}
        </div>
        <div className="mb-3">
          <strong>Role:</strong> {user.role}
        </div>
        <div className="mb-3">
          <strong>Department:</strong> {user.department || "N/A"}
        </div>
        <div className="mb-3">
          <strong>Studying Year:</strong> {user.studyingYear || "N/A"}
        </div>
        <div className="mb-3">
          <strong>Skills:</strong> {user.skills || "N/A"}
        </div>

        <button className="btn btn-primary mt-3" onClick={handleBack}>
          Back to Home
        </button>
      </div>
    </div>
  );
}
