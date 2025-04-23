import MainComp from "../MainComp/MainComp";
import { OtherDetailsMap } from "../data";
import OtherBanner from "./../assets/other/otherBanner.jpg";

const Others = () => {
  return (
    <>
      <MainComp
        title="Others"
        MainDetailsMap={OtherDetailsMap}
        MainImg={OtherBanner}
      />
    </>
  );
};

export default Others;
