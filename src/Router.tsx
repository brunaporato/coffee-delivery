import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Home } from "./pages/Home";
import { Checkout } from "./pages/Checkout";
import { Success } from "./pages/Success";

export function Router() {
  return (
    <Routes>
      <Route path="/coffee-delivery" element={<DefaultLayout />}>
        <Route path="/coffee-delivery" element={<Home />} />
        <Route path="/coffee-delivery/checkout" element={<Checkout />} />
        <Route path="/coffee-delivery/success" element={<Success />} />
      </Route>
    </Routes>
  )
}