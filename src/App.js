import AboutSection from "./components/AboutSection";
import Achievement from "./components/Achievement";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ParticlesContainer from "./components/ParticlesContainer";
import ProjectSection from "./components/ProjectSection";

export default function App() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] ">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <ParticlesContainer />
        <HeroSection />
        <Achievement />
        <AboutSection />
        <ProjectSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
