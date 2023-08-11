import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function AstroView({ info }) {
  console.log(info);
  return (
    <article>
      <h2 className="subtitle">
        {info.status === "loading" && <Skeleton />}
        {info.status === "success" && "Breakdown"}
      </h2>
      {info.status === "loading" && <Skeleton count={10} />}
      {info.status === "success" && (
        <article>
          <h3>{info.user.name}</h3>
          <p>Birthday: {info.user.birthdate}</p>
        </article>
      )}
    </article>
  );
}
