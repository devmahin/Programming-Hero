import { Link, useRouteError } from "react-router-dom";

function Errorpage() {

    const error = useRouteError();
    console.log()
    return (
        <div className="text-center space-y-4">
            <h1 className="text-center mt-52 text-6xl">OPPS!!!!</h1>
            <h2 className="text-3xl">{error.statusText  || error.error.message}</h2>
            <Link to="/"><button  className="bg-red-500 p-3 rounded-lg">Home</button></Link>
        </div>
    );
}

export default Errorpage;