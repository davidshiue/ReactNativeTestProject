/**
 * @format
 */

import 'react-native-gesture-handler'; // 必須放在最頂端！
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
