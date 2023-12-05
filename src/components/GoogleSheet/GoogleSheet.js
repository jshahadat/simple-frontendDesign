import React from "react";

import Home from "../../assets/home.png";

const GoogleSheet = () => {
  const handleButtonClick = () => {
    window.location.href = "/";
  };

  return (
    <div>
      <div className="flex justify-between items-center lg:ml-10 lg:mr-10 mt-4 lg:mb-16 mb-8">
        <div>
          <button
            onClick={handleButtonClick}
            className="bg-[#2A468F] lg:w-[323px] lg:h-[74px] text-white text-2xl rounded-[10px] lg:text-[30px] text-[16px] font-medium flex justify-center items-center lg:px-0 px-2 lg:py-0 py-[2px]"
          >
            <span>
              <img
                className="lg:h-[30px] h-[18px] lg:w-[30px] w-[18px] lg:mr-5 mr-1 "
                src={Home}
                alt=""
              />
            </span>{" "}
            <span> Home Screen</span>
          </button>
        </div>
        <div>
          <h1 className="text-black lg:text-[55px] text-[18px] font-semibold">
            Google Sheet
          </h1>
        </div>
        <div>
          <button className="text-white lg:w-[219px] w-[60px] lg:h-[74px] h-[36px]  bg-[#8F2A2A] rounded-[10px] lg:text-[30px] font-medium ">
            Discard
          </button>
          <button className="text-white lg:w-[219px]  w-[60px] lg:h-[74px] h-[36px] bg-[#2C8F2A] rounded-[10px] lg:text-[30px] font-medium lg:ml-8 ml-1">
            Save
          </button>
        </div>
      </div>

      <div className="lg:mr-16 lg:ml-16 mb-16">
        <div className="overflow-x-auto">
          <table className="min-w-full borde">
            <thead className=" text-black">
              <tr>
                <th className="py-2 px-4 border ">ID</th>
                <th className="py-2 px-4 border ">Name</th>
                <th className="py-2 px-4 border">Type</th>
                <th className="py-2 px-4 border">sku</th>
                <th className="py-2 px-4 border">Description</th>
                <th className="py-2 px-4 border">Weight</th>
                <th className="py-2 px-4 border">Width</th>
                <th className="py-2 px-4 border">Depth</th>
                <th className="py-2 px-4 border">Price</th>
                <th className="py-2 px-4 border">
                  Cost <sub>(p)</sub>{" "}
                </th>
                <th className="py-2 px-4 border">
                  {" "}
                  Reatil <sub>(p)</sub>
                </th>
                <th className="py-2 px-4 border">
                  {" "}
                  Sale <sub>(p)</sub>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border lg:h-10"></td>
                <td className="py-2 px-4 border "></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
              </tr>
              <tr>
                <td className="py-2 px-4 border lg:h-10"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
              </tr>
              <tr>
                <td className="py-2 px-4 border lg:h-10"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
              </tr>
              <tr>
                <td className="py-2 px-4 border lg:h-10"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
              </tr>
              <tr>
                <td className="py-2 px-4 border lg:h-10"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
              </tr>
              <tr>
                <td className="py-2 px-4 border lg:h-10"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
              </tr>
              <tr>
                <td className="py-2 px-4 border lg:h-10"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
              </tr>
              <tr>
                <td className="py-2 px-4 border lg:h-10"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
              </tr>
              <tr>
                <td className="py-2 px-4 border lg:h-10"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
              </tr>
              <tr>
                <td className="py-2 px-4 border lg:h-10"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
              </tr>
              <tr>
                <td className="py-2 px-4 border lg:h-10"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
              </tr>
              <tr>
                <td className="py-2 px-4 border lg:h-10"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
              </tr>
              <tr>
                <td className="py-2 px-4 border lg:h-10"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
              </tr>
              <tr>
                <td className="py-2 px-4 border lg:h-10"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
              </tr>
              <tr>
                <td className="py-2 px-4 border lg:h-10"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
                <td className="py-2 px-4 border"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default GoogleSheet;
