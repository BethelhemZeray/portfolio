import ContactForm from "../components/ContactForm";
import WrapCard from "../components/WrapCard";

const ContactSection = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <WrapCard>
        <ContactForm />
      </WrapCard>
    </div>
  );
};

export default ContactSection;
