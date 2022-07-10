import { Mainlayout } from "./layouts/mainlayout";

import { BrowserRouter, Route, Link } from "react-router-dom";


function App() {

  



    return (

      <BrowserRouter>
          <Mainlayout/>
      </BrowserRouter>
        
  );
}

export default App;

// <main className="App container d-flex justify-content-center">
//       <section className="d-flex justify-content-center flex-column">
//           <div className='text-center border'>
//           <h1 >This is the place</h1>
//           </div>
          
          
//           <BrowserRouter>
//                 <ul>
//                   <li> </li>
//                   <li></li>
//                 </ul>
//                 <Route exact path="/comments">
//                     {dataComments}
//                 </Route>
//                 <Route exact path="/users"> 
//                     {dataUsers}
//                 </Route>
//           </BrowserRouter>
//       </section>
      
      
//     </main>
