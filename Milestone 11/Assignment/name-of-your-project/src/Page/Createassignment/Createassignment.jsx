import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Createassignment() {
  const [startDate, setStartDate] = useState(new Date());

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const thumbnail = e.target.thumbnail.value;
    const email = e.target.email.value;
    const marks = e.target.marks.value;
    const difficulty = e.target.difficulty.value;
    const description = e.target.description.value;

    console.log({ title, thumbnail, email, marks, difficulty, description });
  };

  return (
    <div>
      <div className="mx-auto mt-8">
        <div className="w-full p-8 my-4 md:px-12 lg:w-full border-2 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] lg:pl-20 lg:pr-40 mr-auto rounded-2xl ">
          <div className="flex">
            <h1 className="font-bold uppercase text-xl md:text-3xl lg:text-5xl">
              Create Assignment
            </h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                name="title" // Add name attribute
                placeholder="Title"
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                name="thumbnail" // Add name attribute
                placeholder="Thumbnail Image URL*"
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="email"
                name="email" // Add name attribute
                placeholder="Email*"
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                name="marks" // Add name attribute
                placeholder="Marks*"
              />
              <div className="w-full">
                {/* DatePicker component */}

                <DatePicker
                  className="bg-gray-100  text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
              </div>
              <div>
                <select
                  id="countries"
                  name="difficulty" // Add name attribute
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option value="">Choose Assignment Difficulty Level</option>
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
                </select>
              </div>
            </div>
            <div className="my-4">
              <textarea 
                name="description" // Add name attribute
                placeholder="Description*"
                className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              ></textarea>
            </div>
            <div className="my-2 w-1/2 lg:w-1/4">
              <button
                type="submit" // Add type attribute
                className="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Createassignment;
