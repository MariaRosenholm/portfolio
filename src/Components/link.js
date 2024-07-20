const OpenInTab = (event) => {
        event.preventDefault(); 
        window.open(event.target.href, '_blank', 'noopener,noreferrer');
  };
  

export default OpenInTab;
