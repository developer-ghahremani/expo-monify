import HomeScreen from "./Home";
import SettingsScreen from "./Settings";
import Transactions from "./Transactions";
import { pageNames } from "@src/cosntant";

const routes: {
  name: string;
  component: JSX.Element;
  label: string;
  icon?: () => JSX.Element;
}[] = [
  { name: pageNames.home.home, component: HomeScreen, label: "home" },
  {
    name: pageNames.home.transactions,
    component: Transactions,
    label: "transactions",
  },
  {
    name: pageNames.home.settings,
    component: SettingsScreen,
    label: "settings",
  },
];

export default routes;
