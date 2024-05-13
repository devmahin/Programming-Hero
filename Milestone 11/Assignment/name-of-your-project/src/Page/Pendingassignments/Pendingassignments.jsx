import axios from "axios";
import { useEffect, useState } from "react";
import Authfun from "../../provider/Authfun";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Pendingassignments() {
  
  const { user } = Authfun();
  const navigate = useNavigate()
  const [detailsData, setDetailsData] = useState([]);
  const [markassignment, setMarkAssignment] = useState({});
  const getDataFun = async () => {
    const { data } = await axios(
      `http://localhost:3000/pendingsubmitted/${user?.email}`
    );
    setDetailsData(data);
  };

  useEffect(() => {
    getDataFun();
  }, [user?.email]);
  // const { title, thumbnail, marks, level, description, bayer } =
  //   detailsData || {};
  async function sendmark(id) {
    const { data } = await axios(`http://localhost:3000/markassignment/${id}`);
    console.log(data, id);
    setMarkAssignment(data);
  }

  const handelStatus = async (e, id) => {
    e.preventDefault();
    const marknum = e.target.marknum.value;
    const textarea = e.target.textarea.value;
    const marksResult = parseFloat(marknum);

    const updateAssignment = {
      status: "completed",
      obtainedmarks: marksResult,
      textarea,
    };

    try {
      const { data } = await axios.patch(
        `http://localhost:3000/assignmentresult/${id}`,
        updateAssignment
      );
      console.log(data);
      if(data.modifiedCount){
        toast.success("Success result submit")
        navigate("/mysubmitted")
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="my-10 my-10 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 pr-10 lg:px-8">
      <div className="align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-8 pt-3 rounded-bl-lg rounded-br-lg">
        <div className="flex justify-center">
          <span className="text-3xl text-center mb-7 border-b-black  font-semibold uppercase border-b-2 pb-1">
            Pending assignments
          </span>
        </div>
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                Title
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                Marks
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                Examinee
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                Give mark
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {detailsData?.map((data) => (
              <tr key={data._id}>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                  <div className="text-sm leading-5 text-blue-900">
                    {data?.title}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                  {data?.marks}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                  {data?.name}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">
                  <div>
                    {/* You can open the modal using document.getElementById('ID').showModal() method */}
                    <div className="mt-5">
                      <button
                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        onClick={() => {
                          document.getElementById("my_modal_3").showModal();
                          sendmark(data?._id);
                        }}
                      >
                        {`${data?.status === "pending" ? "Mark" : "Replace"}`}
                      </button>
                      <dialog id="my_modal_3" className="modal">
                        <div className="modal-box">
                          <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                              ✕
                            </button>
                          </form>
                          <form
                            onSubmit={(e) =>
                              handelStatus(e, markassignment?._id)
                            }
                            className="max-w-sm mx-auto"
                          >
                            <div className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                              <div className="flex">
                                <p>
                                  Assignment Link ={" "}
                                  <a
                                    href={markassignment.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    {markassignment.link}
                                  </a>{" "}
                                </p>
                              </div>
                            </div>
                            <div className="my-5">
                              <label
                                htmlFor="link"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                              >
                                Give assignment mark
                              </label>
                              <input
                                type="number"
                                id="link"
                                name="marknum"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="assignment mark"
                                required
                              />
                            </div>
                            <div className="mb-5">
                              <label
                                htmlFor="link"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                              >
                                Send Feedback
                              </label>
                              <textarea
                                id="textarea"
                                name="textarea"
                                className="bg-gray-50 max-h-72 min-h-36 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 h-24 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required
                              />
                            </div>

                            <button
                              type="submit"
                              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                              Submit
                            </button>
                          </form>
                        </div>
                      </dialog>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot></tfoot>
        </table>
        <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
          <div className="flex flex-1  justify-between sm:hidden">
            <a
              href="#"
              className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Previous
            </a>
            <a
              href="#"
              className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Next
            </a>
          </div>
          <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
            <div className="">
              <p className="flex gap-x-1 text-sm text-gray-700">
                Showing
                <span className="font-medium">1</span>
                to
                <span className="font-medium">10</span>
                of
                <span className="font-medium">97</span>
                results
              </p>
            </div>
            <div>
              <nav
                className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                aria-label="Pagination"
              >
                <a
                  href="#"
                  className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  <span className="sr-only">Previous</span>
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  aria-current="page"
                  className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  1
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  2
                </a>
                <a
                  href="#"
                  className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                >
                  3
                </a>

                <a
                  href="#"
                  className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                >
                  8
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  9
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  <span className="sr-only">Next</span>
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pendingassignments;
