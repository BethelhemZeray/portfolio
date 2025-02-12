import Link from "next/link";
import { config } from "../constants/footer";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa"; // Import icons from React Icons

export default function Footer() {
  const { quickLinks, contac, socialLinks, copyright, callToAction, headline } =
    config.footer;

  // Map icon names to React Icons components
  const iconComponents = {
    github: FaGithub,
    linkedin: FaLinkedin,
    twitter: FaTwitter,
    email: FaEnvelope,
    location: FaMapMarkerAlt,
    phone: FaPhone,
  };

  return (
    <footer className="bg-gray-900 text-white pt-10">
      <div className="container bg-dark mx-auto py-6 px-4 lg:p-6">
        {/* Grid Layout for Quick Links, Contact Info, and Social Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Call-to-Action */}
          <div className="space-y-3">
            <h2 className="text-1xl md:text-2xl font-bold">
              {callToAction}
            </h2>
            <p className="text-2xl md:text-4xl">
              {headline}
            </p>
          </div>
          {/* Quick Links Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={`#${link.id}`}
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Me</h3>
            <ul className="space-y-3">
              {contac.map((contact, index) => {
                const Icon =
                  iconComponents[contact.icon as keyof typeof iconComponents];
                return (
                  <li key={index} className="flex items-center space-x-3">
                    <Icon className="w-4 h-4 text-gray-300" />
                    <span className="text-gray-300">{contact.url}</span>
                  </li>
                );
              })}
            </ul>

            <div className="flex mt-5 lg:mt-4 space-x-4">
              {socialLinks.map((link, index) => {
                const Icon =
                  iconComponents[link.icon as keyof typeof iconComponents];
                return (
                  <Link
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                    aria-label={link.name}
                  >
                    <Icon className="w-6 h-6" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* Line Separator */}
        <div className="w-full">
          <hr className="w-full border-t border-gray-700 my-6" />
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400 text-center">{copyright}</p>
      </div>
    </footer>
  );
}
