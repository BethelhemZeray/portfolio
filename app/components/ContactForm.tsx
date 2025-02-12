import { FaPaperPlane } from "react-icons/fa";

const ContactForm = () => {
  return (
    <div className="bg-dark text-white px-4 py-8 md:p-12 lg:py-[60px] rounded-2xl shadow-lg">
      {/* Grid Layout for GET IN TOUCH and Form Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* GET IN TOUCH Section */}
        <div className="flex flex-col justify-center items-left h-full space-y-3 lg:px-5">
          <h2 className="font-bold text-primary">GET IN TOUCH</h2>
          <p className="text-gray-300 font-bold text-xl lg:text-3xl">
            Elevate your construction projects with Lalisa Chali Wakweyya
          </p>
          <p className="w-full text-gray-400">
            A seasoned Civil Engineer with expertise in contract administration,
            construction supervision, and quantity surveying. Let&apos;s collaborate
            to bring your vision to life.
          </p>
        </div>

        {/* Form Section */}
        <div>
          <form className="space-y-6">
            {/* Grid Layout for Form Fields */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full px-5 py-4 bg-gray-800 border border-gray-700 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your name"
                  required
                />
              </div>

              {/* Phone Number */}
              <div>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="mt-1 block w-full px-5 py-4 bg-gray-800 border border-gray-700 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full px-5 py-4 bg-gray-800 border border-gray-700 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                  required
                />
              </div>

              {/* Subject */}
              <div>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="mt-1 block w-full px-5 py-4 bg-gray-800 border border-gray-700 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter the subject"
                  required
                />
              </div>
            </div>

            {/* Message (Expands across 2 columns) */}
            <div className="lg:col-span-2">
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-1 block w-full px-5 py-4 bg-gray-800 border border-gray-700 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your message"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="lg:col-span-2">
              <button
                type="submit"
                className="w-full flex items-center justify-center px-4 py-4 bg-blue-600 text-white font-semibold rounded-[50px] hover:bg-blue-700 transition-colors duration-300"
              >
                Send Mail
                <FaPaperPlane className="ml-2" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
