import ProjectsSection from "./projects/page";
import Blog from "./blog/page";
import HeroSection from "./hero/page";
import AboutSection from "./about/page";
import RoleSection from "./components/RoleSection";
import ExperienceSection from "./WorkExperiance/page";
import ContactSection from "./contact/page";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <HeroSection />
      <AboutSection />
      {/* <ProjectsSection />
      <Blog /> */}
      <RoleSection />
      <ExperienceSection/>
      <ContactSection/>
    </main>
  );
}