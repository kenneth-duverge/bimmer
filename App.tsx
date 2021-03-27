import React from "react";

import StoreProvider from "./src/store";

import Home from "./src/screens/Home";

export default function App() {
  return (
    <StoreProvider>
      <Home />
    </StoreProvider>
  );
}
