import DataList from "./DataList";

const months = [
  "January",
  "Febuary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export default function AstroData({ user }) {
  const name = user.user.name;
  //const birthday = user.user.birthdate;
  const astrology = user.data.astronomy.astro;
  const location = user.data.location;

  const User = Object.assign({}, { name, astrology, location });

  console.log(User);

  return (
    <article className="astro-data">
      <DataList data={User.astrology} />
      <DataList data={User.location} />
    </article>
  );
}
