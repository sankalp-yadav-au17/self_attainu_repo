import { Users } from "./components/Users";
import { Products } from "./components/Products";
function App() {

  return (
    <main className="container">
      <div className="d-flex justify-content-evenly mt-5">
      <Users/>
      <Products/>
      </div>
      
    </main>
  );
}

export default App;
