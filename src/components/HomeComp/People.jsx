import PeopleImg from "./../../assets/biscuit.png";

const People = () => {
  return (
    <>
      <section className="peopleBanner text-white">
        <div className="mainPadding flex gap-5 items-center flex-wrap">
          <div className=" w-[300px] text-center">
            <img
              src={PeopleImg}
              alt="people image"
              className="size-56 mx-auto mb-6 object-cover rounded-full border-[2px] border-white"
            />
            <h4 className="text-xl font-semibold">Rohit Negi</h4>
            <p>CE0, VITI COMPANY</p>
          </div>

          <div className="flex-1">
            <h3 className="text-4xl mb-10 font-semibold text-center">
              WHAT PEOPLE ARE SAYING
            </h3>

            <p className="mb-5 text-[17px]">
            Absolutely stunning pieces! The craftsmanship is exquisite, delivery was quick, and the packaging felt luxurious. I feel so elegant wearing them—definitely my new favorite jewellery shop!
            </p>
            <p className="text-[17px]">
            Gorgeous jewellery, top-notch quality, fast delivery, and amazing service—truly a sparkling experience from start to finish! 💍✨.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default People;
