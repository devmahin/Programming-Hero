import axios from "axios";
import { useEffect, useState } from "react";
import Feturescard from "./Feturescard";

function Feature() {
  const [alldata, setAllData] = useState([]);
  const getalldata = async () => {
    const { data } = await axios(
      `http://localhost:3000/allproject`
    );
    setAllData(data);
    console.log(data);
  };

  useEffect(() => {
    getalldata();
  }, []);

  return (
    <section className="py-12  rounded-xl text-black sm:py-12 lg:py-16">
      <div className=" mx-auto">
        <div className="max-w-xl mx-auto text-center xl:max-w-2xl">
          <h2 className="text-3xl font-bold  leading-tight  sm:text-4xl xl:text-5xl mb-6">
            Features
          </h2>
          <p className="mb-4">
            We are creating a tool that helps you be more productive and
            efficient when building websites and webapps
          </p>
        </div>

        <div className="grid gap-10  grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {alldata.slice(0,5).map((data) => (
          <Feturescard
            key={data._id}
            getalldata={getalldata}
            data={data}
          ></Feturescard>
        ))}
      </div>
      </div>
    </section>
  );
}

export default Feature;
