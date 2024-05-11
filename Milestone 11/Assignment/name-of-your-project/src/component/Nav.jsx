import { Link, NavLink } from "react-router-dom";

function Nav() {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink
               className={({ isActive }) =>
                isActive
                  ? "text-black font-semibold hover:text-black"
                  : "text-gray-400 hover:text-black"
              }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
               className={({ isActive }) =>
                isActive
                  ? "text-black font-semibold hover:text-black"
                  : "text-gray-400 hover:text-black"
              }
                to="/createassinment"
              >
                Create Assignment
              </NavLink>
            </li>
            <li>
              <NavLink
             className={({ isActive }) =>
              isActive
                ? "text-black font-semibold hover:text-black"
                : "text-gray-400 hover:text-black"
            }
                to="/allassignment"
              >
                All Assignment
              </NavLink>
            </li>

            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-black font-semibold hover:text-black"
                    : "text-gray-400 hover:text-black"
                }
                to="/mysubmitted"
              >
                Submitted
              </NavLink>
            </li>

            <li>
              <NavLink
               className={({ isActive }) =>
                isActive
                  ? "text-black font-semibold hover:text-black"
                  : "text-gray-400 hover:text-black"
              }
                to="/pending"
              >
                Pending
              </NavLink>
            </li>
          </ul>
        </div>
        <a className=" logo_font text-2xl border-b-black border-b-2">
          Freelance Frontier
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu-horizontal gap-x-6">
          <li>
            <NavLink
           className={({ isActive }) =>
            isActive
              ? "text-black font-semibold hover:text-black"
              : "text-gray-400 hover:text-black"
          }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
             className={({ isActive }) =>
              isActive
                ? "text-black font-semibold hover:text-black"
                : "text-gray-400 hover:text-black"
            }
              to="/createassinment"
            >
              Create Assignment
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-black font-semibold hover:text-black"
                  : "text-gray-400 hover:text-black"
              }
              to="/allassignment"
            >
              All Assignment
            </NavLink>
          </li>

          <li>
            <NavLink
             className={({ isActive }) =>
              isActive
                ? "text-black font-semibold hover:text-black"
                : "text-gray-400 hover:text-black"
            }
              to="/mysubmitted"
            >
              Submitted
            </NavLink>
          </li>

          <li>
            <NavLink
             className={({ isActive }) =>
              isActive
                ? "text-black font-semibold hover:text-black"
                : "text-gray-400 hover:text-black"
            }
              to="/pending"
            >
              Pending
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="ml-auto">
        <Link to="/login" className="ml-10 text-white prompt_regular  tracking-widest  bg-[#1A1B1F] hover:bg-transparent hover:border hover:text-black cursor-pointer py-1 rounded px-5">
          Login
        </Link>
      </div>
    </div>
  );
}

export default Nav;
