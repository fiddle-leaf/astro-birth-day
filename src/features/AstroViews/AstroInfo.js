import AstroForm from "./AstroForm";
import AstroView from "./AstroView";
import { useSelector } from "react-redux";
import { setInfo, selectData, locationAsync } from "../info/infoSlice";
import "./astroviews.sass";

export default function AstroInfo() {
  const info = useSelector(selectData);

  console.log(info);

  return (
    <main className="astro-page">
      <AstroForm info={info} setInfo={setInfo} location={locationAsync} />
      <AstroView info={info} />
    </main>
  );
}
