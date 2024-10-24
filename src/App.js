import { BrowserRouter, Route, Routes } from "react-router-dom";
import List from "./components/List";
import Names from "./components/Names";
import Masjids from "./components/Masjids";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<List/>}/>
        <Route path="names" element={<Names/>}/>
        <Route path="masjids" element={<Masjids/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
