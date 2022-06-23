import "./Header.css";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <div className="header">
      <h1 className="header-title">TripaGo</h1>
    </div>
  );
};

export default Header;
