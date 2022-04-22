import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./pages/header/Header";
import { useRoutes } from "./routes";
import "materialize-css";

function App() {
  const routes = useRoutes(false);
  return (
    <Router>
      <Header />
      <div className="container">{routes}</div>
    </Router>
  );
}

export default App;
