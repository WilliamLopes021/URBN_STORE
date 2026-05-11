import Footer from "./shared/components/molecules/Footer";
import NavBar from "@/shared/components/molecules/NavBar";
import { HeroBanner } from "@/features/product/components/HeroBanner";

function App() {
  return (
    <div className="min-h-screen bg-bg">
      <NavBar />
      <HeroBanner />
      <Footer />
    </div>
  );
}

export default App;
