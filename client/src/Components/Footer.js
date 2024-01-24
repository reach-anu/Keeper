import React from "react";
function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{backgroundColor: '#8e6645'}}>
      <p>Copyright ⓒ {year} - Anushaka</p>
    </footer>
  );
}

export default Footer;