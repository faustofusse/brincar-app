// import { Ionicons } from '@expo/vector-icons';
import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {Text} from 'react-native';
import Colors from '../assets/styles/Colors';

export default function TabBarIcon(props) {
  return (
    // <Text>h</Text>
    <FontAwesomeIcon icon={props.icon} style={{ marginBottom: -3 }} size={25} color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault} />
  );
}
