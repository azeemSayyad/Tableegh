import React, { useState } from "react";
import { useParams } from "react-router-dom";

const Names = () => {
  let { halqa_id, masjid_id } = useParams();
  halqa_id = halqa_id - 1;
  // const map = {
  //   1: "Khalidiya (Madarsa)",
  //   2: "Kousar",
  //   3: "Munawwarah",
  //   4: "Sahaba",
  //   5: "Baitullah",
  //   6: "Nimrah",
  //   7: "Aqsa",
  //   8: "Saliheen",
  //   9: "Azizia",
  // };
  // const lists = {
  //   1: {
  //     1: [
  //       "Akram bhai",
  //       "Yakub bhai (student)",
  //       "Mahebub bhai (student)",
  //       "Abdul Raheem bhai",
  //       "Yakub bhai (NRL)",
  //       "Yakub bhai (Mouzan)",
  //       "Qadar bhai (Tiles)",
  //       "Sabir bhai",
  //       "Abdullah bhai",
  //     ],
  //     2: ["Azeem", "Afreed", "Firdous", "Imran bhai"],
  //     3: ["Afroz", "Akbar bhai"],
  //   },
  //   2: {
  //     1: ["Sadhikh bhai (sudan)", "Basha bhai"],
  //     2: ["Shafi bhai"],
  //     3: ["Imran khan bhai"],
  //   },
  //   3: {
  //     1: ["Khaleel bhai"],
  //     2: ["Aamir bhai", "Abdul Raheem", "Affan", "Muzaffar bhai"],
  //     3: ["..."],
  //   },
  // };

  const data = {
    name: "kothagudem",
    halqa: [
      // Halqa Khalidiya
      {
        id: 1,
        halqa: "Khalidiya",
        masjid: [
          // Khalidiya Madarsa 
          {
            id: 1,
            masjid: "Khalidiya (Madarsa)",
            members: {
              1: [
                "Sabir bhai",
                "Akram bhai",
                "Anwar bhai (NRL)",
                "Yakub bhai (student)",
                "Mahebub bhai (student)",
                "Abdul Raheem bhai",
                "Abdul Qadeer bhai (Tiles)",
                "Abdullah bhai",
                "Hafiz Ismail Sahab",
                "Rehan bhai",
              ],
              2: [
                "Ibrahim bhai",
                "Khaja bhai (Marble)",
                "Imran bhai (Tarkari)",
                "Afzal bhai (Chote)",
                "Afzan bhai (Bade)",
                "Anwar bhai (Carpenter)",
                "Abid bhai",
                "Ramzan sahab (Gudumiya)",
                "Mahboob bhai (Cycle)",
                "Yousuf bhai bhaijan/O Akram bhai",
                "Muzammil bhai",
                "Dastagir bhai",
                "Mohiddin bhai (Auto)",
                "Asif bhai S/O Asghar bhai",
                "Gouse bhai AC",
                "Amjad bhai (chicken pakodi)",
                "Azeem ",
                "Anwar bhai (Chicken)",
                "Saleem bhai (Gold)",
                "Hasan pasha (Bedsheets)",
                "Rizwan",
                "Gouse bhai (Auto)",
                "Munwwar bhai",
                "Chand bhai",
                "Imran bhai (Tiles)",
                "Sadhik bhai (Carpenter)",
                "Afreed",
                "Firdous",
                "Saad",
                "Suhaib",
              ],
              3: ["Afroz", "Akbar bhai","Ashraf","Naseer bhai"],
            },
          },
          // Kousar
          {
            id: 2,
            masjid: "kousar",
            members: {
              1: [
                "Shafi bhai",
                "Mahboob Ali bhai",
                "Zakir bhar",
                "R Shareef bhai (S Nagar)",
              ],
              2: [
                "Jani sahab",
                "Samee bhai",
                "Saif bhai",
                "Mujahid bhai",
                "Moin bhai",
                "Yakub bhai (Welder)",
                "A.Rasheed bhai",
                "Qamar sahab (Dost Beedi)",
                "Aashiq Ali sahab",
                "Abrar bhai",
              ],
              3: [
                "Yakub bhai Bank",
                "Irfan",
                "A.Rahman bhai",
                "Zaheer bhai",
                "Zahid bhai S/O Javed bhai",
                "Salman S/O Babu taylor",
                "Suhail bhai",
                "Zubair bhai",
                "Zahoor bhai",
                "Yousuf sahab (Janata)",
                "Moulana Raees Sahab",
                "Asad Ali bhai",
                "Taj S/O Moin bhai",
                "Qasim bhai (Hotel)",
                "Daood bhai",
                "Ibrahim bhai",
              ],
            },
          },
          // Munawwara
          {
            id: 3,
            masjid: "Munawwara",
            members: {
              1: ["Farooq bhai Auto MNGR"],
              2: [
                "Khaleel bhai",
                "Mukhtar bhai",
                "Muzaffar bhai",
                "Akhtar bhai",
                "Mansoor bhai",
                "Yakub bhai (charla)",
                "Jameel bhai (welder)",
                "Mohsin bhai ",
                "Mubeen bhai",
                "Khaleel sahab (RMP)",
                "Affan bhai",
                "A Raheem bhai",
              ],
              3: ["Yet to be updated"],
            },
          },
          // Sahaba
          {
            id: 4,
            masjid: "Sahaba",
            members: {
              1: ["Yakub bhai (Mouzan)","Yakub bhai (NRL)","Ateeq","Altaf bhai"],
              2: ["Yet to be Updated"],
              3: ["Nayeem bhai Student"],
            },
          },
          // Baitullah
          {
            id: 5,
            masjid: "Baitullah",
            members: {
              1: [
                "sadhikh bhai (Sudan)",
                "Basha bhai",
                "Shareef Sahab",
                "Naaseer bhai Zomato",
                "Shareef bhai (Welder)",
                "Imran bhai S/O Yakub bhai (CHD)"
              ],
              2: ["Ahmad bhai (Adaab hotel)","A.Aleem bhai (Shawarma)"],
              3: ["Yet to be Updated"],
            },
          },
          // Nimrah
          {
            id: 6,
            masjid: "Nimrah",
            members: {
              1: ["Imran bhai (Chisti)","Azahar bhai (Chicken)","A.Kareem bhai (Tailor)","Zafrullah baig Sahab","Yakub bhai (Carpenter)"],
              2: [
                "Chand Pasha bhai (Mason)",
                "A Raheem bhai (Auto)",
                "Qasim bhai (Marble)",
                "A Rasheed bhai (Chicken)",
                "A Samad bhai (Bayazeed sahab)",
                "Maqbool bhai",
                "Ashfaaq bhai",
                "Haneef bhai(Bommanpally)",
                "Maqdoom sahab",
                "Osman bai (Teacher)",
                "Khaleel bhai (Auto)",
                "Usman bhai (Soda)",
              ],
              3: ["Hamed bhai"],
            },
          },
          // Aqsa
          {
            id: 7,
            masjid: "Aqsa",
            members: {
              1: ["Ashfaq bhai KMM TRF","Azhar bhai (Foot Wear)","Javed bhai (Suryapet)"],
              2: ["Yet to be Updated"],
              3: ["Yet to be Updated"],
            },
          },
          // Saliheen 
          {
            id: 8,
            masjid: "saliheen",
            members: {
              1: ["Yet to be Updated"],
              2: ["sabir bhai Kirana","Akbar bhai"],
              3: ["Yet to be Updated"],
            },
          },
          // Azizia
          {
            id: 9,
            masjid: "Azizia",
            members: {
              1: ["Khaleel bhai (Tailor)"],
              2: [
                "Mukhatar sahab",
                "Yousuf bh S/O Hasan bhai",
              ],
              3: ["Yet to be Updated"],
            },
          },
        ],
      },
      // Halqa -- Madina 
      {
        id: 2,
        halqa: "Madina",
        masjid: [
          {
            id: 1,
            masjid: "Rahmat",
            members: {
              1: ["Abdul Wahed bhai"],
              2: ["Yet to be Updated"],
              3: ["Akram","Mubasshir"],
            },
          },
        ],
      },
      // Halqa Markaz
      {
        id: 3,
        halqa: "Markaz",
        masjid: [
          {
            id: 1,
            masjid: "Jameh Masjid (Badi Masjid)",
            members: {
              1: ["Zafar bhai","Akram bhai (Royal)"],
              2: ["Altaf bhai","Akhtar bhai"],
              3: ["Aaftaab"],
            },
          },
        ],
      },
      // Halqa Rahmaniya
      {
        id: 4,
        halqa: "Rahmaniya",
        masjid: [
          {
            id: 1,
            masjid: "Mohammadiya",
            members: {
              1: [
                "Ayyub bhai",
                "Ismail Shareef sahab",
                "yakub bhai (Baba)",
                "yakub bhai (Tarkari)",
                "Yahiya bhai",
                "Riaz bhai",
              ],
              2: ["Yet to be Updated"],
              3: ["Yet to be Updated"],
            },
          },
        ],
      },
    ],
  };


  const [selectedList, setSelectedList] = useState(1);

  return (
    <div className="flex flex-col space-y-1 p-2 bg-gradient-to-r from-rose-100 to-teal-100 min-w-[375px] max-w-[430px] maxi:m-auto h-screen ">
      <div
        className={`flex items-center justify-center p-2 bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-blue-700 via-blue-800 to-gray-900 text-white rounded-xl`}
      >
        {data.halqa[halqa_id].masjid[masjid_id].masjid}
      </div>
      <div className="flex  space-x-[2px]">
        {/* 4 Months */}
        <div
          onClick={() => setSelectedList(1)}
          className={`flex-grow flex items-center rounded-lg flex-col space-y-[2px] bg-gradient-to-r from-slate-900 to-slate-700 text-white px-2 ${
            selectedList === 1
              ? "bg-gradient-to-r from-blue-500 to-slate-700"
              : ""
          }`}
        >
          <div>4 Months</div>
          <div>{data.halqa[halqa_id].masjid[masjid_id].members[1].length}</div>
        </div>
        {/* 40 Days */}
        <div
          onClick={() => setSelectedList(2)}
          className={`flex-grow flex items-center rounded-lg flex-col space-y-[2px] bg-gradient-to-r from-slate-900 to-slate-700 text-white px-2 ${
            selectedList === 2
              ? "bg-gradient-to-r from-blue-500 to-slate-700"
              : ""
          }`}
        >
          <div>40 Days</div>
          <div>{data.halqa[halqa_id].masjid[masjid_id].members[2].length}</div>
        </div>
        {/* 3 Days */}
        <div
          onClick={() => setSelectedList(3)}
          className={`flex-grow flex items-center rounded-lg flex-col space-y-[2px] bg-gradient-to-r from-slate-900 to-slate-700 text-white px-2 ${
            selectedList === 3
              ? "bg-gradient-to-r from-blue-500 to-slate-700"
              : ""
          }`}
        >
          <div>3 Days</div>
          <div>{data.halqa[halqa_id].masjid[masjid_id].members[3].length}</div>
        </div>
      </div>

      <div className="flex flex-col space-y-1 bg-inherit">
        {data.halqa[halqa_id].masjid[masjid_id].members[selectedList].map(
          (name) => (
            <div className="text-black bg-gradient-to-br from-gray-500 to-gray-300   p-2 rounded-lg ">
              {name}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Names;
