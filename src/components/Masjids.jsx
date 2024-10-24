import React from "react";
import { useNavigate } from "react-router-dom";

const Masjids = () => {
  const list = ["KHALIDIYA(MADARSA)", "KOUSAR", "NIMRA", "SAHABA"];
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/names");
  };

  return (
    <div className="flex flex-col space-y-2 p-2 bg-gradient-to-r from-rose-100 to-teal-100 min-w-[375px] max-w-[430px] maxi:m-auto h-screen">
      {list.map((name) => (
        <div
          className="text-white bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] px-3 from-blue-700 via-blue-800 to-gray-900 p-2 rounded-xl"
          onClick={() => handleClick()}
        >
          {name}
        </div>
      ))}
    </div>
  );
};

export default Masjids