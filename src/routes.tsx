import { HomeScreen, SplashScreen } from "./pages";
import { SendCode, SendSMS } from "./pages/Auth";

import { Wallets } from "./pages/Common";
import { pageNames } from "@src/cosntant";

const routes: { name: string; component: React.FC }[] = [
  { name: pageNames.splash, component: SplashScreen },
  { name: pageNames.home.index, component: HomeScreen },
  { name: pageNames.auth.sendSMS, component: SendSMS },
  { name: pageNames.auth.sendCode, component: SendCode },
  { name: pageNames.wallet.list, component: Wallets },
];

export default routes;
