import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <div>
      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/menu"}>Menu</Link>
        <Link to={"/contact"}>Contact</Link>
      </div>
    </div>
  );
}

export default NavBar
