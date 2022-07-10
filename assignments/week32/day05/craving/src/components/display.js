import { useSelector } from "react-redux"

function DisplayInfo(props) {
    const data = useSelector((state) => state)  
    console.log(data.meals);
    if (data.meals != {}){
        return (    
            <main className="d-flex row">
                <section className="border col-5">
                    <img className="w-75" src={data.meals[0].strMealThumb}  />
                    <h5>Category: {data.meals[0].strCategory}</h5>
                    <h5>Area:{data.meals[0].strArea}</h5>
                    <h5>Tag:{data.meals[0].strTags}</h5>
                </section>
                <section className="col-6">
                    <h1>{data.meals[0].strMeal}</h1>
                    <p>{data.meals[0].strInstructions}</p>
                </section>
            </main>
        )
    }
    else{
        return(
            <main>

            </main>
        )
    }
    
}

export {DisplayInfo}