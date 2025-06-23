import React from 'react';


const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="Layout">
      {/* <NavBar /> */}
      {children}
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
