import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      <div className="min-w-screen min-h-screen my-10 rounded-lg bg-gray-900 flex items-center justify-center px-5 py-5">
        <div
          className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden"
          style={{ maxWidth: "1000px" }}
        >
          <div className="md:flex w-full">
            <div className="hidden md:block w-1/2 bg-indigo-500 ">
              {/* SVG content goes here */}
              <img
                className="w-full h-full object-cover "
                src="https://cdn.dribbble.com/users/1172503/screenshots/4505740/media/d45f2014e49844aec6c56e5a7267948e.gif"
                alt=""
              />
            </div>

            <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
              <div className="text-center mb-10">
                <h1 className="font-bold text-3xl text-gray-900">Login</h1>
                <p>Enter your register info</p>
              </div>

              <div>
                <div className="mb-3">
                  <button className="flex flex-wrap justify-center w-full border border-gray-300 hover:border-gray-500 px-2 py-1.5 rounded-md">
                    <img
                      className="w-5 mr-2"
                      src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"
                      alt="Google logo"
                    />
                    Sign in with Google
                  </button>
                  <button className="flex flex-wrap justify-center w-full border border-gray-300 hover:border-gray-500 px-2 py-1.5 rounded-md mt-2">
                    <img
                      className="w-5 mr-2"
                      src="https://i.ibb.co/M14nZ1p/github.png"
                      alt="Google logo"
                    />
                    Sign in with GitHub
                  </button>

                  <button className="flex flex-wrap justify-center w-full border border-gray-300 hover:border-gray-500 px-2 py-1.5 rounded-md mt-2">
                    <img
                      className="w-5 mr-2"
                      src="https://i.ibb.co/ncLNtrr/facebook.png"
                    />
                    Sign in with Facebook
                  </button>
                </div>
              </div>

              <div>
                <div className="flex -mx-3">
                  <div className="w-full  px-3 mb-5">
                    <label htmlFor="" className="text-xs font-semibold px-1">
                      Email
                    </label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-email-outline text-gray-400 text-lg"></i>
                      </div>
                      <input
                        type="email"
                        name="email"
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="johnsmith@example.com"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-12">
                    <label htmlFor="" className="text-xs font-semibold px-1">
                      Password
                    </label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                      </div>
                      <input
                        type="password"
                        name="password"
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="************"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-5">
                    <button className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">
                      LOGIN
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex items-center">
                <hr
                  style={{
                    borderTop: "1px solid #000",
                    width: "100%",
                    marginRight: "10px",
                  }}
                />
                <p>OR</p>
                <hr
                  style={{
                    borderTop: "1px solid #000",
                    width: "100%",
                    marginLeft: "10px",
                  }}
                />
              </div>
                <p className="text-center font-semibold">Don't have an account <Link className="text-blue-600 underline" to="/register">Register</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
