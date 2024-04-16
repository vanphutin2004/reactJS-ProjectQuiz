import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import User from "./components/User/User";
import Admin from "./components/Admin/Admin";
import HomePage from "./components/Home/HomePage";
import ManageUsers from "./components/Admin/Content/ManageUsers";
import DashBoar from "./components/Admin/Content/DashBoar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./components/Auth/Login";
import "react-toastify/dist/ReactToastify.css";
import Register from "./components/Auth/Register";
import ListQuiz from "./components/User/ListQuiz";
import DetailQuiz from "./components/User/DetailQuiz";

const Layout = (props) => {
  const NotFound = () => {
    return (
      <div
        className="container mt-3 alert alert-danger text-center"
        role="alert"
      >
        <b>404 </b>. Page Not Found
      </div>
    );
  };
  return (
    <>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="users" element={<ListQuiz />} />
        </Route>
        <Route path="quiz/:id" element={<DetailQuiz />} />
        <Route path="admins" element={<Admin />}>
          <Route index element={<DashBoar />} />
          <Route path="manage-users" element={<ManageUsers />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
};
export default Layout;
