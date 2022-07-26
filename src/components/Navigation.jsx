import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="Navigation">
      <Link className="Link" to="/">
        Home
      </Link>
      <Link className="Link" to="/games">
        Browse Games
      </Link>
    </nav>
  );
};

export default Navigation;
