function View({ role }) {
  if (role === "admin") {
    return (
      <div>
        <h1>Selamat datang Admin</h1>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Selamat berbelanja</h1>
      </div>
    );
  }
}

export default function ConditionalRender() {
  return (
    <div>
      <View role="admin" />
      <View role="pelanggan" />
    </div>
  );
}
