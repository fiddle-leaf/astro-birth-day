import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import AstroData from "./AstroData";

export default function AstroView({ info }) {
  console.log(info);
  return (
    <article>
      <h2 className="subtitle">
        {info.status === "loading" && <Skeleton />}
        {info.status === "success" && `${info.user.name}'s Breakdown`}
      </h2>
      {info.status === "loading" && <Skeleton count={10} />}
      {info.status === "success" && <AstroData user={info} />}
    </article>
  );
}
