// import BagDetails from "../components/BagComp/BagDetails";
import MainComp from "../MainComp/MainComp";
import { BagDetailsMap } from "../data";
import BagBanner from "./../assets/bags/stone.jpg";

const Bags = () => {
  return (
    <>
      <MainComp
        title="EXCLUSIVE STONES"
        MainDetailsMap={BagDetailsMap}
        MainImg={BagBanner}
      />
    </>
  );
};

export default Bags;
