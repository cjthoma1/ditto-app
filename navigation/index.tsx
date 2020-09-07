import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer
} from '@react-navigation/native';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';
import RootStackScreen from './app.routes';
import LinkingConfiguration from './LinkingConfiguration';

// import RootNavigator from './BottomTabNavigator' Will use for testing themes;

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function NavigZation({
  colorScheme
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
    >
      {/* <RootNavigator /> Will use to test themes*/}
      <RootStackScreen />
    </NavigationContainer>
  );
}
