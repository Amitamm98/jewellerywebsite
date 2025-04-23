import MainComp from "../MainComp/MainComp";
import { PashminasDetailsMap } from "../data";
import PashminasBanner from "./../assets/pashinash/menjew.webp";

const Pashminas = () => {
  return (
    <>
      <MainComp
        title="Men's Section"
        MainDetailsMap={PashminasDetailsMap}
        MainImg={PashminasBanner}
      />
    </>
  );
};

export default Pashminas;
