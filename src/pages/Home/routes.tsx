import { HomeIcon } from "@src/components/icons";
import HomeScreen from "./Home";
import SettingsScreen from "./Settings";
import { pageNames } from "@src/cosntant";

const routes: {
  name: string;
  component: JSX.Element;
  label: string;
}[] = [
  {
    name: pageNames.home.settings,
    component: SettingsScreen,
    label: "settings",
  },
  { name: pageNames.home.home, component: HomeScreen, label: "home" },
];

export default routes;
