import { useLoaderData, useRouteLoaderData } from "react-router-dom";

function Details() {
    const details  = useLoaderData()
    const {email,username,name,website} = details;

    return (
        <div className="bg-red-400 p-20 rounded-lg">
           <h1>Name : {name}</h1>
            <h2>Email : {email}</h2>
            <h2>Users : {username}</h2>
            <h2>{website}</h2>
        </div>
    );
}

export default Details;