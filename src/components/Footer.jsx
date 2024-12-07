// components/Footer.js
const Footer = () => {
    return (
      <footer className="py-8 mt-12 bg-dark-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-center md:text-left">© 2024 Campus Events. All Rights Reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:underline">About</a>
              <a href="#" className="hover:underline">Contact</a>
              <a href="#" className="hover:underline">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  