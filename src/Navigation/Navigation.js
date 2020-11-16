import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Wish,Wish1 } from '../Screens/MainFlow/Wish';



import { MyWishlist } from '../Screens/MainFlow/MyWishlist';
import { OffersTinder, Offers, OffersTinderList } from '../Screens/MainFlow/Offers';
import { Trending } from '../Screens/MainFlow/Trending';
import {Inbox,Chat,NewChat} from '../Screens/MainFlow/Chat'
import { EditProfile, Profile, AccountSettings, AboutTrevi } from '../Screens/MainFlow/Profile';
import { routes } from '../services';

const Stack = createStackNavigator();

function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={routes.trending}
                //initialRouteName="Inbox"
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen
                    name={routes.wish}
                    component={Wish}
                />
                <Stack.Screen
                    name={routes.wish1}
                    component={Wish1}
                />
                <Stack.Screen
                    name={routes.aboutTrevi}
                    component={AboutTrevi}
                />
                <Stack.Screen
                    name={routes.myWishlist}
                    component={MyWishlist}
                    options={{ title: 'My Wishlist' }}
                />
                <Stack.Screen
                    name={routes.offers}
                    component={Offers}
                    options={{ title: 'Offers' }}
                />
                <Stack.Screen
                    name={routes.offersTinder}
                    component={OffersTinder}
                    options={{ title: 'Offers' }}
                />
                <Stack.Screen
                    name={routes.offersTinderList}
                    component={OffersTinderList}
                    options={{ title: 'Offers' }}
                />
                <Stack.Screen
                    name={routes.trending}
                    component={Trending}
                    options={{ title: 'Trending' }}
                />
                <Stack.Screen
                    name="Inbox"
                    component={Inbox}
                    options={{ title: 'Inbox' }}
                />
                <Stack.Screen
                    name="Chat"
                    component={Chat}
                    options={{ title: 'Chat' }}
                />
                <Stack.Screen
                    name="NewChat"
                    component={NewChat}
                    options={{ title: 'NewChat' }}
                />
                <Stack.Screen
                    name={routes.profile}
                    component={Profile}
                    options={{
                        headerShown: false
                    }}
                />
                 <Stack.Screen
                    name={routes.editProfile}
                    component={EditProfile}
                    options={{
                        headerShown: false
                    }}
                />
                  <Stack.Screen
                    name={routes.accountSettings}
                    component={AccountSettings}
                    options={{
                        headerShown: false
                    }}
                />
                
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;
