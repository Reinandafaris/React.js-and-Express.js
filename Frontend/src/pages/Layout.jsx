import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Right from '../components/Right';
import '../index.css';

const Layout = ({ children }) => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsSideMenuOpen(false);
  };

  const handleCloseClick = () => {
    setIsSideMenuOpen(true);
  };

  return (
    <>
      <div className="container-layout">
        <aside style={{ display: isSideMenuOpen ? 'block' : '' }}>
          <Sidebar handleMenuClick={handleMenuClick} />
        </aside>
        <div>
          <main>{children}</main>
        </div>
        <div>
          <Right handleCloseClick={handleCloseClick} />
        </div>
      </div>
    </>
  );
};

export default Layout;
