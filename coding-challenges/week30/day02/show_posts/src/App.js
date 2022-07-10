import { useEffect, useState } from 'react';
import { PostList } from './Components/post_list';
import { PostDetails } from './Components/post_details';

function App() {


  const [apidata, setapidata] = useState([])
  const [currentpost, setcurrentpost] = useState({id:null, body:''})

  useEffect(async()=>{
      const api = "https://jsonplaceholder.typicode.com/posts"
      const response = await fetch(api)
      const data = await response.json()
      setapidata(data)
      // console.log(data);
  },[])

    const datacomponents = apidata.map(data =>{
      return <PostList  title={data.title} onClick={()=>{setcurrentpost(data)}}/>
    })
    console.log(currentpost);
  return (
    <main className="container">
      <section className="border">
        <h1>Page Heading</h1>
      </section>
      <section className="d-flex row">
          <div className="border col-5">
          <h2>Post Lists(Plz click on any buttons)</h2>
             {datacomponents}
          </div>
          <div className="border col-5"><PostDetails id={currentpost.id} body={currentpost.body} /></div>
      </section>
    </main>
  );
}

export default App;
