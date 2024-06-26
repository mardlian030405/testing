import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import NavbarComponents from "../components/NavbarComponents";
import FooterComponents from "../components/FooterComponents";

function App() {
  return (
    <>
      <NavbarComponents />
      <Routes>
        <Route path="/" Component={HomePage}></Route>
      </Routes>
      <FooterComponents />
    </>
  );
}

export default App;
