export default function MoonData({ astro, moonphase }) {
  return (
    <div className="moon-data">
      <h3>Moon Data</h3>
      <div className="desc">
        <div className="emoji">{moonphase.emoji}</div>
        <div>
          <h4>{astro.moon_phase}</h4>
          <h5>{astro.moon_illumination}% Illumination</h5>
        </div>
      </div>
      <ul>
        <li>Moonrise: {astro.moonrise}</li>
        <li>Moonset: {astro.moonset}</li>
      </ul>
    </div>
  );
}
