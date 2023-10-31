import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { ProductProvider } from "./context/ProductContext";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
      <ProductProvider>
        <Router />
      </ProductProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}