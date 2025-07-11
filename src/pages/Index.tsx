import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Solution from "@/components/Solution";
import Impact from "@/components/Impact";
import Funding from "@/components/Funding";
import Donate from "@/components/Donate";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Solution />
      <Impact />
      <Funding />
      <Donate />
      <Footer />
    </div>
  );
};

export default Index;
