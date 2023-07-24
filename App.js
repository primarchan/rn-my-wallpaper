import { NavigationContainer } from "@react-navigation/native";
import { BottomTabNavigations } from "./src/navigations/BottomTabNavigations";
import { RootStackNavigations } from "./src/navigations/RootStackNavigations";

export default function App() {
  return (
    <NavigationContainer>
      {/**
       *
       *
       * */}
      {/* <BottomTabNavigations /> */}
      <RootStackNavigations />
    </NavigationContainer>
  );
}
