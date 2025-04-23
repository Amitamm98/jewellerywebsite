import MainComp from "../MainComp/MainComp";
import { CarpetDetailsMap } from "../data";
import CarpetBanner from "./../assets/carpet/golddiamond.png";

const Carpets = () => {
  return (
    <>
      <MainComp
        title="Gold and Diamonds collection"
        MainDetailsMap={CarpetDetailsMap}
        MainImg={CarpetBanner}
      />
    </>
  );
};

export default Carpets;
