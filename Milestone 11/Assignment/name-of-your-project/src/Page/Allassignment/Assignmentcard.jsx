import { BiSolidEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Authfun from "../../provider/Authfun";

function Assignmentcard({ data }) {
  const {_id, description, level, marks, thumbnail, title, bayer } = data || {};
  const { user } = Authfun();
  console.log(user?.email);
  console.log(bayer?.bayerEmail);
  return (
    <div>
      <div className=" bg-white border shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            className="rounded-t-lg w-full h-full object-cover"
            src={thumbnail}
            alt=""
          />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-normal tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
          </a>
          <div className="flex justify-between my-5 prompt_regular ">
            <h3 className="text-xl">
              Marks : <span>{marks}</span>
            </h3>
            <h3 className="text-xl">
              Level : <span>{level}</span>
            </h3>
          </div>
          <div className="flex justify-between">
            <Link
              to={`/assignmentdetails/${_id}`}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              View Details
            </Link>
            <div className="flex text-3xl gap-x-5">
              <BiSolidEdit className="hover:text-green-600 cursor-pointer" />
              <MdDelete className="hover:text-red-600 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Assignmentcard;
