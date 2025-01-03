import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../pages/Home";
import AddLog from "../pages/AddLog";
import LogDetail from "../pages/LogDetail";
import { RootStackParamList } from "../../src/types/navigationTypes";

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="AddLog" component={AddLog} />
      <Stack.Screen name="LogDetail" component={LogDetail} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
