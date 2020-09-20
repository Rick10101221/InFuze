import React, { useState } from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import { AppLoading } from "expo";
import Login from "./src/screens/Login";
import Welcome from "./src/screens/Welcome";
import Signup from "./src/screens/Signup";
import Page1 from "./src/screens/Page1";
import Page2 from "./src/screens/Page2";
import Page3 from "./src/screens/Page3";
import Page4 from "./src/screens/Page4";
import Infuzer from "./src/screens/Infuzer"
import Amplify from 'aws-amplify'
import config from './aws-exports'
Amplify.configure(config)

const DrawerNavigation = createDrawerNavigator({
  Welcome: Welcome,
  Page1: Page1,
  Page2: Page2,
  Page3: Page3,
  Page4: Page4,
  Infuzer: Infuzer
});

const StackNavigation = createStackNavigator(
  {
    DrawerNavigation: {
      screen: DrawerNavigation
    },
    Welcome: Welcome,
    Page1: Page1,
    Page2: Page2,
    Page3: Page3,
    Page4: Page4
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
