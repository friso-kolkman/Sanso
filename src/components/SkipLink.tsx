import { Link } from 'react-router-dom';

const SkipLink = () => {
  return (
    <Link 
      to="#main-content" 
      className="skip-link"
      onClick={(e) => {
        e.preventDefault();
        const mainContent = document.getElementById('main-content');
        if (mainContent) {
          mainContent.focus();
          mainContent.scrollIntoView({ behavior: 'smooth' });
        }
      }}
    >
      Skip to main content
    </Link>
  );
};

export default SkipLink;
