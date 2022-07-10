import { useEffect,useState } from "react";
import { Clock } from "./Component/clock";
import { Input } from "./Component/input";

function App() {
  const [value, setvalue] = useState('')

  const callbackfunction = (inputdata) => {
    setvalue(inputdata)
    console.log("input",inputdata);
    // console.log(value);

  }


  return (
    <main className= "container border d-flex justify-content-center">

      <section className="m-5">

        <section className='d-flex justify-content-center'>
          <Input appKaCallBack={callbackfunction}/>
        </section> 
        <section className='d-flex justify-content-center'>
          <Clock alarm={value} />
        </section>

      </section>
      
    </main>
  );
}

export default App;
