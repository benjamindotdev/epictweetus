import { links } from "../constants/index";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="flex flex-row gap-2 justify-evenly w-full py-6">
      <Logo />
      {links.map((link, index) => (
        <NavLink
          key={index}
          to={link.url}
          className={({ isActive }) =>
            `flex flex-row items-center justify-center h-12 gap-4 rounded-xl px-4 transition-all ease-in-out delay-150 ${
              isActive ? "bg-zinc-950 text-zinc-100" : ""
            }`
          }
        >
          {link.icon && <link.icon />}
          {link.name}
        </NavLink>
      ))}
    </header>
  );
};

export default Header;
