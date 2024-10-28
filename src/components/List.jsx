import React from "react";
import { useNavigate } from "react-router-dom";

const List = () => {
  const list = {1:"khalidiya", 2:"madina", 3:"markaz", 4:"rahmaniya"}
  const navigate = useNavigate();

  const handleClick = (halqa_id) => {
    navigate(`/masjids/${halqa_id}`);
  };

  return (
    <div className="flex flex-col space-y-2 p-2 bg-gradient-to-r from-rose-100 to-teal-100 min-w-[375px] max-w-[430px] maxi:m-auto h-screen">
    <div className="text-3xl font-bold text-purple-400 bg-slate-300 rounded-lg px-2 py-1 justify-center items-center flex">Kothagudem</div>
      {Object.entries(list).map(([key,value]) => (
        <div
          key={key}
          className="text-white bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] px-3 from-blue-700 via-blue-800 to-gray-900 p-2 rounded-xl"
          onClick={() => handleClick(key)}
        >
          {value.toUpperCase()}
        </div>
      ))}
    </div>
  );
};

export default List;
