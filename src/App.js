import { BrowserRouter, Route, Routes } from "react-router-dom";
import List from "./components/List";
import Names from "./components/Names";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<List/>}/>
        <Route path="names" element={<Names/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
