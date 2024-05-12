import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Assignmentdetails() {
  const { id } = useParams();
  const [detailsData, setDetailsData] = useState({});
  const getDataFun = async () => {
    const { data } = await axios(
      `http://localhost:3000/assignmentdetails/${id}`
    );
    setDetailsData(data);
  };
  useEffect(() => {
    getDataFun();
  }, [id]);

  const {title} = detailsData()

  return (
    <div>
      <div className="dark:bg-gray-100 dark:text-gray-800">
        <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-50">
          <div className="flex items-center justify-between">
            <span className="text-sm dark:text-gray-600">Jun 1, 2020</span>
            <a
              rel="noopener noreferrer"
              href="#"
              className="px-2 py-1 font-bold rounded dark:bg-violet-600 dark:text-gray-50"
            >
              Javascript
            </a>
          </div>
          <div className="mt-3">
            <a
              rel="noopener noreferrer"
              href="#"
              className="text-2xl font-bold hover:underline"
            >
              Nos creasse pendere crescit angelos etc
            </a>
            <p className="mt-2">
              Tamquam ita veritas res equidem. Ea in ad expertus paulatim
              poterunt. Imo volo aspi novi tur. Ferre hic neque vulgo hae athei
              spero. Tantumdem naturales excaecant notaverim etc cau perfacile
              occurrere. Loco visa to du huic at in dixi aër.
            </p>
          </div>
          <div className="mt-5">
            <button
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={() => document.getElementById("my_modal_3").showModal()}
            >
              Take assignment
            </button>
            <dialog id="my_modal_3" className="modal">
              <div className="modal-box">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>
                <form className="max-w-sm mx-auto">
                  <div className="mb-5">
                    <label
                      htmlFor="link"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your assignment link
                    </label>
                    <input
                      type="text"
                      id="link"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="pdf/live link"
                      required
                    />
                  </div>
                  <div className="mb-5">
                    <label
                      htmlFor="link"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Assignment details
                    </label>
                    <textarea
                      id="textarea"
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
      </div>
    </div>
  );
}

export default Assignmentdetails;
