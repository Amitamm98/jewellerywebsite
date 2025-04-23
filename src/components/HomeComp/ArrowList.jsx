import { ArrowDetails } from "./../../data";
const ArrowList = () => {
  return (
    <>
      <section className="mainPadding flex justify-center bg-black gap-10 py-10">
        {ArrowDetails.map((list) => {
          return (
            <div key={list.id} className="relative">
              <img src={list.img} alt="arrowImage" className="w-56" />
              <div className="absolute top-[25%] left-[50%] -translate-x-[50%]">
                <h4 className="text-white  font-semibold text-lg">
                  {list.title}
                </h4>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default ArrowList;
