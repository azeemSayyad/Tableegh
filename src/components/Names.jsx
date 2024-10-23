import React, { useState } from "react";

const Names = () => {
  const names = [
    "Akram",
    "Akram",
    "Akram",
    "Akram",
    "Akram",
    "Akram",
    "Akram",
    "Akram",
    "Akram",
    "Akram",
  ];

  const lists = {
    1: [
      "Akram bhai",
      "Yakub bhai (student)",
      "Mahebub bhai (student)",
      "Abdul Raheem bhai",
    ],
    2: ["Azeem", "Afreed", "Firdous", "Imran bhai"],
    3: ["Afroz", "Akbar bhai"],
  };

  const [selectedList, setSelectedList] = useState(1);

  return (
    <div className="flex flex-col space-y-1 p-2 bg-gradient-to-r from-rose-100 to-teal-100 min-w-[375px] max-w-[430px] maxi:m-auto h-screen ">
      <div className="flex items-center justify-center p-2 bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-blue-700 via-blue-800 to-gray-900 text-white rounded-xl">
        KHALIDIYA
      </div>
      <div className="flex  space-x-[2px]">
        {/* 4 Months */}
        <div
          onClick={() => setSelectedList(1)}
          className="flex-grow flex items-center rounded-lg flex-col space-y-[2px] bg-gradient-to-r from-slate-900 to-slate-700 text-white px-2"
        >
          <div>4 Months</div>
          <div>{lists[1].length}</div>
        </div>
        {/* 40 Days */}
        <div
          onClick={() => setSelectedList(2)}
          className="flex-grow flex items-center rounded-lg flex-col space-y-[3px] bg-gradient-to-r from-slate-900 to-slate-700 text-white px-2"
        >
          <div>40 Days</div>
          <div>{lists[2].length}</div>
        </div>
        {/* 3 Days */}
        <div
          onClick={() => setSelectedList(3)}
          className="flex-grow flex items-center rounded-lg flex-col space-y-[3px] bg-gradient-to-r from-slate-900 to-slate-700 text-white px-2"
        >
          <div>3 Days</div>
          <div>{lists[3].length}</div>
        </div>
      </div>

      <div className="flex flex-col space-y-1 bg-inherit">
        {lists[selectedList].map((name) => (
          <div className="text-black bg-gradient-to-br from-gray-500 to-gray-300   p-2 rounded-lg ">{name}</div>
        ))}
      </div>
    </div>
  );
};

export default Names;
