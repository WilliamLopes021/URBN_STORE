import NavBar from "@/shared/components/molecules/NavBar";
import { HeroBanner } from "@/features/product/components/HeroBanner";
import Drops from "./features/product/components/Drops";
import Footer from "./shared/components/molecules/Footer";

function App() {
  return (
    <div className="min-h-screen bg-bg">
      <NavBar />
      <HeroBanner />
      <Drops />
      <Footer />
    </div>
  );
}

export default App;
