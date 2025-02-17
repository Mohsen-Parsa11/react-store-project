import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { ShopingCartProvider } from "./components/ShopingCartContext/ShopingCartContext.tsx";
ShopingCartProvider;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ShopingCartProvider>
        <App />
      </ShopingCartProvider>
    </BrowserRouter>
  </StrictMode>
);
