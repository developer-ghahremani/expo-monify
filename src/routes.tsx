import { HomeScreen, SplashScreen } from "./pages";

import { SendSMS } from "./pages/Auth";
import { pageNames } from "@src/cosntant";

const routes: { name: string; component: React.FC }[] = [
  { name: pageNames.splash, component: SplashScreen },
  { name: pageNames.home, component: HomeScreen },
  { name: pageNames.auth.sendSMS, component: SendSMS },
];

export default routes;
