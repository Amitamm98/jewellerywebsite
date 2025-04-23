import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { FaThList } from "react-icons/fa";

import { useState } from "react";
import ListImg from "../assets/list.png";
import GridImg from "../assets/message.png";
import Ad from "./../assets/bags/solid.jpg";
import PrimComp from "./../PrimComp/PrimComp";
import SecoComp from "./../SecoComp/SecoComp";

const MainComp = ({ title, MainDetailsMap, MainImg }) => {
  const [list, setList] = useState(true);
  return (
    <>
      <section className="mainPadding flex justify-between gap-6 py-10  flex-wrap">
        <div className="w-[27%] ">
          <div className="h-[500px] p-5 bg-[#ededed]">
            <h3 className="text-xl">Categories</h3>
            <hr className="w-full h-[1px] bg-gray-400 mt-2" />

            <div className="mt-5 ">
              <div className="my-6 ">
                <p>STONES</p>
                <hr className="w-full h-[2px] bg-gray-400 " />
              </div>


              <div className="my-6 ">
                <p>GOLD WITH DIAMOND</p>
                <hr className="w-full h-[2px] bg-gray-400 " />
              </div>

              <div className="my-6 ">
                <p>OUR TRENDING</p>
                <hr className="w-full h-[2px] bg-gray-400 " />
              </div>

              <div className="my-6 ">
                <p>MENS JEWELLERYS</p>
                <hr className="w-full h-[2px] bg-gray-400 " />
              </div>

              <div className="my-6 ">
                <p>ABOUT US</p>
                <hr className="w-full h-[2px] bg-gray-400 " />
              </div>

              <div className="my-6 ">
                <p>CONTACT US</p>
                <hr className="w-full h-[2px] bg-gray-400 " />
              </div>
            </div>
          </div>

          <img src={Ad} alt="ad" className="w-full" />
        </div>
        {/* first part */}

        <div className="w-[70%]">
          <h3 className="text-3xl font-bold">{title}</h3>
          <img src={MainImg} alt="bag banner" className="w-full mt-4 mb-7" />
          <div className="w-full flex justify-between mb-12">
            <div className="flex gap-1">
              <span
                onClick={() => {
                  setList(true);
                }}
                className="size-8 group  relative bg-[#B99126] hover:bg-black flex flex-col justify-center cursor-pointer items-center "
              >
                <BsFillGrid3X3GapFill className="size-6  text-white" />
                <img
                  src={GridImg}
                  className="absolute hidden group-hover:block  -top-[30px] w-full"
                  alt="grid img"
                />
              </span>

              <span
                onClick={() => {
                  setList(false);
                }}
                className="size-8 relative group bg-[#B99126] hover:bg-black flex flex-col justify-center cursor-pointer items-center "
              >
                <FaThList className="size-6 text-white" />
                <img
                  src={ListImg}
                  className="absolute hidden group-hover:block  -top-[30px] w-full"
                  alt="grid img"
                />
              </span>
            </div>

            <div>
              <span className="mr-2">Sort By:</span>
              <select className="p-2 cursor-pointer">
                <option value="Default">Default</option>
                <option value="Name(A-Z)">Name(A-Z)</option>
                <option value="Price(Low-High)">Price(Low-High)</option>
                <option value="Model(A-Z)">Model(A-Z)</option>
              </select>
            </div>
          </div>
          {/* sort by section */}

          {list ? (
            <div className="w-full grid grid-cols-2 lg:grid-cols-3 gap-10">
              {MainDetailsMap.map((list) => {
                return (
                  <PrimComp
                    img={list.img}
                    title={list.title}
                    price={list.price}
                    key={list.id}
                  />
                );
              })}
            </div>
          ) : (
            <div>
              {MainDetailsMap.map((list) => {
                return (
                  <SecoComp
                    img={list.img}
                    title={list.title}
                    price={list.price}
                    key={list.id}
                  />
                );
              })}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default MainComp;
