import {BrowserRouter, Route, Routes} from "react-router-dom" 
import { Users } from "./components/Users";
import { Albums } from "./components/Albums";
import { Images } from "./components/Images";


function App() {
  return (
    <main className="container">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Users/>}/>
          <Route exact path="/albums" element={<Albums/>}/>
          <Route exact path="/images" element={<Images/>}/>
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
