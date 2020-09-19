import React, { useState } from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import Login from "./src/screens/Login";
import Welcome from "./src/screens/Welcome";
import Signup from "./src/screens/Signup";
import Page1 from "./src/screens/Page1";
import Page2 from "./src/screens/Page2";
import Page3 from "./src/screens/Page3";
import Page4 from "./src/screens/Page4";

const DrawerNavigation = createDrawerNavigator({
  Login: Login,
  Welcome: Welcome,
  Signup: Signup,
  Page1: Page1,
  Page2: Page2,
  Page3: Page3,
  Page4: Page4
});

const StackNavigation = createStackNavigator(
  {
    DrawerNavigation: {
      screen: DrawerNavigation
    },
    Login: Login,
    Welcome: Welcome,
    Signup: Signup,
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
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return isLoadingComplete ? <AppContainer /> : <AppLoading />;
  }
}
async function loadResourcesAsync() {
  await Promise.all([
    Font.loadAsync({
      "roboto-regular": require("./src/assets/fonts/roboto-regular.ttf"),
      "comic-sans-ms-regular": require("./src/assets/fonts/comic-sans-ms-regular.ttf")
    })
  ]);
}
function handleLoadingError(error) {
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

export default App;
