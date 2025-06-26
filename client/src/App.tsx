import { useState } from "react";
import { Outlet } from "react-router";
import { Bounce, ToastContainer } from "react-toastify";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const [user, setUser] = useState(null);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
      <Navbar />
      <h1 className="text-4xl text-center my-8">User : {user}</h1>
      <Outlet />
    </>
  );
}

export default App;
