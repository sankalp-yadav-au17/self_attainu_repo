import logo from './logo.svg';
import './App.css';
import { useEffect,useState } from "react";
import PostDetails from "./Components/PostDetails";
import { PostCard } from "./Components/post_listing";



function App() {

  const [posts, setPosts] = useState([])
  const [currentPost, setCurrentPost] = useState({title:"",body:""})

  useEffect(async() =>{
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await response.json()

    console.log(data)

    setPosts(data)
  },[])

  const postCards = posts.map((p)=>{
    return <PostCard title={p.title} onClick={()=>{setCurrentPost(p)}}/>
  })


  return (
    <div className="App">
      <div style={{display:"flex", flexWrap:"wrap"}}>
           <div style={{width:200}}>
           {postCards}
           </div>
           <div style={{width:200}}>
              <PostDetails title={currentPost.title} body={currentPost.body}/>
           </div>
         </div>
    </div>
  );
}

export default App;
