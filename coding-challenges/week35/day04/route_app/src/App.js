import {Routes, Route, useNavigate } from "react-router-dom";
import { Anyblogarticle } from "./components/Anyblogarticle";
import { Testarticle } from "./components/Testarticle";
import { Buttons } from "./components/Buttons";

function App() {
  const navigate = useNavigate()
  return (
    <main>
      <h2>Route is "/"</h2>
     <button onClick={()=>{navigate(`/buttons`)}}>Click here display buttons</button>
    <Routes>
      <Route path="/">
        <Route path="/buttons" element={<Buttons/>}>
          <Route path="/buttons/anyblogarticles" element={<Anyblogarticle />} />
          <Route path="/buttons/testarticles" element={<Testarticle />} />
        </Route>
      </Route>
    </Routes>

    </main>
  );
}

export default App;
