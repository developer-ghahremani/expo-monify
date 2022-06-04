import HomeScreen from "./Home";
import SettingsScreen from "./Settings";
import { pageNames } from "@src/cosntant";

const routes: { name: string; component: JSX.Element }[] = [
  { name: pageNames.home.settings, component: SettingsScreen },
  { name: pageNames.home.home, component: HomeScreen },
];

export default routes;
