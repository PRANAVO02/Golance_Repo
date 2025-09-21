import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TaskPage from "./pages/TaskPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import PostTask from "./pages/PostTask";
import MyTasks from "./pages/MyTasks"; // ✅ import MyTasks page
// import EditTask from "./pages/EditTask";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/post-task" element={<PostTask />} />
        <Route path="/tasks" element={<TaskPage />} />
         {/* <Route path="/edit-task/:id" element={<EditTask />} /> */}

        {/* ✅ New route for showing only logged-in user's tasks */}
        <Route path="/my-tasks" element={<MyTasks />} />
      </Routes>
    </Router>
  );
}

export default App;
