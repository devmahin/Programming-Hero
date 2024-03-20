import { useLoaderData, useNavigate, useParams } from "react-router-dom";

function PostDetails() {
  const data = useLoaderData();
  const back = useNavigate();
  const params = useParams()
  console.log(params);
  function goBack() {
    back(-1);
  }
  return (
    <div className="text-center bg-blue-600 py-20 space-y-3 text-2xl">
      <h1>{data.id}</h1>
      <h1>{data.userId}</h1>
      <h1>{data.title}</h1>
      <h1>{data.body}</h1>
      <button onClick={goBack} className="bg-red-500 p-3 rounded-lg">
        Go back
      </button>
    </div>
  );
}

export default PostDetails;
