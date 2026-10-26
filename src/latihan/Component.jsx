function Header() {
  return (
    <header
      style={{
        textAlign: "center",
        backgroundColor: "lightblue",
        padding: "10px",
      }}
    >
      <h1>Ini header sederhana</h1>
    </header>
  );
}

function Task({ content, status }) {
  return (
    <div
      style={{
        backgroundColor: status ? "lightgreen" : "yellow",
        padding: "20px",
      }}
    >
      <p>{content}</p>
    </div>
  );
}

export default function Component() {
  return (
    <>
      <Header />
      <Task content={"Belajar react"} status={false} />
      <Task content={"Makan"} status={true} />
    </>
  );
}
