import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactUsPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted:", { name, email, message });
    // Reset form fields
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white shadow-md rounded-lg overflow-hidden p-8">
          <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
          <div className="flex items-center mb-4">
            <Mail className="mr-4 text-primary-900" />
            <span>events@college.edu</span>
          </div>
          <div className="flex items-center mb-4">
            <Phone className="mr-4 text-primary-900" />
            <span>(555) 555-5555</span>
          </div>
          <div className="flex items-center">
            <MapPin className="mr-4 text-primary-900" />
            <span>123 College Ave, Anytown USA</span>
          </div>
          <div className="mt-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.4367522399577!2d-74.00499868456433!3d40.71677097933306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a167e4e7457%3A0xef0c3b1db7295f39!2s123%20College%20Ave%2C%20Anytown%20USA!5e0!3m2!1sen!2sus!4v1669867200000!5m2!1sen!2sus"
              width="100%"
              height="300"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-4">Send us a message</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-md border-2 focus:outline-none focus:ring-primary-900 focus:border-primary-900 transition duration-300 ease-in-out transform hover:scale-105"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-md border-2 focus:outline-none focus:ring-primary-900 focus:border-primary-900 transition duration-300 ease-in-out transform hover:scale-105"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full px-4 py-2 rounded-md border-2 focus:outline-none focus:ring-primary-900 focus:border-primary-900 h-32 transition duration-300 ease-in-out transform hover:scale-105"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-primary-900 hover:bg-primary-900 text-white font-medium py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
