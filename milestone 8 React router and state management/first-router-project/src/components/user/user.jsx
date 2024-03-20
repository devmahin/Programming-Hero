import { Link } from "react-router-dom";
function User({user}) {
    const {username,name,email,id} = user;
    return (
        <div className="border-2 container mx-auto p-10">
            <h1>UserName : {username}</h1>
            <h1>Name : {name}</h1>
            <h1>Email : {email}</h1>
            <Link className="bg-blue-600 p-3 rounded-lg" to={`/user/${id}`}>Details</Link>
        </div>
    );
}

export default User;