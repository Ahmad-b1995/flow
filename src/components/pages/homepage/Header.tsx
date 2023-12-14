import Logo from "../../../assets/images/logo";
import Switch from "react-switch";
import {useState} from "react";
import {get} from "local-storage";

interface Props {
  onThemeToggle: () => void;
}

const Header = ({onThemeToggle}: Props) => {
  const [isDarkModeActive, setisDarkModeActive] = useState<boolean | null>(
    get("isDark") as boolean
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
        checked={isDarkModeActive ? isDarkModeActive : false}
      />
    </header>
  );
};

export default Header;
