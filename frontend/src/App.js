import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Header from "./components/Header";
function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Header />
          <Routes>
            <Route path="/" component={<Home />}>
              Home
            </Route>
            <Route path="/login" component={<Login />}>
              Login
            </Route>
            <Route path="/register" component={<Register />}>
              Register
            </Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
