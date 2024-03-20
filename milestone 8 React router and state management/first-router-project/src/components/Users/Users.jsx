import { useLoaderData } from "react-router-dom";
import User from "../user/user";

function Users(props) {
    const loadData = useLoaderData()
    return (
        <div className="text-center text-2xl font-bold uppercase ">
             <h1> hello i am users</h1>
            <h1>users length : {loadData.length}</h1>
            <div className="grid grid-cols-3 gap-10">
            {
                loadData.map(data => <User key={data.id} user={data}></User>)
            }
            </div>
        </div>
    );
}

export default Users;