import "./App.css";
import Siderbar from "./components/siderbar/sidebar";
import Chatbox from "./components/chatbox/chatbox";
import Login from "./components/login/login";
import { useStateValue } from "./components/context/stateProvider";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ACTION_TYPES } from "./components/context/stateReducer";

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem("user"));
    if (localData) {
      dispatch({ type: ACTION_TYPES.SET_USER, payload: { value: localData } });
    }
  }, [dispatch]);

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <BrowserRouter>
            <Siderbar />
            <Routes>
              <Route path="/" element={<Navigate to={"/home"} />} />
              <Route path="/home" element={<Chatbox />} />
            </Routes>
          </BrowserRouter>
        </div>
      )}
    </div>
  );
}

export default App;
