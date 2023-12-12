import Logo from "../../../assets/images/logo";
import Switch from "react-switch";
import {useState} from "react";

interface Props {
  onThemeToggle: () => void;
}

const Header = ({onThemeToggle}: Props) => {
  const [isDarkModeActive, setisDarkModeActive] = useState(
    document.querySelector("body")?.hasAttribute("data-theme") ? true : false
  );
  return (
    <header
      className={`
        flex items-center justify-between max-w-7xl mx-auto h-20
        `}
    >
      <Logo />
      <Switch
        onColor="#0097a6"
        onChange={() => {
          onThemeToggle();
          setisDarkModeActive(!isDarkModeActive);
        }}
        checked={isDarkModeActive}
      />
    </header>
  );
};

export default Header;
