export default function MoonData({ astro, moonphase }) {
  return (
    <div>
      <h2>Moon Data</h2>
      <span>{moonphase.emoji}</span>
      <h3>{astro.moon_phase}</h3>
      <h4>{astro.moon_illumination}% Illumination</h4>
      <ul>
        <li>Moonrise: {astro.moonrise}</li>
        <li>Moonset: {astro.moonset}</li>
      </ul>
    </div>
  );
}
