import Plans from "./plans"
import { Data } from "./data";

function BootPage(){

    const dataComponent = Data.map(datas =>{
        return <Plans pkage={datas.package} price={datas.price} bwidth={datas.bandwidth} storage={datas.storage} acc={datas.accounts} domain={datas.domain} supp={datas.support}/>
    })
    console.log(dataComponent);
    return (
        <section>
            <h1 className="text-light text-center">Bootstrap Princing Table</h1>
            <div className="text-light text-center d-flex justify-content-between border p-5">
                {dataComponent}
            </div>
        </section>
    )
}


// SankalpYadav©2021
export default BootPage