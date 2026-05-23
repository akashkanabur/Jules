import { Activity } from 'lucide-react';

const Header = () => {
  return (
    <header className="app-header">
      <div className="header-content">
        <Activity size={32} className="logo-icon" />
        <h1>FitTrack</h1>
      </div>
    </header>
  );
};

export default Header;
