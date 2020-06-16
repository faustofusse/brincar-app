import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { faComments, faHome, faHandsHelping, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';

import TabBarIcon from '../components/TabBarIcon';

import HomeScreen from '../screens/HomeScreen';
import MapScreen from '../screens/MapScreen';
import ServicesScreen from '../screens/ServicesScreen';
import ForumScreen from '../screens/ForumScreen';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
//   navigation.setOptions({ headerTitle: getHeaderTitle(route) });
  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Brincar',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} icon={faHome} />,
        }}
      />
      <BottomTab.Screen
        name="Services"
        component={ServicesScreen}
        options={{
          title: 'Servicios',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} icon={faHandsHelping} />,
        }}
      />
      <BottomTab.Screen
        name="Map"
        component={MapScreen}
        options={{
          title: 'Mapa',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} icon={faMapMarkedAlt} />,
        }}
      />
      <BottomTab.Screen
        name="Forum"
        component={ForumScreen}
        options={{
          title: 'Foro',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-chatbubbles" icon={faComments} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;
  switch (routeName) {
    case 'Home': return 'Brincar';
    case 'Forum': return 'Foro';
    case 'Services': return 'Servicios';
    case 'Map': return 'Mapa';
  }
}
