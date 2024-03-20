import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";


function Posts() {
  const posts = useLoaderData();
  return <div className="grid grid-cols-4 gap-10">
    <h1 className="text-2xl text-center">Length : {posts.length}</h1>
    {posts.map(val =>  <Post key={val.id} postData= {val}></Post>)}
  </div>;
}

export default Posts;
