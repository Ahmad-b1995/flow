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
    <header className="flex mx-auto items-center justify-between max-w-7xl w-full h-16">
      <Logo />
      <Switch
        width={50}
        height={24}
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
