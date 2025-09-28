import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import LandingPage from "./pages/LandingPage";   // ✅ new landing page
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import PostTask from "./pages/PostTask";
import MyTasks from "./pages/MyTasks";
import TaskPage from "./pages/TaskPage";
import TaskBids from "./pages/TaskBids";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <Router>
      <Routes>
        
        {/* <Route path="/" element={<LandingPage />} /> */}
        <Route path="/" element={<HomePage />} />  {/* ✅ moved HomePage to /home */}

        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />


        <Route path="/post-task" element={<PostTask />} />
        <Route path="/my-tasks" element={<MyTasks />} />
        <Route path="/tasks" element={<TaskPage />} />
        <Route path="/tasks/:taskId/bids" element={<TaskBids />} />
        <Route path="/profile/:id" element={<ProfilePage />} /> {/* <- :id is required */}

      </Routes>
    </Router>
  );
}

export default App;
