import { useState } from "react";

export default function State() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount((e) => e + 1)}>Tambah</button>
    </div>
  );
}
