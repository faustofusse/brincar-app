import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text } from 'react-native';
import TabNavigation from './navigation/TabNavigator';

export default function App(props) {
    return (
        <NavigationContainer>
            <TabNavigation />
        </NavigationContainer>
    )
}