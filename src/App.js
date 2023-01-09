import React, { useState } from "react";
import "./App.css";
// import { Dashboard } from "./components/Dashboard";
import { Login } from "./components/Login";
import { Register } from "./components/Register";

export const App = () => {
  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <>
    <div className="container">
      {currentForm === "login" ? (<Login onFormSwitch={toggleForm} />) : (<Register onFormSwitch={toggleForm} />)}
    </div>
    </>
  );
}

export default App;
