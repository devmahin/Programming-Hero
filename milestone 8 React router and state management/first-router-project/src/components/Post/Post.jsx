import { Link, Navigate, useNavigate, useParams } from "react-router-dom";

function Post({ postData }) {
  const { id, body, title } = postData;
   const navigate =  useNavigate()
   
    function hanelPostDetails(){
        navigate(`/post/${id}`)
    }

  return (
    <div className="text-center bg-red-300 p-10">
      <h1>{id}</h1>
      <h1>{body}</h1>
      <h1>{title}</h1>
      <Link to={`/post/${id}`}>
        <button className="bg-blue-500 p-3 rounded-lg text-2xl mt-5 ">
          Deteils
        </button>
      </Link>

      <button onClick={hanelPostDetails}>Post details</button>
    </div>
  );
}

export default Post;
