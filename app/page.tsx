import HeroSection from "./hero/page";
import AboutSection from "./about/page";
import ExperienceSection from "./WorkExperiance/page";
import ContactSection from "./contact/page";
import RoleAndSkills from "./skills/page";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <HeroSection />
      <AboutSection />
      <RoleAndSkills/>
      <ExperienceSection/>
      <ContactSection/>
    </main>
  );
}