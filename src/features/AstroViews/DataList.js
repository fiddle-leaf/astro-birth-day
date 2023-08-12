export default function DataList({ data }) {
  return (
    <ul>
      {Object.entries(data).map(([key, value], index) => {
        return (
          <li key={index}>
            {key}: {value}
          </li>
        );
      })}
    </ul>
  );
}
