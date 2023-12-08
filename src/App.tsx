import Router from "./routes";
import {GlobalState, useGlobalState} from "./state/GlobalState";
import "./styles/Global";

export default function App() {
  const [globalState] = useGlobalState();

  return (
    <main className={`${globalState.isDark ? "bg-black" : "bg-white"}`}>
      <Router />
    </main>
  );
}
