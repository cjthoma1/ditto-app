import {
    AntDesign,
    FontAwesome,
    MaterialCommunityIcons
} from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState } from 'react';
import { Platform, StatusBar } from 'react-native';
import HomeButtom from '../components/HomeButton';
import Discover from '../screens/Discover';
import Home from '../screens/Home';
import Inbox from '../screens/Inbox';
import Me from '../screens/Me';
import Record from '../screens/Record';
import { RootStackParamList } from '../types';
import NotFoundScreen from '../screens/NotFoundScreen';

const Tab = createMaterialBottomTabNavigator();

const AppRoutes: React.FC = () => {
    const [home, setHome] = useState(true);

    StatusBar.setBarStyle('dark-content');

    if (Platform.OS === 'android') StatusBar.setBackgroundColor('#fff');

    if (home) {
        StatusBar.setHidden(true);
        if (Platform.OS === 'android') {
            StatusBar.setBackgroundColor('#fff');
            StatusBar.setBarStyle('light-content');
        }
    } else {
        StatusBar.setHidden(false);
    }

    return (
        <Tab.Navigator
            shifting={false}
            barStyle={{
                backgroundColor: home ? '#000' : '#fff'
            }}
            initialRouteName="Home"
            activeColor={home ? '#fff' : '#000'}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                listeners={{
                    focus: () => setHome(true),
                    blur: () => setHome(false)
                }}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="home" size={24} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name="Discover"
                component={Discover}
                options={{
                    tabBarLabel: 'Discover',
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="search1" size={24} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name="Live"
                component={Record}
                listeners={({ navigation }) => ({
                    tabPress: (e) => {
                        // Prevent default action
                        e.preventDefault();

                        // Do something with the `navigation` object
                        navigation.navigate('Record');
                    }
                })}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: () => <HomeButtom home={home} />
                }}
            />
            <Tab.Screen
                name="Inbox"
                component={Inbox}
                options={{
                    tabBarLabel: 'Inbox',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons
                            name="message-text-outline"
                            size={24}
                            color={color}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="Me"
                component={Me}
                options={{
                    tabBarLabel: 'Me',
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="user" size={24} color={color} />
                    )
                }}
            />
        </Tab.Navigator>
    );
};

const Stack = createStackNavigator<RootStackParamList>();

const RootStackScreen: React.FC = () => {
    return (
        <Stack.Navigator mode="modal">
            <Stack.Screen
                name="Main"
                component={AppRoutes}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Record"
                component={Record}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="NotFound"
                component={NotFoundScreen}
                options={{ title: 'Oops!' }}
            />
        </Stack.Navigator>
    );
};

export default RootStackScreen;
