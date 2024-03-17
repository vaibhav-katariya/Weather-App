import React from "react";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="w-full h-screen bg-[#C7C8CC] py-32 px-14 flex gap-24 flex-wrap">
      <img
        src="https://cdn.dribbble.com/users/45269/screenshots/1870451/w_t-3.jpg?resize=800x600&vertical=center"
        className=" w-1/2 rounded-xl"
        alt=""
      />
      <div className=" h-full max-w-lg items-center justify-center">
        <h1 className="text-4xl mt-12 text-slate-600 font-bold italic leading-normal">
          Weather Application Using React JS
        </h1>
        <Link
          type="button"
          to="/weather"
          className="mt-8 bg-slate-600 py-2 px-3 text-white rounded-md font-semibold text-xl hover:bg-slate-500 "
        >
          Check Weather
        </Link>
      </div>
    </div>
  );
}

export default Home;
