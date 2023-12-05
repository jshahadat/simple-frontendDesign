import React from "react";
import Wallmart from "../../assets/walmart.png";
import Facebook from "../../assets/facebook.png";
import Amazon from "../../assets/amazon.png";
import Ebay from "../../assets/ebay.png";
import OferUp from "../../assets/oferUp.png";
import Mercari from "../../assets/mercari.png";
import Shopify from "../../assets/shopify.png";
import Poshmark from "../../assets/poshmark.png";
import Etsy from "../../assets/etsy.png";
import Alibaba from "../../assets/alibaba.png";
import Filpkart from "../../assets/flipkart.png";
import Rakatun from "../../assets/rakuten.png";
import Plus from "../../assets/plus.png";

const Listing = () => {
  const handleButtonClick = () => {
    window.location.href = "/google-sheet";
  };

  return (
    <div className="mb-12">
      <div className="flex justify-between items-center lg:ml-10 ml-3 lg:mr-10 mr-3 mt-4 ">
        <div>
          <button
            onClick={handleButtonClick}
            className="bg-[#2A468F] lg:w-[323px] lg:h-[74px] text-white text-2xl rounded-[10px] lg:text-[30px] text-[16px] font-medium flex justify-center items-center lg:px-0 px-2 lg:py-0 py-1"
          >
            <span>
              <img
                className="lg:h-[30px] h-[16px] lg:w-[30px] w-[16px] lg:mr-5 mr-2"
                src={Plus}
                alt=""
              />
            </span>{" "}
            <span> Google Sheet</span>
          </button>
        </div>
        <div>
          <h1 className="text-black lg:text-[55px] text-[20px] font-semibold">
            Listings
          </h1>
        </div>
        <div>
          <button className="text-white lg:w-[219px] w-[50px]  lg:h-[74px] h-[40px] bg-[#8F2A2A] rounded-[10px] lg:text-[30px] font-medium">
            Start
          </button>
          <button className="text-white lg:w-[219px] w-[50px]  lg:h-[74px] h-[40px] bg-[#2C8F2A] rounded-[10px] lg:text-[30px] font-medium lg:ml-8 ml-3">
            Stop
          </button>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="lg:mt-16 md:mt-12 mt-8  grid lg:grid-cols-3 grid-cols-2 lg:gap-[60px] gap-[15px] lg:ml-0 ml-4 lg:mr-0 mr-4">
          <div
            className=" lg:w-[364px] lg:h-[121px] h-[60px] lg:p-0 p-5 rounded-[10px] flex justify-center items-center"
            style={{
              "box-shadow":
                "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
            }}
          >
            <img
              className="lg:h-[90px] lg:w-[248px] w-[140px]"
              src={Facebook}
              alt=""
            />
          </div>

          <div
            className=" lg:w-[364px] lg:h-[121px] h-[60px] lg:p-0 p-5 rounded-[10px] flex justify-center items-center"
            style={{
              "box-shadow":
                "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
            }}
          >
            <img
              className="lg:h-[70px] lg:w-[270px] w-[140px] h-[30px]"
              src={Wallmart}
              alt=""
            />
          </div>

          <div
            className=" lg:w-[364px] lg:h-[121px] h-[60px] lg:p-0 p-5 rounded-[10px] flex justify-center items-center"
            style={{
              "box-shadow":
                "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
            }}
          >
            <img
              className="lg:h-[55px] lg:w-[272px]  w-[140px] "
              src={Amazon}
              alt=""
            />
          </div>

          <div
            className=" lg:w-[364px] lg:h-[121px] h-[60px] lg:p-0 p-5 rounded-[10px] flex justify-center items-center"
            style={{
              "box-shadow":
                "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
            }}
          >
            <img
              className="lg:h-[100px] lg:w-[231px] w-[140px]"
              src={Ebay}
              alt=""
            />
          </div>

          <div
            className=" lg:w-[364px] lg:h-[121px] h-[60px] lg:p-0 p-5 rounded-[10px] flex justify-center items-center"
            style={{
              "box-shadow":
                "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
            }}
          >
            <img
              className="lg:h-[60px] lg:w-[240px] w-[140px] "
              src={OferUp}
              alt=""
            />
          </div>

          <div
            className=" lg:w-[364px] lg:h-[121px] h-[60px] lg:p-0 p-5 rounded-[10px] flex justify-center items-center"
            style={{
              "box-shadow":
                "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
            }}
          >
            <img
              className="lg:h-[70px] lg:w-[319px] w-[140px]"
              src={Mercari}
              alt=""
            />
          </div>
          <div
            className=" lg:w-[364px] lg:h-[121px] h-[60px] lg:p-0 p-5 rounded-[10px] flex justify-center items-center"
            style={{
              "box-shadow":
                "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
            }}
          >
            <img className=" lg:w-[247px] w-[140px]" src={Shopify} alt="" />
          </div>

          <div
            className=" lg:w-[364px] lg:h-[121px] h-[60px] lg:p-0 p-5 rounded-[10px] flex justify-center items-center"
            style={{
              "box-shadow":
                "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
            }}
          >
            <img
              className="lg:h-[55px] lg:w-[314px] w-[140px]"
              src={Poshmark}
              alt=""
            />
          </div>

          <div
            className=" lg:w-[364px] lg:h-[121px] h-[60px] lg:p-0 p-5 rounded-[10px] flex justify-center items-center"
            style={{
              "box-shadow":
                "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
            }}
          >
            <img
              className="lg:h-[80px] lg:w-[170px] w-[140px] h-[40px]"
              src={Etsy}
              alt=""
            />
          </div>

          <div
            className=" lg:w-[364px] lg:h-[121px] h-[60px] lg:p-0 p-5 rounded-[10px] flex justify-center items-center"
            style={{
              "box-shadow":
                "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
            }}
          >
            <img
              className="lg:h-[80px] lg:w-[170px] w-[140px]"
              src={Alibaba}
              alt=""
            />
          </div>

          <div
            className=" lg:w-[364px] lg:h-[121px] h-[60px] lg:p-0 p-5 rounded-[10px] flex justify-center items-center"
            style={{
              "box-shadow":
                "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
            }}
          >
            <img
              className="lg:h-[74px] lg:w-[275px] w-[140px]"
              src={Filpkart}
              alt=""
            />
          </div>

          <div
            className=" lg:w-[364px] lg:h-[121px] h-[60px] lg:p-0 p-5 rounded-[10px] flex justify-center items-center"
            style={{
              "box-shadow":
                "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
            }}
          >
            <img
              className="lg:h-[72px] lg:w-[247px] w-[140px]"
              src={Rakatun}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listing;
