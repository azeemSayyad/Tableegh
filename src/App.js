import { BrowserRouter, Route, Routes } from "react-router-dom";
import List from "./components/List";
import Names from "./components/Names";
import Masjids from "./components/Masjids";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<List/>}/>
        <Route path="names/:halqa_id/:masjid_id" element={<Names/>}/>
        <Route path="masjids/:halqa_id" element={<Masjids/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
