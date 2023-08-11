import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function AstroView({ status }) {
  return (
    <article>
      <h2 className="subtitle">
        {status === "loading" && <Skeleton />}
        {status === "success" && "Astrology Breakdown"}
      </h2>
      {status === "loading" && <Skeleton count={10} />}
      {status === "success" && 
      <article>
        
        </article>}
    </article>
  );
}
