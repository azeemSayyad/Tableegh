import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const Masjids = () => {
  const { halqa_id } = useParams();
  const map = { 1: "khalidiya", 2: "madina", 3: "markaz", 4: "rahmaniya" };

  const list = {
    1: [
      "khalidiya(madarsa)",
      "kousar",
      "munawwara",
      "sahaba",
      "baitullah",
      "nimra",
      "Aqsa",
      "saliheen",
      "azizia",
    ],
    2: ["Rahmat"],
    3: ["Jameh Masjid (Badi masjid)"],
    4: ["Mohammadiya"],
  };

  const navigate = useNavigate();

  const handleClick = (masjid_id) => {
    const ids = {halqa_id:halqa_id,masjid_id:masjid_id};
    navigate(`/names/${ids.halqa_id}/${ids.masjid_id}`);
  };

  return (
    <div className="flex flex-col space-y-2 p-2 bg-gradient-to-r from-rose-100 to-teal-100 min-w-[375px] max-w-[430px] maxi:m-auto h-screen">
      <div className="text-3xl font-bold text-purple-400 bg-slate-300 rounded-lg px-2 py-1 justify-center items-center flex">
        HALQA - {map[halqa_id]}
      </div>
      {list[halqa_id].map((masjid, id) => (
        <div
          key={id}
          className="text-white bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] px-3 from-blue-700 via-blue-800 to-gray-900 p-2 rounded-xl"
          onClick={() => handleClick(id)}
        >
          {masjid.toUpperCase()}
        </div>
      ))}
    </div>
  );
};

export default Masjids;
