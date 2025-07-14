import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Research from "@/components/Research";
import Solution from "@/components/Solution";
import Publications from "@/components/Publications";
import Impact from "@/components/Impact";
import Team from "@/components/Team";
import Funding from "@/components/Funding";
import Donate from "@/components/Donate";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Research />
      <Solution />
      <Publications />
      <Impact />
      <Team />
      <Funding />
      <Donate />
      <Footer />
    </div>
  );
};

export default Index;
