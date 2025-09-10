const SkipLink = () => {
  return (
    <a 
      href="#main-content" 
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
    </a>
  );
};

export default SkipLink;
