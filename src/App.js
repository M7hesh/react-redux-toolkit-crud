import "./App.css";
import Navbar from "./Components/Navbar";
import Create from "./Components/Create";
import Read from "./Components/Read";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Update from "./Components/Update";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Create />}></Route>
          <Route exact path="/read" element={<Read />}></Route>
          <Route exact path="/update/:id" element={<Update />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
