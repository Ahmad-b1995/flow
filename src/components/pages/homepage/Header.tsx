import Logo from "../../../assets/images/logo";
import {useGlobalState} from "../../../state/GlobalState";
import Switch from "react-switch";

const Menu = () => {
  const [globalState, updateGlobalState] = useGlobalState();

  return (
    <header className={`
        flex items-center justify-between max-w-7xl mx-auto bg-white h-20
        ${globalState.isDark ? "bg-gray-900" : "bg-white"}
        `}>
      <Logo />
      <Switch
      onColor="#0097a6"
        onChange={() => updateGlobalState("isDark", !globalState.isDark)}
        checked={globalState.isDark}
      />
    </header>
  );
};

export default Menu;
