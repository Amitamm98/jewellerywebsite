import { FaEnvelope } from "react-icons/fa";
const BagNewsletter = () => {
  return (
    <>
      <section className="bg-[#363221] w-full px-5 py-8 text-white">
        <div className="flex justify-center gap-2 items-center">
          <h5 className="text-[16px]"> TRUE STONE</h5>
          <input
            type="email"
            placeholder="Enter Your Email.."
            className="w-[27%] focus:outline-none p-2 text-black"
          />
          <button className="bg-[#B99126] hover:bg-[#9e7c1f] text-white flex gap-2 items-center py-2 px-5">
            <FaEnvelope />
            <span>Subscribe</span>
          </button>
        </div>
      </section>
    </>
  );
};

export default BagNewsletter;
