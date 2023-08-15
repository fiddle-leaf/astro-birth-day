import AstroForm from "./AstroForm";
import AstroView from "./AstroView";
import Skeleton from "react-loading-skeleton";
import { useDispatch } from "react-redux";
import { setInfo, locationAsync } from "../info/infoSlice";
import "./astroviews.sass";

export default function AstroInfo({ status }) {
  const dispatch = useDispatch();

  return (
    <main className="astro-page">
      {status === "idle" ? (
        <AstroForm
          setInfo={setInfo}
          location={locationAsync}
          dispatch={dispatch}
        />
      ) : status === "loading" ? (
        <Skeleton count={20} />
      ) : status === "success" ? (
        <AstroView dispatch={dispatch} />
      ) : (
        <h5>Error!</h5>
      )}
    </main>
  );
}
