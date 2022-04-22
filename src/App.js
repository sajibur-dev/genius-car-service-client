import { Route, Routes } from "react-router-dom";
import "./Global.css";
import About from "./Pages/About/About";
import AddService from "./Pages/AddService/AddService";
import Home from "./Pages/Home/Home";
import ServiceDetail from "./Pages/Home/Service/ServiceDetail/ServiceDetail";
import Login from "./Pages/Login/Login";
import RequireAuth from "./Pages/Login/RequireAuth/RequireAuth";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";
import Signup from "./Pages/Signup/Signup";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/service/:serviceId"
            element={
              <RequireAuth>
                <ServiceDetail />
              </RequireAuth>
            }
          />
          <Route
            path="/addservice"
            element={
              <RequireAuth>
                <AddService />
              </RequireAuth>
            }
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
