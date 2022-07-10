import { Plans } from "./Component/package/plans";
import { Data } from "./Component/package/data";
import { Navbar } from "./Component/navbar/navbar";
import { Frontmain } from "./Component/frontmain/fronmain";


function App() {

  const datacomponent = Data.map(datas =>{
    return <Plans buttoncolor={datas.buttoncolor} textcolor={datas.textcolor} topname={datas.topName} header={datas.header} headline={datas.headline} />
  })

  return (
    <section className=''>
      <div>
        <Navbar/>
      </div>
      <div className="mb-3">
        <Frontmain />
      </div>
      <div className="row">
      {datacomponent}
      </div>
      
    </section>
  );
}

export default App;
