import React from "react";
import { LogProvider } from "@/src/context/LogContext";
import AppNavigator from "@/app/navigation/AppNavigator";

const App: React.FC = () => {
  return (
    <LogProvider>
      <AppNavigator />
    </LogProvider>
  );
};

export default App;
