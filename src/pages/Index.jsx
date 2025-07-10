import Header from "@/components/Header";
import ModernHero from "@/components/ModernHero";
import EnhancedAbout from "@/components/EnhancedAbout";
import Interactive3DSolution from "@/components/Interactive3DSolution";
import ModernImpact from "@/components/ModernImpact";
import Funding from "@/components/Funding";
import Donate from "@/components/Donate";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <ModernHero />
      <EnhancedAbout />
      <Interactive3DSolution />
      <ModernImpact />
      <Funding />
      <Donate />
      <Footer />
    </div>
  );
};

export default Index;
