import { Outlet, useNavigation } from "react-router-dom";
import Footers from "../footers/Footers";
import Nav from "../nav/Nav";

function Home(props) {
   const navLoading =  useNavigation()
   console.log(navLoading)
    return (
        <div>
            <Nav></Nav>
            {
                navLoading.state === "loading"?
                <p> Loading.... </p> :  <Outlet></Outlet>
            }
            
           <Footers></Footers>
        </div>
    );
}

export default Home;