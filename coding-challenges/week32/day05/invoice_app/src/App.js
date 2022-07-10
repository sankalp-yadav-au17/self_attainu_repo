import { InvoiceInput } from "./Components/invoice_input";
import { InvoiceLayout } from "./Components/invoice_layout";
import { useDispatch,useSelector } from "react-redux";
import { useState } from "react";

function App() {
  const items = useSelector(state=>state)
  const [price,setprice] = useState()
  const components = items.map(data=>{
    return <InvoiceLayout products={data[0]} units={data[1]} price={data[2]} />
  })
  let sum = 0
  const cost = items.forEach(data=>{
    return sum = sum + Number(data[2])
  })
  console.log(cost);

  return (
    <main className="container">
      {components}
      <section className="d-flex justify-content-evenly">
            <div>
                <h1>total</h1>
            </div>
            <div>
                <h1>Rs{cost}</h1>
            </div>
        </section>

        <section className="d-flex justify-content-center">
            <InvoiceInput/>
        </section>
    </main>
  );
}

export default App;
 