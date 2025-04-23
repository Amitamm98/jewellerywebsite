import { FaCartShopping } from "react-icons/fa6";

const PrimComp = ({ img, title, price }) => {
  return (
    <>
      <div className="overflow-hidden cursor-pointer ">
        <img
          src={img}
          alt={title}
          className="w-full hover:scale-105  duration-300"
        />

        <div className="text-center">
          <h4 className="text-lg">{title}</h4>
          <p className="my-3 text-[#B99126] text-lg font-bold">{price}</p>

          <div className="flex flex-col items-center justify-center">
            <button className="flex gap-2 hover:bg-[#B99126] hover:text-white duration-300 items-center border-[3px] py-2 px-3 font-semibold border-gray-300">
              <FaCartShopping />
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrimComp;
