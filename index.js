/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { DefaultTheme, Provider as ProvidePaper} from 'react-native-paper';
const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: 'tomato',
      accent: 'yellow',
    },
  };
function Main(){
    return(
        <ProvidePaper>
            <App/>
        </ProvidePaper>
    )
}
AppRegistry.registerComponent(appName, () => Main);
