import { navItems } from "../../utils/constants";
import "./sidenav.scss";

interface SideNavProps {
  changeOption: (x: number) => void;
  option: number;
  showNav: boolean;
  width: number;
}

export default function SideNav({
  changeOption,
  option,
  showNav,
  width,
}: SideNavProps) {
  return (
    <nav
      className="side-nav"
      style={{
        transform: `${showNav ? "scaleY(1)" : "scaleY(0)"}`,
        backgroundColor: `${width > 901 ? "#000000b4" : "#000000d8"}`,
        opacity: `${showNav && "1"}`,
      }}
    >
      {navItems.map(({ option: itemOption, icon, label }) => (
        <div
          key={itemOption}
          className={option === itemOption ? "active" : ""}
          onClick={() => changeOption(itemOption)}
        >
          <img src={icon} alt={label.toLowerCase()} className="side-nav__img" />
          <p className="side-nav__type">{label}</p>
        </div>
      ))}
    </nav>
  );
}
