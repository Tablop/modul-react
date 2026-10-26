import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./latihan-redux/App";
import { Provider } from "react-redux";
import { store } from "./latihan-redux/store";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);
