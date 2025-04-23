import MainComp from "../MainComp/MainComp";
import { JewelleryDetailMap } from "../data";
import JewelleryBanner from "./../assets/jewellery/trending.avif";

const Jewellery = () => {
  return (
    <>
      <MainComp
        title="Latest Collection"
        MainDetailsMap={JewelleryDetailMap}
        MainImg={JewelleryBanner}
      />
    </>
  );
};

export default Jewellery;
