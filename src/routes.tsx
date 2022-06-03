import { HomeScreen, SplashScreen } from "./pages";

import { pageNames } from "@src/cosntant";

const routes: { name: string; component: React.FC }[] = [
  { name: pageNames.splash, component: SplashScreen },
  { name: pageNames.home, component: HomeScreen },
];

export default routes;
