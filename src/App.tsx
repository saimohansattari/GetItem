import "./App.css";
import Navbar from "./pages/NavbarPages/Navbar";
import MenuNav from "./pages/NavbarPages/MenuNav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Grocery,
  Mobiles,
  JentsWear,
  GirlsWear,
  KidsWear,
  Electronics,
  BeautyToys,
} from "./pages/MenubarPages/index.ts";
import {
  SignIn,
  Signup,
  UserDashboard,
  PrivateRoute,
} from "./pages/ProfilePages/index.ts";
import Home from "./pages/NavbarPages/Home.tsx";
import {
  Cart,
  SellProductForm,
  Singleproduct,
} from "./pages/ProductPages/index.ts";

function App() {
  return (
    <>
      <Router>
        <Navbar />
      </Router>

      <Router>
        <MenuNav />
        <Routes>
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/Signup" element={<Signup />} />

          <Route path="/UserDashboard" element={<PrivateRoute />}>
            <Route path="/UserDashboard" element={<UserDashboard />} />
          </Route>

          <Route path="/SellProductForm" element={<SellProductForm />} />
          <Route path="/Cart" element={<Cart />} />

          <Route path="/" element={<Home />} />
          <Route path="/Grocery" element={<Grocery />} />
          <Route path="/Mobiles" element={<Mobiles />} />
          <Route path="/JentsWear" element={<JentsWear />} />
          <Route path="/GirlsWear" element={<GirlsWear />} />
          <Route path="/KidsWear" element={<KidsWear />} />
          <Route path="/Electronics" element={<Electronics />} />
          <Route path="/BeautyToys" element={<BeautyToys />} />

          <Route path="/SingleProduct/:id" element={<Singleproduct />} />
          {/* <Route path="/SingleProduct" element={<Singleproduct />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
