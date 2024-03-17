import React, { useState } from "react";
import axios from "axios";
function Weather() {
  const [location, setLocation] = useState("surat");
  const [data, setdata] = useState({});
  const [show, setShow] = useState(false);

  const url = `http://api.weatherapi.com/v1/current.json?key=39565c3a9b35444fa79161426240203&q=${location}&aqi=yes`;

  const DataHandler = (e) => {
    axios.get(url).then((res) => {
      console.log(res.data);
      setdata(res.data);
    });
    setLocation("");
    setShow(true);
  };

  return (
    <div className="w-full pt-10 h-screen bg-center flex justify-center content-center overflow-hidden bg-no-repeat  bg-cover bg-[url(src/assets/bg.avif)]">
      <div className="sm:w-full md:w-[40%] m-auto mx-5 h-[450px] border-2 rounded-2xl p-5 ">
        <div className=" flex-wrap justify-center flex gap-2 content-center">
          <input
            type="text"
            placeholder="Enter Your City Name"
            name="Name"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="px-2 py-3 border-b-2 outline-none text-white bg-transparent text-xl rounded-s-lg sm:w-full md:w-[40%]"
          />
          <button
            className="text-white border-b-2 text-xl bg-transparent backdrop-blur-[0.2rem] py-2 px-5 rounded-e-lg"
            onClick={DataHandler}
          >
            Check
          </button>
        </div>
        {show === true ? (
          <div className=" relative">
            <div className="text-2xl mt-8 text-white font-extrabold tracking-wide flex flex-wrap justify-start">
              <p className="w-full">
                {data.location ? data.location.name : ""}
              </p>
              <h2 className="text-4xl mt-2">
                {data.current ? data.current.temp_c : ""} °C
              </h2>
            </div>
            <div className=" absolute top-10 end-2 text-3xl text-white font-bold">{data.current ? data.current.condition.text : ""}</div>
            <div className="flex flex-wrap text-white my-10">
              <h3 className="text-xl border-y-2 w-full py-3 px-2 backdrop-blur-[0.2rem] tracking-wide  italic">
                <p>
                  wind_kph :{" "}
                  <span>{data.current ? data.current.wind_kph : ""}</span>
                </p>
              </h3>
              <h3 className="text-xl border-b-2 w-full py-3 px-2 backdrop-blur-[0.2rem] tracking-wide  italic">
                <p>
                  wind_mph :{" "}
                  <span>{data.current ? data.current.wind_mph : ""}</span>
                </p>
              </h3>
              <h3 className="text-xl border-b-2 w-full py-3 px-2 backdrop-blur-[0.2rem] tracking-wide  italic">
                <p>Huminity : {data.current ? data.current.humidity : ""}</p>
              </h3>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Weather;
