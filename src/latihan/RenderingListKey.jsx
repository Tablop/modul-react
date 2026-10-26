export default function RenderingListKey() {
  const data = [
    { nama: "Bakso", harga: 5000 },
    { nama: "Mie Ayam", harga: 10000 },
  ];
  return (
    <div>
      <table>
        <tr>
          <th>Nama</th>
          <th>Harga</th>
        </tr>
        {data.map((e, i) => (
          <tr key={i}>
            <td>{e.nama}</td>
            <td>{e.harga}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
