import { FeaturedProductDetails } from "./../../data";

const FeaturedProduct = () => {
  return (
    <>
      <section className="mainPadding bg-black py-20">
        <h2 className="text-center text-white  text-3xl font-semibold">
          FEATURED PRODUCTS
        </h2>

        <div className="grid lg:grid-cols-4 grid-cols-2 gap-10 mt-10">
          {FeaturedProductDetails.map((list) => {
            return (
              <div
                key={list.id}
                className="border-[1.5px] border-gray-400 p-3 hover:-translate-y-1 transition-transform duration-300 rounded-md shadow-md cursor-pointer"
              >
                <img src={list.img} className="w-full " alt={list.title} />
                <h3 className="my-2 font-semibold text-white">{list.title}</h3>
                <div className="flex justify-between text-white flex-wrap">
                  <h4 className="md-mb-0 mb-1">{list.price}</h4>
                  <button className="bg-[#B98907] hover:bg-[#6a551b]  py-1 px-4 rounded-md">
                    {list.click}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default FeaturedProduct;
