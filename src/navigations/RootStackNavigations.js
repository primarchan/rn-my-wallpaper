import { ImageDetailScreen } from "../screen/ImageDetailScreen";
import { BottomTabNavigations } from "./BottomTabNavigations";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export const RootStackNavigations = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="BottomTab"
        component={BottomTabNavigations}
      ></Stack.Screen>
      <Stack.Screen
        name="ImageDetail"
        component={ImageDetailScreen}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};
