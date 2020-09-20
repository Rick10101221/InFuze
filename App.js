import React, { useState } from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import { AppLoading } from "expo";
import Login from "./src/screens/Login";
import Welcome1 from "./src/screens/Welcome1";
import Welcome from "./src/screens/Welcome";
import Signup from "./src/screens/Signup";
import Page1 from "./src/screens/Page1";
import Page2 from "./src/screens/Page2";
import Page3 from "./src/screens/Page3";
import Page4 from "./src/screens/Page4";
import Page5 from "./src/screens/Page5"
import Page6 from "./src/screens/Page6"
import FinalDrink from "./src/screens/FinalDrink.jsx"
import ThanksyouScreen from "./src/screens/ThankyouScreen"
import Gallery from "./src/screens/Gallery"
import Amplify from 'aws-amplify'
import config from './aws-exports'
Amplify.configure(config)

const DrawerNavigation = createDrawerNavigator({
  Welcome1: Welcome1,
  Welcome: Welcome,
  Page1: Page1,
  Page2: Page2,
  Page3: Page3,
  Page4: Page4,
  Page5: Page5,
  Page6: Page6,
  Thanksyou: ThanksyouScreen,
  Gallery: Gallery,
  FinalDrink
});

const StackNavigation = createStackNavigator(
  {
    DrawerNavigation: {
      screen: DrawerNavigation
    },
    Welcome1: Welcome1,
    Welcome: Welcome,
    Page1: Page1,
    Page2: Page2,
    Page3: Page3,
    Page4: Page4,
    Page5: Page5,
    Page6: Page6,
    Thanksyou: ThanksyouScreen,
    Gallery: Gallery,
    FinalDrink
  },
  {
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(StackNavigation);

function App() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  if (!isLoadingComplete) {
    return (
      <AppContainer />
    );
  } else {
    return isLoadingComplete ? <AppContainer /> : <AppLoading />;
  }
}
function handleLoadingError(error) {
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

export default App;
