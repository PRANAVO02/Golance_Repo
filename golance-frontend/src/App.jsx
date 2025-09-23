import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";   // ✅ new landing page
import HomePage from "./pages/HomePage";
import TaskPage from "./pages/TaskPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import PostTask from "./pages/PostTask";
import MyTasks from "./pages/MyTasks";

function App() {
  return (
    <Router>
      <Routes>
        {/* Landing page is now default */}
        <Route path="/" element={<LandingPage />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<HomePage />} />  {/* ✅ moved HomePage to /home */}

        <Route path="/post-task" element={<PostTask />} />
        <Route path="/tasks" element={<TaskPage />} />
        <Route path="/my-tasks" element={<MyTasks />} />
      </Routes>
    </Router>
  );
}

export default App;
