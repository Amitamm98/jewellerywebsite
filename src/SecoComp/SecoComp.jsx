import { FaCartShopping } from "react-icons/fa6";

const SecoComp = ({ img, title, price }) => {
  return (
    <>
      <div className="flex gap-8 items-center  mb-8 cursor-pointer">
        <div className="w-[200px] overflow-hidden">
          <img
            src={img}
            alt={title}
            className="w-full hover:scale-105 duration-300"
          />
        </div>

        <div className="flex-1">
          <h4 className="text-lg">{title}</h4>
          <p className="my-3 text-[#B99126] text-lg font-bold">{price}</p>

          <button className="flex gap-2 hover:bg-[#B99126] hover:text-white duration-300 items-center border-[3px] py-2 px-3 font-semibold border-gray-300">
            <FaCartShopping />
            ADD TO CART
          </button>
        </div>
      </div>
    </>
  );
};

export default SecoComp;
