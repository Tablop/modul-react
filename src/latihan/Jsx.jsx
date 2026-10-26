export default function Jsx() {
  const data = ["a", "b", "c", "d"];
  return (
    <>
      <h1>INi jsx</h1>
      <p>Memunkinkan membuat html tapi di dalam js</p>
      {data.map((e, i) => (
        <h1 key={i}>{e}</h1>
      ))}
    </>
  );
}
