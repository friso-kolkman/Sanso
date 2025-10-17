import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="mt-16 border-t border-olive/20 bg-sand/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-espresso">
        <div>
          <span className="font-serif">SANSO Amsterdam</span> 
          <span className="opacity-70">© {new Date().getFullYear()}</span>
        </div>
        <nav className="flex items-center gap-4">
          <Link to="/privacy" className="underline-offset-2 hover:underline focus:outline-none focus:ring-2 focus:ring-forest focus:ring-offset-2 rounded">
            Privacy
          </Link>
          <Link to="/contact" className="underline-offset-2 hover:underline focus:outline-none focus:ring-2 focus:ring-forest focus:ring-offset-2 rounded">
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;


