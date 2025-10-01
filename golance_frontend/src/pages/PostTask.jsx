// src/pages/PostTask.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Form, Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function PostTask() {
  const [task, setTask] = useState({
    title: "",
    description: "",
    creditsOffered: "",
    category: "",
    deadline: null, // store Date object
  });

  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token");

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleDateChange = (date) => {
    setTask({ ...task, deadline: date });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user || !token) {
      alert("You must be logged in to post a task.");
      navigate("/login");
      return;
    }

    const taskData = {
      title: task.title,
      description: task.description,
      category: task.category,
      deadline: task.deadline ? task.deadline.toISOString().split("T")[0] : "", // format YYYY-MM-DD
      status: "OPEN",
      creditsOffered: parseInt(task.creditsOffered),
      postedById: user.id,
    };

    try {
      const response = await fetch("http://localhost:8080/api/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(taskData),
      });

      if (response.ok) {
        alert("✅ Task posted successfully!");
        navigate("/my-tasks");
      } else {
        const err = await response.json();
        alert("❌ Failed to post task: " + (err.message || "Unknown error"));
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <Card className="shadow-lg p-4 w-75">
        <h2 className="text-center mb-4 text-primary">📌 Post a New Task</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formTitle">
            <Form.Label>Task Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={task.title}
              onChange={handleChange}
              placeholder="Enter task title"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="description"
              value={task.description}
              onChange={handleChange}
              placeholder="Describe the task in detail"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formCredits">
            <Form.Label>Credits Offered</Form.Label>
            <Form.Control
              type="number"
              name="creditsOffered"
              value={task.creditsOffered}
              onChange={handleChange}
              placeholder="Enter credits"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formCategory">
            <Form.Label>Category</Form.Label>
            <Form.Control
              type="text"
              name="category"
              value={task.category}
              onChange={handleChange}
              placeholder="e.g. Web Development, Design, Writing"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formDeadline">
            <Form.Label>Deadline</Form.Label>
            <DatePicker
              selected={task.deadline}
              onChange={handleDateChange}
              dateFormat="yyyy-MM-dd"
              minDate={new Date()} // disable past dates
              placeholderText="Select a deadline"
              className="form-control"
              required
              showPopperArrow={false}
              popperPlacement="bottom"
            />
          </Form.Group>

          <div className="text-center">
            <Button type="submit" variant="primary" className="px-4">
              🚀 Post Task
            </Button>
          </div>
        </Form>
      </Card>
    </div>
  );
}
