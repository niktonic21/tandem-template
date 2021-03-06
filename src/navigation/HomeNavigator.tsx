import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { isWeb } from '@layout';

import HomeScreen from '../screens/HomeScreen';
import { HomeParamList } from '../utils/NavigationTypes';
import LinksScreen from '../screens/LinksScreen';

const headerMode = isWeb ? 'none' : 'screen';

const HomeStack = createStackNavigator<HomeParamList>();

export default function HomeNavigator() {
    return (
        <HomeStack.Navigator headerMode={headerMode}>
            <HomeStack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{ headerTitle: 'Home' }}
            />
            <HomeStack.Screen
                name="LinksScreen"
                component={LinksScreen}
                options={{ headerTitle: 'Links' }}
            />
        </HomeStack.Navigator>
    );
}
