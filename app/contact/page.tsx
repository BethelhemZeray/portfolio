import ContactForm from "../components/ContactForm";
import WrapCard from "../components/WrapCard";

const ContactSection = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Contact Lalisa</h1>
      <WrapCard>
        <ContactForm />
      </WrapCard>
    </div>
  );
};

export default ContactSection;
