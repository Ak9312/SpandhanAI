import { StoreProvider, useStore } from "./store.jsx";
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import Results from "./components/Results.jsx";
import { QuickView, CartDrawer, Toast, Footer } from "./components/Overlays.jsx";

function Shell() {
  const { isBrowsing } = useStore();
  return (
    <>
      <Header />
      <main>{isBrowsing ? <Results /> : <Home />}</main>
      <Footer />
      <QuickView />
      <CartDrawer />
      <Toast />
    </>
  );
}

export default function App() {
  return (
    <StoreProvider>
      <Shell />
    </StoreProvider>
  );
}
